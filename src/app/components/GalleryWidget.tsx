'use client';

import { useState, useEffect } from 'react';

export default function GalleryWidget() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(4);

  // Update images per view based on screen size
  useEffect(() => {
    const updateImagesPerView = () => {
      if (window.innerWidth < 640) {
        setImagesPerView(2); // Mobile: 2 images
      } else if (window.innerWidth < 1024) {
        setImagesPerView(3); // Tablet: 3 images
      } else {
        setImagesPerView(4); // Desktop: 4 images
      }
    };

    updateImagesPerView();
    window.addEventListener('resize', updateImagesPerView);
    return () => window.removeEventListener('resize', updateImagesPerView);
  }, []);

  // Actual images from assets folder
  const images = [
    { id: 1, src: '/assets/img1.jpg', alt: 'Modern building 1' },
    { id: 2, src: '/assets/img2.jpg', alt: 'Modern building 2' },
    { id: 3, src: '/assets/img3.jpg', alt: 'Modern building 3' },
    { id: 4, src: '/assets/img4.jpg', alt: 'Modern building 4' },
    { id: 5, src: '/assets/img5.jpg', alt: 'Modern building 5' },
    { id: 6, src: '/assets/img6.jpg', alt: 'Modern building 6' },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => {
      const maxIndex = images.length - imagesPerView;
      return Math.min(prev + 1, maxIndex);
    });
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
  };

  // Get the current set of images to display
  const getVisibleImages = () => {
    return images.slice(currentImageIndex, currentImageIndex + imagesPerView);
  };

  return (
    <div className="bg-[#363C43] rounded-lg shadow-2xl shadow-gray-900/50 p-4 sm:p-6 w-full max-w-2xl mx-auto lg:mx-0">
      {/* Header with icon, tab, and action buttons */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mr-4">
            <span className="text-[#969696] text-sm">?</span>
          </div>
          <button className="px-4 py-2 rounded-md text-sm font-medium bg-black text-white">
            Gallery
          </button>
        </div>
        
        {/* Action buttons on the right */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button className="bg-black hover:bg-gray-600 text-white px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors">
            <span className="hidden sm:inline">+ ADD IMAGE</span>
            <span className="sm:hidden">+</span>
          </button>
          <button
            onClick={prevImage}
            className="w-6 h-6 sm:w-8 sm:h-8 bg-black hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="text-white text-xs sm:text-sm">←</span>
          </button>
          <button
            onClick={nextImage}
            className="w-6 h-6 sm:w-8 sm:h-8 bg-black hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="text-white text-xs sm:text-sm">→</span>
          </button>
          
        </div>
      </div>

      {/* Image gallery */}
      <div className="flex">
        <div className="w-6 h-6 mr-4 shrink-0">
          <div className="w-4 h-6 grid grid-cols-2 gap-0.5">
          <div className="bg-[#2f2f2f]"></div>
            <div className="bg-[#2f2f2f]"></div>
            <div className="bg-[#2f2f2f]"></div>
            <div className="bg-[#2f2f2f]"></div>
            <div className="bg-[#2f2f2f]"></div>
            <div className="bg-[#2f2f2f]"></div>
          </div>
        </div>
        <div className="flex-1">
          <div className={`grid gap-2 sm:gap-4 ${
            imagesPerView === 2 ? 'grid-cols-2' : 
            imagesPerView === 3 ? 'grid-cols-3' : 
            'grid-cols-4'
          }`}>
            {getVisibleImages().map((image, index) => (
              <div
                key={image.id}
                className="w-full"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg overflow-hidden mx-auto cursor-pointer group">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
