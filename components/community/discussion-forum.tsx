"use client";

import React, { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  where,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "@/app/firebase";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Loader2, AlertCircle } from "lucide-react";
import Container from "@/components/ui/container";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { toast } from "../ui/hooks/use-toast";

interface Post {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  authorPhotoURL: string;
  createdAt: string;
  topic: string;
  likesCount: number;
  commentsCount: number;
}

interface Comment {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  authorPhotoURL: string;
  createdAt: string;
}

const TOPICS = ["All", "General Discussion", "Questions", "Announcements"];

export function SocialDiscussionForum() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [comments, setComments] = useState<{ [key: string]: Comment[] }>({}); // Store comments for each post
  const [newComment, setNewComment] = useState<{ [key: string]: string }>({}); // Store new comment input

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const postsQuery = buildPostsQuery(selectedTopic);
        const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
          const fetchedPosts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Post[];

          setPosts(fetchedPosts);
          setLoading(false);

          // Load comments for each post
          fetchedPosts.forEach((post) => fetchComments(post.id));
        });

        return () => unsubscribe();
      } catch (error) {
        setError("Failed to load posts. Please check your database setup.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedTopic]);

  const buildPostsQuery = (topic: string) => {
    return topic !== "All"
      ? query(
          collection(db, "community_posts"),
          where("topic", "==", topic),
          orderBy("createdAt", "desc"),
        )
      : query(collection(db, "community_posts"), orderBy("createdAt", "desc"));
  };

  const fetchComments = async (postId: string) => {
    try {
      const commentsQuery = query(
        collection(db, "community_posts", postId, "comments"),
        orderBy("createdAt", "asc"),
      );
      const unsubscribe = onSnapshot(commentsQuery, (snapshot) => {
        const fetchedComments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Comment[];

        setComments((prev) => ({
          ...prev,
          [postId]: fetchedComments,
        }));
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newPost.trim()) return;

    try {
      await addDoc(collection(db, "community_posts"), {
        content: newPost,
        authorId: user.uid,
        authorName: user.displayName || "Anonymous",
        authorPhotoURL: user.photoURL || "",
        createdAt: new Date().toISOString(),
        topic: selectedTopic === "All" ? "General Discussion" : selectedTopic,
        likesCount: 0,
        commentsCount: 0,
      });
      setNewPost("");
      toast({ title: "Success", description: "Post created successfully!" });
    } catch (error) {
      console.error("Error adding post:", error);
      toast({
        title: "Error",
        description: "Failed to create post. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAddComment = async (postId: string) => {
    if (!user || !newComment[postId]?.trim()) return;

    try {
      const postRef = doc(db, "community_posts", postId);
      const commentsRef = collection(postRef, "comments");

      await addDoc(commentsRef, {
        content: newComment[postId],
        authorId: user.uid,
        authorName: user.displayName || "Anonymous",
        authorPhotoURL: user.photoURL || "",
        createdAt: new Date().toISOString(),
      });

      await updateDoc(postRef, {
        commentsCount: (comments[postId]?.length || 0) + 1,
      });

      setNewComment((prev) => ({ ...prev, [postId]: "" }));
    } catch (error) {
      console.error("Error adding comment:", error);
      toast({
        title: "Error",
        description: "Failed to add comment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleLike = async (post: Post) => {
    try {
      const postRef = doc(db, "community_posts", post.id);
      await updateDoc(postRef, {
        likesCount: post.likesCount + 1,
      });
    } catch (error) {
      console.error("Error liking post:", error);
      toast({
        title: "Error",
        description: "Failed to like post. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Container className="max-w-4xl space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Tabs value={selectedTopic}>
        <TabsList>
          {TOPICS.map((topic) => (
            <TabsTrigger
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              value={topic}
            >
              {topic}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {user && (
        <form id="discussion-forum" onSubmit={handleSubmitPost}>
          <Textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's on your mind?"
          />
          <Button type="submit" className="mt-2">
            Post
          </Button>
        </form>
      )}

      {loading ? (
        <Loader2 className="mx-auto animate-spin" />
      ) : (
        posts.map((post) => (
          <Card key={post.id} className="mb-4 shadow-lg">
            <CardHeader className="flex items-center">
              <Avatar>
                <AvatarImage src={post.authorPhotoURL} />
                <AvatarFallback>{post.authorName.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <div className="font-semibold">{post.authorName}</div>
                <div className="text-sm text-gray-500">{post.createdAt}</div>
              </div>
            </CardHeader>
            <CardContent>{post.content}</CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" onClick={() => handleLike(post)}>
                <Heart className="mr-2 h-4 w-4" />
                {post.likesCount} Likes
              </Button>
              <Button variant="ghost">
                <MessageCircle className="mr-2 h-4 w-4" />
                {post.commentsCount} Comments
              </Button>
            </CardFooter>

            {/* Comments Section */}
            <div className="px-4 pb-4">
              {comments[post.id]?.map((comment) => (
                <div key={comment.id} className="mt-2 flex items-start">
                  <Avatar>
                    <AvatarImage src={comment.authorPhotoURL} />
                    <AvatarFallback>
                      {comment.authorName.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <div className="font-semibold">{comment.authorName}</div>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                </div>
              ))}
              {user && (
                <div className="mt-4">
                  <Input
                    placeholder="Add a comment..."
                    value={newComment[post.id] || ""}
                    onChange={(e) =>
                      setNewComment((prev) => ({
                        ...prev,
                        [post.id]: e.target.value,
                      }))
                    }
                  />
                  <Button
                    className="mt-2"
                    onClick={() => handleAddComment(post.id)}
                  >
                    Comment
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))
      )}
    </Container>
  );
}
