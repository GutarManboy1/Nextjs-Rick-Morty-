"use client";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { useRef, useState } from "react";
import {ExpandingSpiral} from "@/components/expandingspiral";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    <main className="relative min-h-screen overflow-hidden">
     
      <ExpandingSpiral />

      <Image
        src="/portal.webp"
        alt="portal"
        fill
        className="object-contain rotate-slow filter blur z-0"
      />

      <audio ref={audioRef} loop src="/rick and morty.mp3" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <Image
          src="/font.png"
          alt="font"
          width={700}
          height={700}
          className="m-0 backdrop-blur-md bg-black/40 p-4 rounded-2xl ripple shadow-lg"
        />

        <div className="mt-10">
          <Navbar />
        </div>

        <Image
          src={isPlaying ? "/plumbus.png" : "/plumbus.png"}
          alt="Play or pause audio"
          width={100}
          height={100}
          onClick={toggleAudio}
          className="absolute bottom-12 left-1 cursor-pointer transform transition duration-500 ease-in-out hover:scale-110"
        />
      </div>
    </main>
  )
}
