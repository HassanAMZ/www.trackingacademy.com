"use client";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  where,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { ref, onValue, set } from "firebase/database";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageCircle } from "lucide-react";
import { UserAuth } from "@/context/AuthContext";
import { db, database as realtimeDb } from "@/app/firebase";
import Container from "../ui/container";

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
  postId: string;
  content: string;
  authorId: string;
  authorName: string;
  authorPhotoURL: string;
  createdAt: string;
}

const TOPICS = ["All", "General Discussion", "Questions", "Announcements"];

export function SocialDiscussionForum() {
  const { user } = UserAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [comments, setComments] = useState<Record<string, Comment[]>>({});
  const [newComment, setNewComment] = useState<Record<string, string>>({});
  const [showComments, setShowComments] = useState<Record<string, boolean>>({});

  // Listen for posts with topic filter
  useEffect(() => {
    let postsQuery;
    if (selectedTopic === "All") {
      postsQuery = query(
        collection(db, "community_posts"),
        orderBy("createdAt", "desc"),
      );
    } else {
      postsQuery = query(
        collection(db, "community_posts"),
        where("topic", "==", selectedTopic),
        orderBy("createdAt", "desc"),
      );
    }

    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      const fetchedPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];
      setPosts(fetchedPosts);
    });

    return () => unsubscribe();
  }, [selectedTopic]);

  // Listen for comments for each visible post
  useEffect(() => {
    const unsubscribes = posts.map((post) => {
      const commentsQuery = query(
        collection(db, `community_posts/${post.id}/comments`),
        orderBy("createdAt", "desc"),
      );

      return onSnapshot(commentsQuery, (snapshot) => {
        const fetchedComments = snapshot.docs.map((doc) => ({
          id: doc.id,
          postId: post.id,
          ...doc.data(),
        })) as Comment[];

        setComments((prev) => ({
          ...prev,
          [post.id]: fetchedComments,
        }));
      });
    });

    return () => unsubscribes.forEach((unsubscribe) => unsubscribe());
  }, [posts]);

  // Listen for realtime reactions
  useEffect(() => {
    if (!user) return;

    const reactionsRef = ref(realtimeDb, "reactions");
    const unsubscribe = onValue(reactionsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setPosts((currentPosts) =>
          currentPosts.map((post) => ({
            ...post,
            likesCount: (data[post.id]?.likes || []).length || 0,
          })),
        );
      }
    });

    return () => unsubscribe();
  }, [user]);

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user && newPost.trim()) {
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
      } catch (error) {
        console.error("Error adding post:", error);
      }
    }
  };

  const handleLike = async (postId: string) => {
    if (!user) return;

    const reactionRef = ref(
      realtimeDb,
      `reactions/${postId}/likes/${user.uid}`,
    );
    const timestamp = new Date().toISOString();
    await set(reactionRef, timestamp);
  };

  const handleComment = async (postId: string) => {
    if (!user || !newComment[postId]?.trim()) return;

    try {
      const commentRef = collection(db, `community_posts/${postId}/comments`);
      await addDoc(commentRef, {
        content: newComment[postId],
        authorId: user.uid,
        authorName: user.displayName || "Anonymous",
        authorPhotoURL: user.photoURL || "",
        createdAt: new Date().toISOString(),
      });

      // Update comment count
      const postRef = doc(db, "community_posts", postId);
      const currentComments = comments[postId] || [];
      await updateDoc(postRef, {
        commentsCount: currentComments.length + 1,
      });

      setNewComment((prev) => ({ ...prev, [postId]: "" }));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const toggleComments = (postId: string) => {
    setShowComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <Container className="space-y-6">
      <Tabs value={selectedTopic} className="w-full">
        <TabsList className="w-full justify-start">
          {TOPICS.map((topic) => (
            <TabsTrigger
              key={topic}
              value={topic}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {user && (
        <form onSubmit={handleSubmitPost} className="space-y-4">
          <Input
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Start a discussion..."
            className="w-full"
          />
          <div className="flex justify-end">
            <Button type="submit">Post</Button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="flex flex-row items-start gap-4">
              <Avatar>
                <AvatarImage src={post.authorPhotoURL} alt={post.authorName} />
                <AvatarFallback>
                  {post.authorName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{post.authorName}</CardTitle>
                  <span className="text-sm text-muted-foreground">
                    {format(new Date(post.createdAt), "MMM d, yyyy")}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {post.topic}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="whitespace-pre-wrap">{post.content}</p>

              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className="flex gap-2"
                >
                  <Heart
                    className={post.likesCount > 0 ? "fill-current" : ""}
                  />
                  {post.likesCount}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleComments(post.id)}
                  className="flex gap-2"
                >
                  <MessageCircle /> {post.commentsCount}
                </Button>
              </div>

              {showComments[post.id] && (
                <div className="mt-4 space-y-4">
                  {comments[post.id]?.map((comment) => (
                    <div key={comment.id} className="flex items-start gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={comment.authorPhotoURL}
                          alt={comment.authorName}
                        />
                        <AvatarFallback>
                          {comment.authorName.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="font-medium">
                            {comment.authorName}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {format(new Date(comment.createdAt), "MMM d, yyyy")}
                          </span>
                        </div>
                        <p>{comment.content}</p>
                      </div>
                    </div>
                  ))}

                  {user && (
                    <div className="flex gap-2">
                      <Input
                        value={newComment[post.id] || ""}
                        onChange={(e) =>
                          setNewComment((prev) => ({
                            ...prev,
                            [post.id]: e.target.value,
                          }))
                        }
                        placeholder="Write a comment..."
                      />
                      <Button onClick={() => handleComment(post.id)} size="sm">
                        Comment
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
