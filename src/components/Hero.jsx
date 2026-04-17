import { curve, heroBackground } from "../assets";
import Button from "./Button"; 
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef, useEffect, useState } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos"; 
import robot2 from '../assets/robot2.jpg';

const fadeIn = {
  animation: 'fadeIn 1s ease-out'
};

const fadeOut = {
  animation: 'fadeOut 1s ease-out'
};

const styles = {
  keyframes: `
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes fadeOut {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }
  `,
};

const Hero = () => {
  const parallaxRef = useRef(null);
  const [isVisible, setIsVisible] = useState({
    text: false,
    notification: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.dataset.section]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('[data-section]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <style>
        {styles.keyframes}
      </style>

      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1
            className={`h1 mb-6 ${isVisible.text ? 'fadeIn' : 'fadeOut'}`}
            data-section="text"
            style={isVisible.text ? fadeIn : fadeOut}
          >
            Drive Your Music to New Heights&nbsp;with {` `} 
            <span className="inline-block relative">
              MightyMedia{" "} 
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p
            className={`body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 ${isVisible.text ? 'fadeIn' : 'fadeOut'}`}
            data-section="text"
            style={isVisible.text ? fadeIn : fadeOut}
          >
            Unlock your music's full potential with tailored strategies designed 
            for unstoppable growth and lasting success.
          </p>
          {/* <Button white>
            Scroll Down
          </Button> */}
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot2}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={`icon-${index}`} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className={`hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex ${isVisible.notification ? 'fadeIn' : 'fadeOut'}`}
                    data-section="notification"
                    title="Code generation"
                    style={isVisible.notification ? fadeIn : fadeOut}
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
