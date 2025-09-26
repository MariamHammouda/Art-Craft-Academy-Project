import React from "react";
import HeroSlider from "../HeroImage/HeroSlider";
import { Button } from "../Button/Button.jsx";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* ---------------- text contents section -------------------- */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Discover Your Creative Side 🎨
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Learn arts and crafts from professionals. Build your skills,
              unleash your imagination, and create something amazing.
            </p>
            <Button
              onClick={() => console.log("Learn more clicked")}
              className="px-8 py-3 bg-[#003FBC] text-white border-2 border-[#003FBC] rounded-lg hover:bg-[#FCD11A] hover:text-[#003FBC] hover:border-[#FCD11A] transition duration-300 font-semibold"
            >
              Learn more
            </Button>
          </div>
          
          {/* ---------------- image section -------------------- */}
          <div className="flex justify-center items-center">
            <HeroSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
