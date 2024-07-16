"use client";
import { useRef, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/page";

import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function IndexPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videojs(videoRef.current, {
        sources: [
          {
            src: "/videos/Jofel-20230302-1.mp4",
            type: "video/mp4",
          },
        ],
      });
    }
  });

  return (
    <>
      <Navbar />
      <div>
        <video
          controls
          muted
          loop
          ref={videoRef}
          className="video-js vjs-fluid"
        />
      </div>
      <Footer />
    </>
  );
}
