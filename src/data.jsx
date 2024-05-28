import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://github.com/KunjYadav/WebDev-Portfolio/blob/main/src/assets/images/ContentFull%20CMS.jpeg?raw=true?auto=compress&cs=tinysrgb&w=800",
    url: "https://contentful-k.netlify.app/",
    github: "https://github.com/KunjYadav/temp-contentful-app",
    title: "Contentful CMS",
    text: "Contentful-K is more than just a content management system; it's a powerful toolkit that empowers you to create, manage, and distribute content across multiple channels with ease and efficiency.",
  },
  {
    id: nanoid(),
    img: "https://github.com/KunjYadav/WebDev-Portfolio/blob/main/src/assets/images/Unsplash%20Images.jpeg?raw=true?auto=compress&cs=tinysrgb&w=800",
    url: "https://kvite-images.netlify.app/",
    github: "https://github.com/KunjYadav/temp-vite-images",
    title: "Unsplash Images",
    text: "Kvite Images is more than just a website; it's an immersive experience designed to showcase the beauty and power of photography. With its sleek and minimalist design, Kvite Images puts the focus where it belongs – on the stunning visuals.",
  },
  {
    id: nanoid(),
    img: "https://github.com/KunjYadav/WebDev-Portfolio/blob/main/src/assets/images/MixMaster.jpeg?raw=true?auto=compress&cs=tinysrgb&w=800",
    url: "https://kdrink.netlify.app/",
    github: "https://github.com/KunjYadav/MixMaster-Drink-App",
    title: "MixMaster",
    text: "KDrink is more than just a beverage website; it's a curated collection of unique and innovative drinks designed to tantalize your taste buds and elevate your drinking experience.",
  },
];
