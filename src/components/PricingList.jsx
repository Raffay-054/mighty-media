"use client" 
import { useState } from "react";
import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button"; 
import { useNavigate } from "react-router-dom";
import rgb from '../assets/benefits/card-2.svg'
const PricingList = () => {  
  const [visibleItems, setVisibleItems] = useState(3); 
  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
  }; 
  const navigate = useNavigate();
  const HandleNavigate = () => { 
navigate('/contact')
  }
  return (
    <div className="flex flex-col justify-center items-center   gap-[1rem] ">
      <div className="flex flex-wrap  justify-center items-center">

      {pricing.slice(0, visibleItems).map((item) => (
        <div
          key={item.id}
          className=" block relative p-0.5 bg-no-repeat bg-[length:100%_100%]  md:max-w-[24rem] w-[19rem] mx-2 h-full px-6 bg-n-8rounded-[2rem] lg:w-[28vw] even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
          style={{
            backgroundImage: `url(${rgb})`,
          }}
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>
          <div className="flex  items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
           onClick={HandleNavigate}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>

      <div className="flex justify-center w-[100vw]">
      {/* Load more button */}
      {visibleItems < pricing.length && (
        <Button onClick={loadMoreItems} className="mt-6">
          Load More
        </Button> 
      )} 
      </div>
    </div>
  );
};

export default PricingList;
