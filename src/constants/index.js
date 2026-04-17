import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discordBlack,
  facebook,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  photoshop,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets"; 
import Music1 from '../assets/music1.png'; 
import Music2 from '../assets/music2.png'; 
import Music3 from '../assets/Music3.png'; 
import Music4 from '../assets/yt.webp'; 
import Music5 from '../assets/Music5.png';  
import Music6 from '../assets/music6.png'; 
import Insta from '../assets/insta.webp';  
import Guitar from '../assets/guitar.png';
import guitar from '../assets/roadmap/guitar.svg'
export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
];

export const heroIcons = [homeSmile, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [Music6, Music1, Insta, Music3, Music4];

export const brainwaveServices = [
  "Artist Development",
  "Music Promotion",
  "Digital Marketing",
];

export const brainwaveServicesIcons = [
  Insta,
  recording01,
  Music4,
  Music6,
  Music3,
];

export const roadmap = [
  {
    id: "0",
    title: "Developing Artists",
    text: "Developing Artists..! We provide personalized strategies and resources to help emerging artists grow, refine their skills, and build a sustainable music career with long-term success in the industry.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Grow Music",
    text: "Elevate your sound and reach new heights with our tailored strategies and tools designed to amplify your music's impact and connect with a broader audience.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Digital Marketing",
    text: "Transform your brand with targeted strategies and data-driven insights that drive engagement, boost visibility, and achieve measurable results in the digital landscape",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Targeted Campaigns",
    text: "Reach your ideal audience with precision through customized marketing strategies that drive engagement, increase conversions, and maximize your campaign's effectiveness.",
    date: "May 2023",
    status: "progress",
    imageUrl: guitar,
  },
];

export const collabText =
  "Expand your music's reach with MightyMedia, delivering targeted marketing for artists seeking wider audiences";

export const collabContent = [
  {
    id: "0",
    title: "Expand Your Reach",
    text: collabText,
  },
  {
    id: "1",
    title: "Boost Your Audience",
  },
  {
    id: "2",
    title: "Grow Your Brand",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "music6",
    icon: Music6,
    width: 30,
    height: 40,
  },
  {
    id: "1",
    title: "Music",
    icon: Music1,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "insta",
    icon: Insta,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "music2",
    icon: Music2,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Spotify",
    icon: Music3,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Youtube",
    icon: Music4,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "soundcloud",
    icon: Music5,
    width: 42,
    height: 55,
  },
];

export const pricing = [
  {
    id: "2",
    title: "Instagram Fanbase ",
    description: "Tailored Programs for Artist Growth and Success in 6 months",
    price: "120",
    features: [
      "Hashtag Research",
      "Contnt Creation",
      "Advance CTA Strategy",
    ],
  }, 
  {
    id: "1",
    title: "Spotify Campaign ",
    description: "Maximize Streams with Strategic Spotify Campaigns",
    price: "250",
    features: [
      "2 Tracks Spotify campaign",
      "Spotify Curation & Playlisting",
      "35k+ Reach on Spotify",
    ],
  },
  {
    id: "2",
    title: "Youtube Campaign ",
    description: "Boost Your Brand with Targeted YouTube Campaigns",
    price: "300",
    features: [
      "30 Days Youtube Campaign",
      "Targeted Marketing/Engagement",
      "Meta Ads and Youtube Ads",
    ],
  },
  
  {
    id: "3",
    title: "Website Creation",
    description: "Build a Stunning Website for Your Brand",
    price: "350",
    features: [
      "Custom Website Design",
      "Responsive Web Development",
      "SEO Optimization",
    ],
  },  
  {
    id: "4",
    title: "Shopify Store & EPK",
    description: "Seamless Shopify Setup for Your Business",
    price: "400",
    features: [
      "Shopify Store Creation",
      "Product Designing and listing",
      "META Ads and Tiktok Ads",
    ],
  },  
  {
    id: "5",
    title: "Instagram Campaign",
    description: "Create Impactful Instagram Campaigns for Success",
    price: "180",
    features: [
      "Organic Follower Campaign",
      "Organic Engagment Campaign",
      "Content creation / Reels and Posts",
    ],
  }, 

];

export const benefits = [
  {
    id: "0",
    title: "Amplify Your Audience",
    text: "Our platform helps artists reach the right fans with targeted marketing strategies designed for maximum impact.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Boost Your Music Brand",
    text: "We create personalized branding strategies to enhance your presence and build a loyal fan base.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Optimize Your Exposure",
    text: "Leverage data-driven insights to increase your music's visibility and connect with more listeners worldwide",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Strategic Artist Growth",
    text: "Our marketing tools help artists craft a roadmap to success, guiding their career to new heights.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Amplify Your Sound",
    text: "Leverage cutting-edge marketing strategies to maximize your audience, boost engagement, and make your music stand out in a crowded industry.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: 'Unlock New Opportunities',
    text: "We provide artists with the tools to navigate the music industry, building momentum for long-term success.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/brandblitz.marketing?igsh=dThxYnlod3hzN2E0",
  },
  {
    id: "0",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
