import React, { useEffect, useMemo, useState } from "react";
import img1 from "../../assets/images/hero-images/house.jpg";
import img2 from "../../assets/images/hero-images/accessory.jpg";
import img3 from "../../assets/images/hero-images/girl.jpg";

const SLIDE_INTERVAL_MS = 4000;

const HeroSlider = () => {
  const images = useMemo(() => [img1, img2, img3], []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] overflow-hidden rounded-2xl shadow-xl">
      {/* Slides */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />

      {/* Controls */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? "bg-white w-6" : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Prev/Next (optional) */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
        <button
          aria-label="Previous slide"
          onClick={() => setIndex((prev) => (prev - 1 + images.length) % images.length)}
          className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/45"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={() => setIndex((prev) => (prev + 1) % images.length)}
          className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/45"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;