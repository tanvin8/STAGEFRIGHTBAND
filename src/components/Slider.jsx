import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4); // default 4

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);

    return () => {
      window.removeEventListener('resize', updateVisibleItems);
    };
  }, []);

  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= items.length - visibleItems;

  const handlePrevious = () => {
    if (!isAtStart) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (!isAtEnd) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="font-fancy relative flex items-center justify-center w-full py-8 bg-pageBlack overflow-hidden">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={isAtStart}
        className={`absolute left-4 sm:left-[40px] text-white text-2xl z-10 ${
          isAtStart ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
        }`}
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>

      {/* Slider Container */}
      <div className="flex overflow-hidden w-full max-w-[80%] mx-auto">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / visibleItems) * 100}%)`,
            width: `${(items.length / visibleItems) * 100}%`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"
            >
              <Link to={`/STAGEFRIGHTBAND${item.path}`}>
                <div className="h-[300px] flex flex-col items-center justify-center border-gray-200 rounded-lg shadow-md dark:border-gray-700 cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-[80%] max-w-[200px] mb-3"
                  />
                  <p className="text-white font-semibold text-lg text-center mb-[-60px]">{item.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={isAtEnd}
        className={`absolute right-4 sm:right-[40px] text-white text-2xl z-10 ${
          isAtEnd ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80'
        }`}
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
    </div>
  );
};

export default Slider;
