import React, { useState, useEffect } from "react";

export const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000); // Change images every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <img
      className="brightness-50 absolute w-full semi-md-lg:h-section h-section-lite object-cover object-center pt-gallery-mini mini:pt-gallery"
      style={{
        "-webkit-filter": "brightness(50%)",
      }}
      src={images[currentIndex]}
      alt={images[currentIndex]}
    />
  );
};
