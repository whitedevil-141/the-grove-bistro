import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Lightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20
            flex items-center justify-center transition-colors duration-300 z-10"
          aria-label="Close lightbox"
          id="lightbox-close"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Prev Button */}
        <button
          onClick={(e) => { e.stopPropagation(); handlePrev() }}
          className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-grove-gold/30
            flex items-center justify-center transition-colors duration-300 z-10"
          aria-label="Previous image"
          id="lightbox-prev"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-5xl max-h-[80vh] w-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
          />
        </motion.div>

        {/* Next Button */}
        <button
          onClick={(e) => { e.stopPropagation(); handleNext() }}
          className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-grove-gold/30
            flex items-center justify-center transition-colors duration-300 z-10"
          aria-label="Next image"
          id="lightbox-next"
        >
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-body">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
