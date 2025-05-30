"use client";

import ChatBot from "@/components/ai/ChatBot";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <ChatBot />
      <Footer />
    </>
  );
}
