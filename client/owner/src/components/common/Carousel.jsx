import { useState } from "react";

const Carousel = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-2xl group">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-1 bg-base-300/20">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-in-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out transform
            ${index === currentSlide 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"}`}
        >
          {/* Image Container */}
          <div className="relative h-full">
            <img
              src={slide}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        {/* Previous Button */}
        <button 
          onClick={prevSlide} 
          className="btn btn-circle btn-sm md:btn-md bg-black/20 border-0 text-white hover:bg-black/40 
            backdrop-blur-sm opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0
            transition-all duration-300"
        >
          ❮
        </button>

        {/* Next Button */}
        <button 
          onClick={nextSlide} 
          className="btn btn-circle btn-sm md:btn-md bg-black/20 border-0 text-white hover:bg-black/40 
            backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0
            transition-all duration-300"
        >
          ❯
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${index === currentSlide 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>

      {/* Current Slide Counter */}
      <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm text-white px-3 py-1 
        rounded-full text-sm font-medium z-20">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Carousel;