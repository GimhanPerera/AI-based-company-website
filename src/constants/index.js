import {
  aiModelService,
  apiService,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  client1,
  client2,
  client3,
  client4,
  client5,
  communityService,
  gradientRB,
  planningService,
  Service247
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/aboutUs",
  },
  {
    id: "2",
    title: "Services",
    url: "/services",
  },
  {
    id: "3",
    title: "Contact US",
    url: "/contactUs",
  },
  {
    id: "4",
    title: "New account",
    url: "#",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#",
    onlyMobile: true,
  },
];


export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Image generation only",
    price: "FREE",
    features: [
      "20 Image generation per day",
      "100 API calls per day",
      "5 pre-built AI models for Image generation",
      "NO credit card details required",
    ],
  },
  {
    id: "1",
    title: "Classic",
    description: "Explore our all products",
    price: "9.99",
    features: [
      "1,000 Image generation per day",
      "100,000 API calls per day",
      "All pre-built AI models for Image generation",
      "Dashboard access to track your usage",
      "Customer support 24/7",
    ],
  },
  {
    id: "2",
    title: "Economy",
    description: "Choose the best plan for your business",
    price: null,
    features: [
      "Custom Image generation per day",
      "Custom API calls per day",
      "All pre-built AI models for Image generation",
      "Dashboard access to track your usage",
      "Customer support 24/7",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "+10 pre-built AI models",
    text: "You can choose any art level and any style you like.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: gradientRB,
  },
  {
    id: "1",
    title: "API support",
    text: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: gradientRB,
  },
  {
    id: "2",
    title: "Customize your plan",
    text: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: gradientRB,
  },
  {
    id: "3",
    title: "24/7 customer service",
    text: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: gradientRB,
    light: true,
  },
  {
    id: "4",
    title: "Post anywhere",
    text: "You can post anywhere what you generated with our AI.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: gradientRB,
  },
  {
    id: "5",
    title: "Community support",
    text: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: gradientRB,
  },
];

export const services = [
  {
    id: "0",
    title: "+10 pre-built AI models",
    text: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    imageUrl: aiModelService,
    link: "#",
  },
  {
    id: "1",
    title: "API support",
    text: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    imageUrl: apiService,
    link: "#",
  },
  {
    id: "2",
    title: "Customize your plan",
    text: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    imageUrl: planningService,
    link: "#",
  },
  {
    id: "3",
    title: "24/7 customer service",
    text: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    imageUrl: Service247,
    link: "#",
  },
  {
    id: "4",
    title: "Community support",
    text: "Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.",
    imageUrl: communityService,
    link: "#",
  },
];

export const customers = [
  {
    id: "0",
    title: "Gimhan Perera",
    text: "GimCraft’s custom payment plans made it easy for us to scale our usage as our business grew. Exceptional service and incredible images!",
    imageUrl: client1,
  },
  {
    id: "1",
    title: "Nuwan Aluthgama",
    text: "The variety of AI models available is impressive! I found exactly what I needed to bring my project to life. GimCraft is a game-changer.",
    imageUrl: client2,
  },
  {
    id: "2",
    title: "Kasun Kumara",
    text: "As a developer, the API integration was seamless, and the image quality is top-notch. GimCraft is now an essential part of our workflow.",
    imageUrl: client3,
  },
  {
    id: "3",
    title: "Lalith Perera",
    text: "GimCraft has completely transformed the way we approach design. The AI-generated images are stunning and saved us so much time. Highly recommend!",
    imageUrl: client4,
  },
  {
    id: "4",
    title: "Dinesh Gunawardana",
    text: "The community support is outstanding! I received valuable insights and inspiration from other creators using GimCraft. Truly a one-of-a-kind platform.",
    imageUrl: client5,
  },
];