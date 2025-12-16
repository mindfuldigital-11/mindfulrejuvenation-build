

import React, { useState } from 'react';
import { X, Image as ImageIcon } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [imageLoading, setImageLoading] = useState<Record<number, boolean>>({});

  // Real facility photos with SEO-optimized alt text and professional display titles
  const galleryImages = [
    {
      src: "/lovable-uploads/3f7c5e9d-5ac1-49a8-ba02-0c5c00656188.png",
      alt: "Modern mental health treatment facility exterior - Mindful Rejuvenation Center with professional psychiatric care signage and accessible entrance",
      title: "Main Treatment Center"
    },
    {
      src: "/lovable-uploads/d879251b-5f00-4b51-8694-ff901b0eacb0.png",
      alt: "Contemporary glass building housing Mindful Rejuvenation mental health services with convenient parking for patients and families",
      title: "Modern Healthcare Building"
    },
    {
      src: "/lovable-uploads/2e303c15-391b-475c-9ca0-caa3ab16e963.png",
      alt: "Welcoming reception area at Mindful Rejuvenation mental health center with comfortable seating for therapy and counseling patients",
      title: "Reception & Welcome Area"
    },
    {
      src: "/lovable-uploads/44183929-c3cd-4a13-9fc1-5252182c64b0.png",
      alt: "Professional mental health reception desk with friendly staff providing psychiatric services and therapy appointments",
      title: "Patient Services Desk"
    },
    {
      src: "/lovable-uploads/3f9ccdfe-7d3d-4602-98d0-1fc80e44bb7e.png",
      alt: "Comfortable patient lounge area with leather seating for mental health counseling and therapy waiting room",
      title: "Comfort Lounge"
    },
    {
      src: "/lovable-uploads/b731c18d-0d11-402f-bcfd-3df68bdd47a4.png",
      alt: "Private therapy room for individual counseling sessions with calming environment and professional psychiatric care setup",
      title: "Private Therapy Suite"
    },
    {
      src: "/lovable-uploads/626bb7a6-d1e4-4675-9ab2-f0afe1c95ffe.png",
      alt: "Inpatient mental health care room with medical beds and comfortable amenities for psychiatric treatment and recovery",
      title: "Inpatient Care Room"
    },
    {
      src: "/lovable-uploads/e290ed8b-e0f9-439f-b621-a703d5d77b62.png",
      alt: "Therapeutic recreation area with wooden tables for group therapy activities and mental health recovery programs",
      title: "Group Therapy Space"
    },
    {
      src: "/lovable-uploads/8d6973da-09e8-4169-b18b-68583e954120.png",
      alt: "Mental health recreation room with chess tables and sports court for therapeutic activities and patient wellness programs",
      title: "Wellness & Recreation Center"
    },
    {
      src: "/lovable-uploads/db2355ea-eaf8-498e-9f09-df9a40d88875.png",
      alt: "Inspirational elevator with hope message promoting mental health awareness and recovery at psychiatric treatment facility",
      title: "Inspirational Spaces"
    }
  ];

  const handleImageLoad = (index: number) => {
    setImageLoading(prev => ({ ...prev, [index]: false }));
    console.log(`✅ FACILITY IMAGE ${index} LOADED:`, galleryImages[index].src);
    console.log(`Alt text: ${galleryImages[index].alt}`);
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
    setImageLoading(prev => ({ ...prev, [index]: false }));
    console.error(`❌ FACILITY IMAGE ${index} FAILED TO LOAD:`, galleryImages[index].src);
    console.error(`Expected facility photo: ${galleryImages[index].alt}`);
  };

  const handleImageLoadStart = (index: number) => {
    setImageLoading(prev => ({ ...prev, [index]: true }));
    console.log(`🔄 STARTING TO LOAD FACILITY IMAGE ${index}:`, galleryImages[index].src);
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  // Debug: Log all facility images on component mount
  React.useEffect(() => {
    console.log('🏥 FACILITY GALLERY - Real Facility Images:');
    galleryImages.forEach((img, idx) => {
      console.log(`${idx + 1}. ${img.title} -> ${img.src}`);
    });
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-700 mb-4 font-montserrat">Our Mental Health Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our modern, welcoming spaces thoughtfully designed for your comfort and well-being throughout your mental health journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100 min-h-[256px]"
              onClick={() => !imageErrors[index] && openLightbox(index)}
            >
              {imageLoading[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 z-10">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
                  <p className="ml-2 text-sm text-gray-600">Loading facility photo...</p>
                </div>
              )}
              
              {imageErrors[index] ? (
                <div className="w-full h-64 flex flex-col items-center justify-center bg-red-50 text-red-600 border-2 border-red-200">
                  <ImageIcon size={48} className="mb-2" />
                  <p className="text-sm font-medium text-center px-4 mb-1">FACILITY PHOTO NOT FOUND</p>
                  <p className="text-xs text-center px-4 mb-2">{image.title}</p>
                  <p className="text-xs text-red-400">Path: {image.src}</p>
                </div>
              ) : (
                <>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    onLoad={() => handleImageLoad(index)}
                    onError={() => handleImageError(index)}
                    onLoadStart={() => handleImageLoadStart(index)}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">{image.title}</p>
                  </div>
                </>
              )}
              
              {!imageErrors[index] && (
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <p className="text-sm">Click to view larger</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-green-300 z-10 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
              >
                <X size={24} />
              </button>
              
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center bg-black bg-opacity-50 rounded p-2">
                <p className="text-lg font-medium">{galleryImages[selectedImage].title}</p>
                <p className="text-xs mt-1 text-green-200">
                  {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-300 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-300 bg-black bg-opacity-50 rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;

