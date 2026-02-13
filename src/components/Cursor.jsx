import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[999]
                 bg-gradient-to-r from-sky-400 to-purple-500
                 blur-md opacity-70"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`
      }}
    />
  );
};

export default Cursor;
