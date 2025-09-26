import React from "react";
import HeroSlider from "../HeroImage/HeroSlider";
import { Button } from "../Button/Button.jsx";

const HeroSection = () => {
  return (
    <>
      {/* Header Navigation */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-end">
            
            {/* Navigation Menu on Right */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-[#003FBC] font-medium transition-colors">HOME</a>
              <a href="#about" className="text-gray-700 hover:text-[#003FBC] font-medium transition-colors">ABOUT</a>
              <a href="#courses" className="text-gray-700 hover:text-[#003FBC] font-medium transition-colors">COURSES</a>
              <a href="#gallery" className="text-gray-700 hover:text-[#003FBC] font-medium transition-colors">GALLERY</a>
              <a href="#contact" className="text-gray-700 hover:text-[#003FBC] font-medium transition-colors">CONTACT</a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Slider */}
      <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content Column */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Discover Your 
                  <span className="text-[#003FBC] block sm:inline"> Creative</span> 
                  <span className="block">Side 🎨</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Learn arts and crafts from professionals. Build your skills,
                  unleash your imagination, and create something amazing.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => console.log("Start Learning clicked")}
                  className="px-8 py-4 bg-[#003FBC] text-white border-2 border-[#003FBC] rounded-lg hover:bg-[#FCD11A] hover:text-[#003FBC] hover:border-[#FCD11A] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Start Learning
                </Button>
                <Button
                  onClick={() => console.log("Browse Courses clicked")}
                  className="px-8 py-4 bg-transparent text-[#003FBC] border-2 border-[#003FBC] rounded-lg hover:bg-[#003FBC] hover:text-white transition-all duration-300 font-semibold text-lg"
                >
                  Browse Courses
                </Button>
              </div>
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