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
    img: "https://previews.dropbox.com/p/thumb/ACQ0wg_xEsU5gKzEMB7lcKCBkUpRY6embz1kJPZhDL7MlNkqI56ZvTu9PRdKWjZk9kW_xqZwmqMsxVuoikPWuTHH3ytWQC8HDkKhhFsgVqo4Kml5NnPRDQJxCbCegZF_IgWrfVtU1INRGZUZ_xiqWHexOt6O0s8c_md1dhuvjUaJEctEphS4vuLgDKF8SYTWPHHSYDptGH7kS9K1urGtnc58o8ytU9N_6GNDEUiiAo-oCeciVeBY_-mec4OqXvAIF-18OMOEgv0-Ki8O-tHLSBlUkGN_obiyTPfjFIl9XjpvxjcwEAUcvZEh3QQVMJ3qYOGjVy__hvR4GfyJ09inlet5VbQXJLGCHJQ02W3dk9oURw/p.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://contentful-k.netlify.app/",
    github: "https://github.com/KunjYadav/temp-contentful-app",
    title: "Contentful CMS",
    text: "Contentful-K is more than just a content management system; it's a powerful toolkit that empowers you to create, manage, and distribute content across multiple channels with ease and efficiency.",
  },
  {
    id: nanoid(),
    img: "https://previews.dropbox.com/p/thumb/ACTaRzIrExmbm-kYHM9UrGmgXzOJcA-hJVfcctbHOkVKbeKFdqDMw0dxtU4exmDC5UVGQLQvMC_L8HTq1I_0BN2ZnC92qX0WhaS3pTU6tAJ6pXieDsH08zg9Tn7oPQPdzT6iXQ9GNczd91rMI3OYJ5JIm6EIoPnXXhhBjvoQXhMa6DCzi4-2O8oiwXPrnuqGgvMkYdS6Cbm2UXA7DcSr4TKDLNeiOIgXF-f354tEUpq3ol5hgQ_PbaHCSrF9xJ5ZKDBowNIVGgXE6zXhZh3KXGhx6Ww7pyY-kIL4uyjzawQrIM4jErH8bkkxohHiz4fdZniwMwWG9VhhK7yudR5bifsX/p.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://kvite-images.netlify.app/",
    github: "https://github.com/KunjYadav/temp-vite-images",
    title: "Unsplash Images",
    text: "Kvite Images is more than just a website; it's an immersive experience designed to showcase the beauty and power of photography. With its sleek and minimalist design, Kvite Images puts the focus where it belongs – on the stunning visuals.",
  },
  {
    id: nanoid(),
    img: "https://previews.dropbox.com/p/thumb/ACR7Cah9yMTsZbu3vlnAJja23WdSaDa6CrWDU52GPRNi2z7Q68d5WtUIHJ9LaMdU2KFws2-JTWov_qMkJsEuHIDUsBvXKMoXmOlx4ear-AK3ZAkBJMlWLvTsHDxv2AnGLCoIJ86vrvELtyyMXFRhY7ajtdFIkxYy9WKoWginCaqVpQjoJvTa9SI-auEb7S2_V4g1GNFQZAzfKQsJbhXguVOhoEefFW2k36YFmynu3xxOXGChr_6TN3LeHm_gaOsMoODaZkq7ZiiemH7EDb2xUS6QtfIDuKlOpeBszfeRF7RTy1GmR8n1mR1DQKOtTp_r1jHLQNPXryBR-4LeeGQLRyvZ/p.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "https://kdrink.netlify.app/",
    github: "https://github.com/KunjYadav/MixMaster-Drink-App",
    title: "MixMaster",
    text: "KDrink is more than just a beverage website; it's a curated collection of unique and innovative drinks designed to tantalize your taste buds and elevate your drinking experience.",
  },
];
