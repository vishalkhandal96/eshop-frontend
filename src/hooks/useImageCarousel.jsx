import { useState, useEffect } from "react";

function useImageCarousel() {
  const [hover, setHover] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleMouseEnter = () => {
    setHover(true);
    if (intervalId) clearInterval(intervalId);
    const id = setInterval(() => {
      setImageIndex(
        (prevIndex) => (prevIndex + 1) % (products[0]?.image.length || 1)
      );
    }, 1000);
    setIntervalId(id);
  };

  const handleMouseLeave = () => {
    setHover(false);
    setImageIndex(0);
    if (intervalId) clearInterval(intervalId);
  };

  const handleMouseOver = (index) => {
    setImageIndex(index);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);
  return <div></div>;
}

export default useImageCarousel;
