import React, { useRef, useState, useEffect } from "react";
import Confetti from "react-confetti";
import result from '../assets/result.jpeg'; 
import result3 from '../assets/result3.jpeg'; 
import result5 from '../assets/result5.jpeg'; 
import profilePic1 from '../assets/profile1.webp';
import profilePic2 from '../assets/profile2.jfif';
import profilePic3 from '../assets/profile3.webp';  
import profilePic4 from '../assets/profile4.jfif';
import profilePic5 from '../assets/profile5.jfif'; 
import Footer from "./Footer";

const images = [
  { src: result, campaign: 'Youtube Campaign' },
  { src: result3, campaign: 'Spotify Campaign' },
  { src: result5, campaign: 'Spotify Campaign' },
];

const testimonials = [
  { text: "Excellent service and amazing results!", author: "Little Joshua Music", profilePic: profilePic1, rating: 5 },
  { text: "A fantastic experience from start to finish.", author: "Queen Pheena", profilePic: profilePic2, rating: 4 },
  { text: "Recommend for top-notch campaigns!", author: "Chadsflame", profilePic: profilePic3, rating: 4 },
  { text: "The results speak for themselves.", author: "Rxchworld", profilePic: profilePic4, rating: 5 },
  { text: "A game-changer for marketing strategy!", author: "Treat4real", profilePic: profilePic5, rating: 5 },
];

const ResultPage = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -370, behavior: 'smooth' });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen text-white bg-transparent">
      {/* Confetti Animation */}
      {showConfetti && (
        <Confetti 
          width={windowWidth} 
          height={windowHeight} 
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 50 }} 
        />
      )}

      {/* Hero Section */}
      <div className="relative">
        <div className="relative pt-[8rem] -mt-[5.25rem] bg-transparent">
          <div className="relative w-full p-6 bg-transparent rounded-lg shadow-lg z-10 backdrop-blur-md transform -translate-y-16">
            <h1 className="text-4xl mt-10 font-bold mb-10 text-center">Our <span className="text-yellow-500">Results</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-transparent mt-8 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col justify-center"
                >
                  <img
                    src={image.src}
                    alt={`Product ${index + 1}`}
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="flex justify-center mt-4">
                    <button className="px-8 mt-4 py-3 bg-gradient-to-r from-[#f83939] to-[#07b8b8] text-white font-semibold rounded-full hover:bg-gradient-to-l transition duration-300 shadow-lg hover:shadow-xl transform hover:translate-y-[-3px] border-2 border-transparent hover:border-white">
                      {image.campaign}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section className="py-16 bg-transparent">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">
              What Our <span className="text-yellow-500">Clients </span>Say
            </h2>
            <div className="relative">
              <div ref={scrollContainerRef} className="flex overflow-x-auto hide-scrollbar" style={{ width: '100%' }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="testimonial-item border h-[200px] mx-4 border-gray-600 text-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center bg-transparent"
                    style={{ minWidth: '350px'}} // Ensure width and prevent shrinking
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.profilePic}
                        alt={`Profile of ${testimonial.author}`}
                        className="w-16 h-16 rounded-full border-2 border-gray-600 object-cover"
                      />
                      <div className="ml-4">
                        <p className="text-xl font-semibold">{testimonial.author}</p>
                        <div className="flex mt-1">
                          {Array.from({ length: testimonial.rating }, (_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                          {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                            <span key={i + testimonial.rating} className="text-gray-400">★</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm">{testimonial.text}</p>
                  </div>
                ))}
                
                {/* Arrow buttons - visible only on larger screens */}
                <button 
                  onClick={scrollLeft} 
                  className="hidden md:absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300 md:block"
                  aria-label="Scroll Left"
                >
                  &lt;
                </button>
                <button 
                  onClick={scrollRight} 
                  className="hidden md:absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white rounded-full p-2 shadow-lg hover:shadow-xl transition duration-300 md:block"
                  aria-label="Scroll Right"
                >
                  &gt;
                </button>
              </div>
            </div> 
          </div> 
        </section>
      </div>
      <Footer/>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }
        .hide-scrollbar {
          -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </section>
  );
};

export default ResultPage;
