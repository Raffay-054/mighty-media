import React, { useState } from "react";
import { heroBackground } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import Loader from "./Loader"; 
import Footer from "./Footer";

const Contact = () => {
  // State to store form input values and loading status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: ""
  });
  const [loading, setLoading] = useState(false); // Add loading state

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true); // Start loading

    try {
      const response = await fetch("https://public-mail-server.vercel.app/api/post/email/sendMailToBrandBlitz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful submission
      console.log("Message sent successfully.");
      // Clear form fields if needed
      setFormData({});

    } catch (error) {
      // Handle errors
      console.error("There was a problem with the fetch operation:", error);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <>
      <section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container relative">
          {/* Background Image and Design */}
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
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

          {/* Contact Form */}
          <div className="relative max-w-[50rem] mx-auto px-4 py-8 bg-transparent border-[1px] border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg shadow-lg z-10 backdrop-blur-md transform -translate-y-16">
            <h2 className="text-2xl font-bold text-center mb-6 text-white">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg bg-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg bg-transparent text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="msg"
                  rows="4"
                  value={formData.msg}
                  onChange={handleChange}
                  className="w-full p-3 border border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg bg-transparent text-white"
                  required
                />
              </div>
              <Button type="submit" white>
                Send Message
              </Button>
            </form>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <BottomLine />
      </section> 
      <Footer/>
    </>
  );
};

export default Contact;
