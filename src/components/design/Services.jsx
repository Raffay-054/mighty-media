import React, { useState, useRef } from 'react';
import { brainwaveWhiteSymbol, gradient, play } from "../../assets"; 
import { useEffect } from 'react';
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";    
import { FaPause } from 'react-icons/fa'; // React icon for pause
export const Gradient = () => { 
 
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      Hey MightyMedia ! Start my campaign today. 
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

export const VideoChatMessage = () => { 
  
  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
      Start Your Camapign today!
      {/* <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem]">
        <img
          src={brainwaveWhiteSymbol}
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div> */}
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

export const VideoBar = () => { 
  const [isPlaying, setIsPlaying] = useState(false); 
  const audioRef = useRef(null);  
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); 
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration; // Calculate seek time
    audioRef.current.currentTime = seekTime; // Set the audio's current time
    setCurrentTime(seekTime); // Update current time state
  };

  // Update duration when audio metadata is loaded
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Add event listeners
  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Cleanup event listeners
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);
  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }; 
  const handleClickProgressBar = (e) => {
    const progressBar = e.target.getBoundingClientRect();
    const clickPosition = e.clientX - progressBar.left; 
    const clickPercentage = clickPosition / progressBar.width; 
    const newTime = clickPercentage * duration; 
    audioRef.current.currentTime = newTime; 
    setCurrentTime(newTime); 
  };  
  const AudioURL = "https://res.cloudinary.com/diml90c1y/video/upload/v1727189231/song_zxzqed.mp3"
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <audio ref={audioRef} src={AudioURL} preload="auto" />
      <div onClick={handlePlayPause} className="cursor-pointer">
        {isPlaying ? (
          <FaPause size={22} color="#ffffff"/> 
        ) : (
          <img
            src={play} // Your play icon
            width={22}
            height={22}
            alt="Play"
          />
        )}
      </div>
      <div className="flex-1 bg-[#D9D9D9] relative h-1 mx-4" onClick={handleClickProgressBar}>
        <div
          className="absolute bg-color-1 h-full"
          style={{
            width: `${(currentTime / duration) * 100}%`, // Calculate the width based on current time
          }}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleSeek}
          className="w-full h-1 appearance-none bg-transparent cursor-pointer"
        />
      </div>
    </div>
  );
};
