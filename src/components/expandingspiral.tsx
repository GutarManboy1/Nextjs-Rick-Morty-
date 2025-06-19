import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const ExpandingSpiral = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas?.getContext("2d");

    if (!ctx) return;

    // Handle resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    let angle = 0;
    let radius = 0;
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#97FB9B";

    ctx.beginPath();

    function animate() {
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      ctx.lineTo(x, y);
      ctx.stroke();

      radius += 0.5;
      angle += 0.1;

      if (radius > Math.max(canvas.width, canvas.height)) {
        radius = 0;
        angle = 0;
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#97FB9B";
        ctx.beginPath();
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Fade out after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 20000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 1 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
  )
};

export default ExpandingSpiral;
