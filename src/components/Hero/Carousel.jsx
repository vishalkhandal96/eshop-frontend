import React, { useEffect, useState } from "react";
import carousel_1 from "../../assets/images/carousel/carousel-1.jpg";
import carousel_2 from "../../assets/images/carousel/carousel-2.jpg";
import carousel_3 from "../../assets/images/carousel/carousel-3.jpg";
import carousel_4 from "../../assets/images/carousel/carousel-4.jpg";
import carousel_5 from "../../assets/images/carousel/carousel-5.jpg";
import carousel_6 from "../../assets/images/carousel/carousel-6.jpg";
import carousel_7 from "../../assets/images/carousel/carousel-7.jpg";
import carousel_8 from "../../assets/images/carousel/carousel-8.jpg";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderIndicators, setSliderIndicators] = useState(
    Array(8).fill("bg-gray-400")
  );

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const carouselItems = document.querySelectorAll("[data-carousel-item]");
    carouselItems.forEach((item, index) => {
      if (index === currentSlide) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });

    // Update slider indicators
    const newIndicators = sliderIndicators.map((_, index) =>
      index === currentSlide ? "bg-white" : "bg-gray-400"
    );
    setSliderIndicators(newIndicators);
  }, [currentSlide, sliderIndicators]);

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden sm:h-72">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src={carousel_1}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={carousel_2}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={carousel_3}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={carousel_4}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={carousel_5}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={carousel_6}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={carousel_7}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={carousel_8}
              className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}

        <div className="absolute z-10 flex items-center px-3 py-1 group rounded-lg bg-gray-300/80 -translate-x-1/2 bottom-5 left-1/2 space-x-1 rtl:space-x-reverse">
          {sliderIndicators.map((indicator, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-2 bg-gray-400 focus:hover:bg-white rounded-full ${indicator}`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => handleIndicatorClick(index)}
            ></button>
          ))}
        </div>

        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-0 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrevSlide}
        >
          <span className="inline-flex items-center justify-center w-5 h-10 sm:w-8 sm:h-16 md:w-10 md:h-20 bg-gray-400/80 dark:bg-white/30 group-hover:bg-gray-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-gray-800 dark:text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-0 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNextSlide}
        >
          <span className="inline-flex items-center justify-center w-5 h-10 sm:w-8 sm:h-16 md:w-10 md:h-20 bg-gray-400/80 dark:bg-white/30 group-hover:bg-gray-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-3 h-3 md:w-4 md:h-4 text-gray-800 dark:text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
