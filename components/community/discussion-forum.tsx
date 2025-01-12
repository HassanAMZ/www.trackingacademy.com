"use client";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/app/firebase";
import { UserAuth } from "@/context/AuthContext";

export function DiscussionForum() {
  const { user } = UserAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "forum_posts"),
      orderBy("createdAt", "desc"),
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedPosts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(fetchedPosts);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (user && newPost.trim()) {
      try {
        await addDoc(collection(db, "forum_posts"), {
          content: newPost,
          authorId: user.uid,
          authorName: user.displayName,
          createdAt: new Date().toISOString(),
        });
        setNewPost("");
      } catch (error) {
        console.error("Error adding post:", error);
      }
    }
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
          />
          <Button type="submit">Post</Button>
        </form>
      )}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.authorName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
