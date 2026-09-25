import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(true); // default true = mobile ma render nagarne

  useEffect(() => {
    // Touch device check - yesle desktop/laptop matra true dincha
    const checkTouch = window.matchMedia("(pointer: fine)").matches;
    setIsTouch(!checkTouch);
  }, []);

  useEffect(() => {
    if (isTouch) return; // touch device bhaye event listener nै nalagaune

    const moveHandler = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, [isTouch]);

  if (isTouch) return null; // phone/tablet ma kehi render nagarne

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-400 to-blue-500 blur-3xl opacity-80" />
    </div>
  );
};

export default CustomCursor;