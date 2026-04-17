import React from "react";
import { heroBackground } from "../assets";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import Footer from "./Footer"; 
import image1 from "../assets/result11.jpeg"; 
import image2 from "../assets/result10.jpeg"; 
import image3 from "../assets/result9.jpeg"; 
import image4 from "../assets/result4.jpeg"; 
import image5 from "../assets/result7.jpeg"; 
import image6 from "../assets/result13.jpeg";

const AboutUsPage = () => {
  return (
    <section className="relative min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src={heroBackground}
          className="absolute inset-0 w-full h-full object-cover -z-10"
          width={1440}
          height={1800}
          alt="background"
        />
        <BackgroundCircles />

        <div className="relative pt-[8rem] -mt-[5.25rem]">
          <div className="relative w-full p-6 rounded-lg shadow-lg z-10 backdrop-blur-md transform -translate-y-16">
            <h1 className="text-4xl mt-10 font-bold mb-10 text-center">Our <span className="text-yellow-500">Company</span> </h1>
            <div className="bg-transparent border p-8 rounded-lg shadow-lg text-center">
              <p className="text-lg text-gray-300 mb-6">
                What if you have a well-equipped and experienced team behind you managing everything for you and focusing on enhancing your revenue and your fan base?
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our team specializes in building artists as brands, providing a comprehensive suite of services including podcasts, interviews, article writing, Wikipedia page creation, blogs, PR, SEO, and more.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We handle everything from editing and posting to content creation, design, NFT designing, and sales generation. Our goal is to enhance your revenue, increase streaming, and grow your fan base organically.
              </p>

              {/* Additional Content */}
              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Our  <span className="text-yellow-600">Mission</span></h2>
                <p className="text-lg text-gray-300 mb-6">
                  At MightyMedia, our mission is to elevate artists by providing them with the tools and expertise they need to succeed. We are dedicated to nurturing creativity and transforming it into tangible growth. Our approach is holistic, ensuring that every aspect of an artist’s brand is thoughtfully managed.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Core <span className="text-yellow-600">Values</span></h2>
                <ul className="list-disc list-inside mb-6">
                  <li className="text-lg text-gray-300 mb-2">Integrity: We believe in transparent and honest communication with our clients.</li>
                  <li className="text-lg text-gray-300 mb-2">Creativity: We foster innovative thinking and encourage artistic expression.</li>
                  <li className="text-lg text-gray-300 mb-2">Excellence: We are committed to delivering the highest quality services and results.</li>
                  <li className="text-lg text-gray-300 mb-2">Collaboration: We work closely with our clients to achieve their vision and goals.</li>
                </ul>
                <p className="text-lg text-gray-300 mb-6">
                  Join us on this exciting journey and let’s build a successful future together!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Work Section */}
       
        <div className="relative mt-16 px-6 py-12 bg-transparent rounded-lg shadow-lg z-10">
          <h2 className="text-3xl font-bold mb-8 text-center">Some of our  <span className="text-yellow-500">Top Plans</span></h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="w-full md:w-1/3">
              <img src={image4} className="w-full h-auto rounded-lg shadow-md" alt="Strategic Work 1" />
              <p className="text-center text-gray-300 mt-4">SPOTIFY CAMPAIGN</p>
            </div>
            <div className="w-full md:w-1/3">
              <img src={image5} className="w-full h-auto rounded-lg shadow-md" alt="Strategic Work 2" />
              <p className="text-center text-gray-300 mt-4">YOUTUBE CAMPAIGN</p>
            </div>
            <div className="w-full md:w-1/3">
              <img src={image6} className="w-full h-auto rounded-lg shadow-md" alt="Strategic Work 3" />
              <p className="text-center text-gray-300 mt-4">WEB DEVELOPMENT</p>
            </div>
          </div>
        </div>

        <BottomLine />
      </div>
      <Footer />

      <style jsx>{`
        section {
          background: transparent;
        }

        .bg-gradient-to-r {
          background: linear-gradient(to right, #868686, #df9425);
        }

        .hero-section {
          height: 100vh;
          position: relative;
        }

        .about-content {
          padding: 2rem;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
        }

        .about-text {
          font-size: 1.25rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-section {
            height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUsPage;
