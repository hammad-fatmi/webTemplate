"use client";
import { useState } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

return (
  <Container>

    {/* 🚀 PREMIUM CI/CD BUTTON (CENTERED) */}
    <div className="w-full flex justify-center mb-8">
      <a
        href="https://github.com/hammad-fatmi/webTemplate/actions/workflows/deploy.yml"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-2xl text-white font-semibold text-lg
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
        shadow-[0_0_25px_rgba(139,92,246,0.6)]
        transition-all duration-300
        hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.8)]"
      >
        {/* animated glow background */}
        <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition" />

        {/* icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586V4a1 1 0 011-1z" />
        </svg>

        RUN CI/CD PIPELINE

        {/* LIVE pulse dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </a>
    </div>

    {/* 🎬 VIDEO SECTION */}
    <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl cursor-pointer bg-black">

      {/* 🎬 THUMBNAIL STATE */}
      {!playVideo && (
        <div
          onClick={() => setPlayVideo(true)}
          className="absolute inset-0"
        >
          <img
            src="/video/Capture.PNG"
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />

          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* play button */}
          <button className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-white drop-shadow-xl transition-transform group-hover:scale-110"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      )}

      {/* 🎥 VIDEO STATE */}
      {playVideo && (
        <video
          className="w-full h-full aspect-video"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/video/DEVvideo.mp4" type="video/mp4" />
        </video>
      )}
    </div>

  </Container>
);
}
