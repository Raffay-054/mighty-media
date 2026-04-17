import { useState } from "react";
import { heroBackground } from "../assets";
import Button from "./Button";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import Loader from "./Loader";
import Footer from "./Footer";

const PromoForm = () => {
  const [formData, setFormData] = useState({
    platforms: [],
    goal: "",
    dailyBudget: "",
    duration: "",
    genre: "",
    listeners: "",
    email: ""
  });
  const [loading, setLoading] = useState(false);

  const platforms = [
    "YouTube",
    "Spotify",
    "Apple Music",
    "SoundCloud",
    "Instagram",
    "TikTok"
  ];

  const goals = [
    "Build Fanbase / Audience Growth",
    "Monetize Music / Generate Revenue",
    "Brand Awareness / Personal Branding",
    "Collaboration Opportunities",
    "All of the above"
  ];

  const budgets = ["$5", "$10", "$15", "$20", "$40", "$80", "$120", "200"];
  

  const durations = [
    "1 Week",
    "2 Weeks",
    "3 Weeks",
    "4 Weeks",
    "1 Month",
    "2 Months",
    "3 Months"
  ];

  const genres = [
    "Pop",
    "Hip-Hop / Rap",
    "R&B / Soul",
    "Rock / Alternative",
    "EDM / Dance",
    "Indie / Folk",
    "Classical / Instrumental"
  ];

  const listeners = [
    "0–500",
    "500–1,000",
    "1,000–5,000",
    "5,000–10,000",
    "10,000+"
  ];

  const handlePlatformChange = (platform) => {
    setFormData(prev => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter(p => p !== platform)
        : [...prev.platforms, platform]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://mighty-media-mail-server.vercel.app/api/post/email/sendMailToBrandBlitz",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...formData,
            budget: formData.dailyBudget, // map correctly
            platforms: formData.platforms // send as array
          })
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Promo form submitted successfully.");
      setFormData({
        platforms: [],
        goal: "",
        dailyBudget: "",
        duration: "",
        genre: "",
        listeners: "",
        email: ""
      });
      alert("Your promo request has been submitted successfully!");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setLoading(false);
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

          {/* Promo Form */}
          <div className="relative max-w-[50rem] mx-auto px-4 py-8 bg-transparent border-[1px] border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg shadow-lg z-10 backdrop-blur-md transform -translate-y-16">
            <h2 className="text-2xl font-bold text-center mb-2 text-white">
              Music Promotion Strategy Form
            </h2>
            <p className="text-center text-n-3 mb-6">
              Let us create a personalized strategy for your music career
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Select Platforms */}
              <div>
                <label className="block text-sm font-medium mb-3 text-white">
                  1. Which platform(s) are you focusing on?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {platforms.map(platform => (
                    <label key={platform} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.platforms.includes(platform)}
                        onChange={() => handlePlatformChange(platform)}
                        className="w-4 h-4 rounded"
                      />
                      <span className="text-n-3">{platform}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* End Goal */}
              <div>
                <label htmlFor="goal" className="block text-sm font-medium mb-3 text-white">
                  2. What&apos;s your end goal?
                </label>
                <select
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  className="w-full p-3 border border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg bg-n-8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-color-1"
                  required
                >
                  <option value="">Select your goal</option>
                  {goals.map(goal => (
                    <option key={goal} value={goal}>{goal}</option>
                  ))}
                </select>
              </div>

              {/* Daily Budget */}
              <div>
                <label htmlFor="dailyBudget" className="block text-sm font-medium mb-3 text-white">
                  3. What&apos;s your estimated daily budget?
                </label>
                <select
                  id="dailyBudget"
                  name="dailyBudget"
                  value={formData.dailyBudget}
                  onChange={handleChange}
                  className="w-full p-3 border border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg bg-n-8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-color-1"
                  required
                >
                  <option value="">Select your budget</option>
                  {budgets.map(budget => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              {/* Campaign Duration */}
              <div>
                <label htmlFor="duration" className="block text-sm font-medium mb-3 text-white">
                  4. How long do you plan to run your campaign?
                </label>
                <select
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full p-3 border border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg bg-n-8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-color-1"
                  required
                >
                  <option value="">Select campaign duration</option>
                  {durations.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>

              {/* Music Genre */}
              <div>
                <label htmlFor="genre" className="block text-sm font-medium mb-3 text-white">
                  5. What is your primary music genre?
                </label>
                <select
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  className="w-full p-3 border border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg bg-n-8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-color-1"
                  required
                >
                  <option value="">Select your genre</option>
                  {genres.map(genre => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>

              {/* Current Listeners */}
              <div>
                <label htmlFor="listeners" className="block text-sm font-medium mb-3 text-white">
                  6. How many listeners/followers do you currently have?
                </label>
                <select
                  id="listeners"
                  name="listeners"
                  value={formData.listeners}
                  onChange={handleChange}
                  className="w-full p-3 border border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg bg-n-8 text-white text-sm focus:outline-none focus:ring-2 focus:ring-color-1"
                  required
                >
                  <option value="">Select listener count</option>
                  {listeners.map(listener => (
                    <option key={listener} value={listener}>{listener}</option>
                  ))}
                </select>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 text-white">
                  7. Where should we send your personalized strategy?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full p-3 border border-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-lg bg-transparent text-white placeholder-n-4 text-sm focus:outline-none focus:ring-2 focus:ring-color-1"
                  required
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" white className="w-full">
                Get Your Strategy
              </Button>
            </form>

            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <BottomLine />
      </section>
      <Footer />
    </>
  );
};

export default PromoForm;
