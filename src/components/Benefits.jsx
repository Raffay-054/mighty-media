import { useEffect, useRef, useState } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const benefitRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set item as visible when it enters the viewport
            setVisibleItems((prevVisible) => ({
              ...prevVisible,
              [entry.target.dataset.index]: true,
            }));
          } else {
            // Reset visibility when it goes out of the viewport to trigger animation again
            setVisibleItems((prevVisible) => ({
              ...prevVisible,
              [entry.target.dataset.index]: false,
            }));
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    benefitRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      benefitRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Master the Music Game with MightyMedia"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[22rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`, // Fixed template literal
              }}
              key={item.id}
              ref={(el) => (benefitRefs.current[index] = el)}
              data-index={index}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5
                  className={`h5 mb-5 transition-all duration-700 ${
                    visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`} // Fixed className string
                >
                  {item.title}
                </h5>
                <p
                  className={`body-2 mb-6 text-n-3 transition-all duration-700 ${
                    visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`} // Fixed className string
                >
                  {item.text}
                </p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
