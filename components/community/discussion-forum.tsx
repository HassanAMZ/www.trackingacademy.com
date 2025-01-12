"use client";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  limit,
  startAfter,
  getDocs,
  Query,
  DocumentData,
} from "firebase/firestore";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { db } from "@/app/firebase";
import { UserAuth } from "@/context/AuthContext";

interface Post {
  id: string;
  content: string;
  authorId: string;
  authorName: string;
  authorPhotoURL: string;
  createdAt: string;
}

const POSTS_PER_PAGE = 10;

export function DiscussionForum() {
  const { user } = UserAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState<DocumentData | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Initial query with limit
    const q = query(
      collection(db, "discussion_posts"), // Renamed collection
      orderBy("createdAt", "desc"),
      limit(POSTS_PER_PAGE),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];
      setPosts(fetchedPosts);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(querySnapshot.docs.length === POSTS_PER_PAGE);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user && newPost.trim()) {
      try {
        await addDoc(collection(db, "discussion_posts"), {
          content: newPost,
          authorId: user.uid,
          authorName: user.displayName || "Anonymous",
          authorPhotoURL: user.photoURL || "",
          createdAt: new Date().toISOString(),
        });
        setNewPost("");
      } catch (error) {
        console.error("Error adding post:", error);
      }
    }
  };

  const loadMorePosts = async () => {
    if (!lastVisible || loading) return;

    setLoading(true);
    try {
      const q = query(
        collection(db, "discussion_posts"),
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(POSTS_PER_PAGE),
      );

      const querySnapshot = await getDocs(q);
      const newPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Post[];

      setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(querySnapshot.docs.length === POSTS_PER_PAGE);
    } catch (error) {
      console.error("Error loading more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "MMM d, yyyy 'at' h:mm a");
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Discussion Forum</h2>
      {user && (
        <form onSubmit={handleSubmitPost} className="flex gap-2">
          <Input
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Write a post..."
            className="flex-1"
          />
          <Button type="submit">Post</Button>
        </form>
      )}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarImage src={post.authorPhotoURL} alt={post.authorName} />
                <AvatarFallback>
                  {post.authorName.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <CardTitle className="text-lg">{post.authorName}</CardTitle>
                <time className="text-sm text-gray-500">
                  {formatDate(post.createdAt)}
                </time>
              </div>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{post.content}</p>
            </CardContent>
          </Card>
        ))}
        {hasMore && (
          <div className="flex justify-center">
            <Button
              onClick={loadMorePosts}
              disabled={loading}
              variant="outline"
            >
              {loading ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
