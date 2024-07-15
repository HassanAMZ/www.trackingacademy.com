// pages/index.js
import React from "react";
import VideoGrid from "@/components/youtube-replica/VideoGrid";
import ContainerLayout from "@/components/layouts/ContainerLayout";

const Home = () => {
  return (
    <ContainerLayout className="max-w-6xl">
      <VideoGrid />
    </ContainerLayout>
  );
};

export default Home;
