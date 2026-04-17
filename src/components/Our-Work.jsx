import { useState } from "react"
import { motion } from "framer-motion"

const ourWorkImages = ["/work1.jpeg", "/work2.jpeg", "/work6.jpeg", "/work7.jpeg", "/work8.jpeg"]
const clientSatisfactionImages = [
  "/work3.jpeg",
  "/work4.jpeg",
  "/work5.jpeg",
  "/work9.jpeg",
  "/work10.jpeg",
  "/work11.jpeg",
  "/work12.jpeg",
]

export default function OurWork() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
   

      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 sm:mb-24 space-y-4 sm:space-y-6"
          >
            <div className="flex items-center justify-center gap-2 text-purple-400">
              <SparklesIcon className="w-5 h-5 sm:w-7 sm:h-7" />
              <span className="text-sm sm:text-base uppercase tracking-wider font-semibold">Transforming Artists</span>
              <SparklesIcon className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Our Masterpieces
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto">
              Witness the transformation of raw talent into chart-topping sensations. Our work speaks volumes about our
              commitment to excellence in the music industry.
            </p>
          </motion.div>

          <ImageGallery
            images={ourWorkImages}
            title="Our Work"
            subtitle="Showcasing our finest artist transformations"
          />

          <ImageGallery
            images={clientSatisfactionImages}
            title="Client Satisfaction"
            subtitle="The smiles that drive our passion"
            description="Our clients' success is our greatest achievement. Each image represents a journey of growth, creativity, and triumph in the music industry. From emerging artists to established stars, we've helped shape careers and create unforgettable musical experiences."
          />
        </div>
      </section>

      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  )
}

function ImageGallery({ images, title, subtitle, description }) {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="mb-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-gray-300 mb-8 text-center"
      >
        {subtitle}
      </motion.p>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 mb-12 text-center max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-gray-800 rounded-xl overflow-hidden">
              <img
                src={image || "/placeholder.svg"}
                alt={`Work ${index + 1}`}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition duration-300">
                <h3 className="text-xl font-semibold mb-2">Project {index + 1}</h3>
                <p className="text-sm text-gray-300">Elevating artistry to new heights</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  )
}

function ImageModal({ image, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative max-w-5xl w-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image || "/placeholder.svg"} alt="Selected work" className="w-full h-auto" />
        <button
          className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/75 transition duration-300"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  )
}

function SparklesIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3l1.912 5.346L19 9.445l-4.37 3.746 1.336 5.809L12 16.508 8.034 19l1.336-5.809L5 9.445l5.088-1.099L12 3z" />
    </svg>
  )
}

