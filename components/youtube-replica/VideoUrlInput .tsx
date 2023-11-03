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
   <div className='flex w-full flex-col md:flex-row gap-2 px-2 '>
    <input
     type='text'
     value={videoInput}
     onChange={(e) => setVideoInput(e.target.value)}
     placeholder='Enter YouTube video URL'
     className='flex-1 p-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
    />
    <button
     onClick={addVideo}
     className='bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 md:w-40 w-full'>
     Add Video
    </button>
   </div>
   {errorMessage && (
    <p className='text-red-500 text-xs italic'>{errorMessage}</p>
   )}
  </>
 );
};

export default VideoUrlInput;
