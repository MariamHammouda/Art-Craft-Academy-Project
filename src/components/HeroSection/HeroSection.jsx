import React from "react";
import HeroSlider from "../HeroImage/HeroSlider";
import { Button } from "../Button/Button.jsx";
import Artlogo from "../../assets/images/hero-images/Artlogo.png";

const HeroSection = () => {
  return (
    <>
      <section id="home" className="bg-[#59ACBE] py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content Column */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Big Logo */}
              <div className="flex justify-center lg:justify-start mb-8">
                <img 
                  src={Artlogo} 
                  alt="Academy of Art and Craft Logo" 
                  className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80 w-auto object-contain drop-shadow-lg"
                />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Discover Your 
                  <span className="text-[#FCD11A] block sm:inline"> Creative</span> 
                  <span className="block">Side</span>
                </h1>
                <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Learn arts and crafts from professionals. Build your skills,
                  unleash your imagination, and create something amazing.
                </p>
              </div>
              
              {/* CTA Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => console.log("Start Learning clicked")}
                  className="px-8 py-4 bg-[#FCD11A] text-[#003FBC] border-2 border-[#FCD11A] rounded-lg hover:bg-white hover:text-[#003FBC] hover:border-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Start Learning
                </Button>
                <Button
                  onClick={() => console.log("Browse Courses clicked")}
                  className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#59ACBE] transition-all duration-300 font-semibold text-lg"
                >
                  Browse Courses
                </Button>
              </div> */}
            </div>
            
            {/* Image Slider Column */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-lg">
                <HeroSlider />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;