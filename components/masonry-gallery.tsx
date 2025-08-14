"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

interface MasonryImage {
  src: string
  alt: string
  title: string
  description: string
  height?: number
}

interface MasonryGalleryProps {
  images: MasonryImage[]
  columns?: {
    default: number
    lg: number
    md: number
    sm: number
  }
}

export default function MasonryGallery({ images, columns = { default: 4, lg: 3, md: 2, sm: 1 } }: MasonryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  // Handle image load
  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set([...prev, index]))
  }

  // Handle fullscreen navigation
  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    if (direction === "prev") {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return

      switch (e.key) {
        case "Escape":
          setSelectedImage(null)
          break
        case "ArrowLeft":
          navigateImage("prev")
          break
        case "ArrowRight":
          navigateImage("next")
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  return (
    <>
      {/* Masonry Grid */}
      <div className="w-full">
        {/* CSS Grid Masonry Layout */}
        <div
          className="grid gap-4 lg:gap-6"
          style={{
            gridTemplateColumns: `repeat(${columns.sm}, minmax(0, 1fr))`,
          }}
        >
          <style jsx>{`
            @media (min-width: 640px) {
              .masonry-grid {
                grid-template-columns: repeat(${columns.md}, minmax(0, 1fr));
              }
            }
            @media (min-width: 1024px) {
              .masonry-grid {
                grid-template-columns: repeat(${columns.lg}, minmax(0, 1fr));
              }
            }
            @media (min-width: 1280px) {
              .masonry-grid {
                grid-template-columns: repeat(${columns.default}, minmax(0, 1fr));
              }
            }
          `}</style>

          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl lg:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer bg-white"
              onClick={() => setSelectedImage(index)}
              style={{
                height: image.height ? `${image.height}px` : "auto",
                minHeight: "200px",
              }}
            >
              {/* Loading Skeleton */}
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-red-100 animate-pulse flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* Image */}
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  loadedImages.has(index) ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(index)}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="h-6 w-6 text-gray-700" />
                  </div>
                </div>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-gray-900 font-semibold text-sm lg:text-base mb-1">{image.title}</h4>
                    <p className="text-gray-600 text-xs lg:text-sm line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
            aria-label="Close fullscreen view"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 text-white hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Main Image */}
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Image Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 mx-auto max-w-2xl">
                <h3 className="text-gray-900 font-bold text-lg lg:text-xl mb-2">{images[selectedImage].title}</h3>
                <p className="text-gray-600 text-sm lg:text-base">{images[selectedImage].description}</p>
                <div className="mt-3 flex items-center justify-between text-xs lg:text-sm text-gray-500">
                  <span>
                    Image {selectedImage + 1} of {images.length}
                  </span>
                  <span>Press ESC to close</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
