"use client"
import { Badge } from "./Badges"
import { Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ArtistDevelopment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute w-[300px] md:w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl -top-96 -left-40 animate-pulse" />
        <div className="absolute w-[250px]  md:w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse delay-700" />
      </div> */}

      <section className="py-8 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16 space-y-4 sm:space-y-6"
          >
            <div className="flex items-center justify-center gap-2 text-yellow-400">
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm uppercase tracking-wider font-semibold">Elevate Your Artistry</span>
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400">
              Artist Development Programs
            </h1>
            <p className="text-base sm:text-xl text-blue-200 max-w-xl sm:max-w-2xl mx-auto">
              Ready to ignite your career? Our programs are crafted to transform your raw talent into mainstream
              success. Prepare for a journey of explosive growth and unparalleled artistry! 🚀
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <ProgramCard
              title="6-Month Intensive Program"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-31%20at%204.57.00%20PM%20(1)-l9PzMFpEIY2pBhOTNZv7AhH27wk805.jpeg"
              badges={["Spotify", "YouTube", "TikTok", "Instagram", "Apple Music"]}
              months={[
                {
                  title: "Month 1-2",
                  description:
                    "Embark on a digital revolution as we launch your Spotify campaign, meticulously set up your YouTube presence, distribute your music on Apple Music, and kickstart your Instagram journey. We'll lay the groundwork for your multi-platform domination.",
                },
                {
                  title: "Month 3-4",
                  description:
                    "Dive deep into data-driven growth. We'll analyze your Spotify performance, unlock YouTube's monetization potential, create viral-worthy content for TikTok, and accelerate your Instagram following. Your online presence will become a force to be reckoned with.",
                },
                {
                  title: "Month 5",
                  description:
                    "Expand your digital empire. We'll supercharge your YouTube campaign, introduce you to Facebook's vast audience, develop a Shopify store to monetize your brand, and craft a stunning website that showcases your artistic vision.",
                },
                {
                  title: "Month 6",
                  description:
                    "Solidify your status as a rising star. We'll secure your Wikipedia placement, optimize your website for maximum visibility, launch an exclusive NFT collection for your devoted fans, and scale up your merchandise marketing for increased revenue streams.",
                },
              ]}
            />

            <ProgramCard
              title="3-Month Accelerated Program"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-31%20at%204.56.59%20PM%20(2)-y0iWHqqTji0vPwSwvoLr3iS1MUwL9b.jpeg"
              badges={["Spotify", "YouTube", "TikTok", "Instagram", "Apple Music"]}
              months={[
                {
                  title: "Month 1",
                  description:
                    "Hit the ground running with an explosive Spotify campaign launch, professional YouTube channel setup, strategic Apple Music distribution, and a tailored Instagram growth strategy. We'll build the foundation for your rapid ascent in the digital music landscape.",
                },
                {
                  title: "Month 2",
                  description:
                    "Accelerate your growth with aggressive tactics. We'll secure coveted Spotify playlist placements, activate YouTube monetization to turn views into revenue, and craft a viral TikTok content plan. Your online presence will skyrocket, setting you apart in a crowded industry.",
                },
                {
                  title: "Month 3",
                  description:
                    "Maximize your impact across all platforms. We'll implement advanced Instagram growth hacks, fine-tune your Spotify algorithm performance, expand your YouTube content strategy, and create a cohesive brand narrative across all social media channels. By the end of this month, you'll have a robust, multi-platform presence that continues to grow organically.",
                },
                {
                  title: "Post-Program Support",
                  description:
                    "Our commitment doesn't end with the program. We'll provide you with a comprehensive exit strategy, including a personalized roadmap for continued growth, access to our network of industry professionals, and ongoing consultation to ensure your career maintains its upward trajectory.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function ProgramCard({ title, image, badges, months }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="group relative flex flex-col h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative flex-grow bg-gradient-to-b from-zinc-900/90 to-black/90 backdrop-blur-xl border border-zinc-800 group-hover:border-purple-500/50 transition-all duration-300 p-4 sm:p-6 md:p-8 rounded-3xl overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          {title}
        </h3>
        <div className="relative mb-4 sm:mb-8 overflow-hidden rounded-xl">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-auto object-contain rounded-xl shadow-lg transform group-hover:scale-105 transition duration-500"
          />
        </div>
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs sm:text-sm"
            >
              {badge}
            </Badge>
          ))}
        </div>
        <div className="space-y-4 sm:space-y-6 mt-4 sm:mt-6 text-xs sm:text-sm flex-grow">
          {months.map((month, index) => (
            <div key={index} className="space-y-1 sm:space-y-2">
              <h4 className="text-lg sm:text-xl font-semibold text-purple-400">{month.title}</h4>
              <p className="text-zinc-300 leading-relaxed">{month.description}</p>
            </div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 sm:mt-8 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center justify-center group text-sm sm:text-base"
        >
          <span>Get Started</span>
          <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  )
}

