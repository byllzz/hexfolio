import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height, points = [];

    const spacing = 40;
    const mouse = { x: -1000, y: -1000, radius: 150 };

    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.vx = 0;
        this.vy = 0;
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          let force = (mouse.radius - distance) / mouse.radius;
          let angle = Math.atan2(dy, dx);
          this.vx -= Math.cos(angle) * force * 10;
          this.vy -= Math.sin(angle) * force * 10;
        }

        this.vx += (this.baseX - this.x) * 0.05;
        this.vy += (this.baseY - this.y) * 0.05;

        // Friction
        this.vx *= 0.85;
        this.vy *= 0.85;

        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      points = [];

      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          points.push(new Point(x, y));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = '#cccccc53';
      ctx.beginPath();

      points.forEach((p) => {
        p.update();
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
      });

      ctx.stroke();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      init();
    };

    // Setup
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    init();
    animate();

    // Clean up to prevent memory leaks/multiple loops
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 bg-[#000] pointer-events-none"
    />
  );
};

export default BackgroundCanvas;
