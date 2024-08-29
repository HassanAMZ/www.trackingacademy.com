// VideoUrlInput.tsx

import React from "react";

interface VideoUrlInputProps {
  videoInput: string;
  setVideoInput: React.Dispatch<React.SetStateAction<string>>;
  addVideo: () => void;
  errorMessage: string;
}

const VideoUrlInput: React.FC<VideoUrlInputProps> = ({
  videoInput,
  setVideoInput,
  addVideo,
  errorMessage,
}) => {
  return (
    <>
      <div className="flex w-full flex-col gap-2 px-2 lg:flex-row">
        <input
          type="text"
          value={videoInput}
          onChange={(e) => setVideoInput(e.target.value)}
          placeholder="Enter YouTube video URL"
          className="w-full flex-1 rounded-full border border-gray-300 p-2 shadow focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addVideo}
          className="w-full rounded-full bg-blue-500 p-2 text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 lg:w-40"
        >
          Add Video
        </button>
      </div>
      {errorMessage && (
        <p className="text-xs italic text-red-500">{errorMessage}</p>
      )}
    </>
  );
};

export default VideoUrlInput;
