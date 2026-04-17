import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const RoadmapItem = styled.div`
  display: flex;
  padding: 0.25rem;
  border-radius: 2.5rem;
  background: ${(props) => (props.colorful ? "var(--conic-gradient)" : "var(--n-6)")};
  transition: transform 0.6s ease-out;
  transform: ${(props) => (props.visible ? "scale(1.05)" : "scale(1)")};
`;

const Roadmap = () => {
  const [visibleItems, setVisibleItems] = useState({});
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          } else {
            setVisibleItems((prev) => ({
              ...prev,
              [entry.target.dataset.index]: false,
            }));
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" title="What we’re working on" />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item, index) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <RoadmapItem
                key={item.id}
                data-index={index}
                ref={(el) => (itemRefs.current[index] = el)}
                visible={visibleItems[index]}
                colorful={item.colorful}
                className="md:flex even:md:translate-y-[7rem]"
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-full"
                        src={item.imageUrl}
                        width={608}
                        height={406}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </RoadmapItem>
            );
          })}

          <Gradient />
        </div>

        {/* <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div> */}
      </div>
    </Section>
  );
};

export default Roadmap;
