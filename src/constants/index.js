import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const labels = [
  {
    title: "Web Developer",
  },
  {
    title: "Frontend Developer",
  },
  {
    title: "Backend Developer",
  },
  {
    title: "Codewarrior",
  },
];

const experiences = [
  {
    title: "Title",
    company_name: "Where",
    icon: starbucks,
    iconBg: "indigo",
    date: "from - to",
    points: [
      "example1",
      "example2",
      "example3"
    ],
  },
  {
    title: "Title",
    company_name: "Where",
    icon: starbucks,
    iconBg: "indigo",
    date: "from - to",
    points: [
      "example1",
      "example2",
      "example3"
    ],
  },
  {
    title: "Title",
    company_name: "Where",
    icon: starbucks,
    iconBg: "indigo",
    date: "from - to",
    points: [
      "example1",
      "example2",
      "example3"
    ],
  },
];

const projects = [
  {
    info: ["develhope", "done"],
    name: "Develhope exercises",
    description:
      "All exercises done during the Develhope course are in this repository. In six months, I completed 170+ exercises focus on HTML, CSS, SASS, JavaScript, React, TypeScript and Node.js.",
      tags: [
        {
          name: "html",
          color: "text-blue-500",
        },
        {
          name: "css",
          color: "text-yellow-300",
        },
        {
          name: "scss",
          color: "text-pink-400",
        },
        {
          name: "javascript",
          color: "text-green-400",
        },
        {
          name: "react",
          color: "text-purple-400",
        },
        {
          name: "typescript",
          color: "text-red-500",
        },
        {
          name: "node.js",
          color: "text-cyan-300",
        },
      ],
    image: tripguide,
    source_code_link: "",
  },
  {
    info: ["develhope", "develhope-trilogy"],
    name: "Netflix clone",
    description:
      "Simple clone of the Netflix principal page that was created in a team work.",
      tags: [
        {
          name: "html",
          color: "text-blue-500",
        },
        {
          name: "css",
          color: "text-yellow-300",
        },
        {
          name: "javascript",
          color: "text-green-400",
        },
      ],
    image: tripguide,
    source_code_link: "",
  },
  {
    info: ["develhope", "develhope-trilogy"],
    name: "Lego clone",
    description:
      "Simple clone of two pages of the Lego site, created in a team work during the winter season. Some parts are in the Christmas version.",
      tags: [
        {
          name: "html",
          color: "text-blue-500",
        },
        {
          name: "css",
          color: "text-yellow-300",
        },
        {
          name: "javascript",
          color: "text-green-400",
        },
        {
          name: "scss",
          color: "text-pink-400",
        },
        {
          name: "bootstrap",
          color: "text-orange-500",
        },
      ],
    image: tripguide,
    source_code_link: "",
  },
  {
    info: ["develhope", "develhope-trilogy"],
    name: "Evolve",
    description:
      "This is the final project made during the Develhope course. My team and I discussed an idea and created a web application for the fitness lovers. An interactive 3D model, two API calls and a total of four sections can be played with.",
      tags: [
        {
          name: "html",
          color: "text-blue-500",
        },
        {
          name: "css",
          color: "text-yellow-300",
        },
        {
          name: "javascript",
          color: "text-green-400",
        },
        {
          name: "react",
          color: "text-purple-400",
        },
        {
          name: "tailwindcss",
          color: "text-orange-500",
        },
        {
          name: "pocketbase",
          color: "text-cyan-300",
        },
      ],
    image: tripguide,
    source_code_link: "",
  },
  {
    info: ["personal", "ongoing"],
    name: "Mato photos project",
    description:
      "Simple site that allows users to see my photos collection of my first cat Mato. Photos change on mouse moving. My cat was a really good cat and I was an avid photomaker.",
    tags: [
      {
        name: "html",
        color: "text-blue-500",
      },
      {
        name: "css",
        color: "text-yellow-300",
      },
      {
        name: "javascript",
        color: "text-green-400",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
  {
    info: ["colors-serie", "green", "ongoing"],
    name: "Todo app",
    description:
      "A React app where users can add new todos to the list displayed. The todos already in the list can be edited and/or deleted. All todos are saved in the local storage: in the next session or in case of refresh, users can still see them.",
    tags: [
      {
        name: "html",
        color: "text-blue-500",
      },
      {
        name: "css",
        color: "text-yellow-300",
      },
      {
        name: "javascript",
        color: "text-green-400",
      },
      {
        name: "react",
        color: "text-purple-400",
      },
      {
        name: "tailwindcss",
        color: "text-orange-500",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
  {
    info: ["game-serie"],
    name: "Tic, tac, toe",
    description:
      "Simple version of the tic, tac, toe game. Game logic is implemented and a message is displayed at the end. Game board can be reset any time.",
    tags: [
      {
        name: "html",
        color: "text-blue-500",
      },
      {
        name: "css",
        color: "text-yellow-300",
      },
      {
        name: "javascript",
        color: "text-green-400",
      },
    ],
    image: tripguide,
    source_code_link: "",
  },
  {
    info: ["personal", "ongoing"],
    name: "Portfolio",
    description:
      "Every project needs a repository. The source code of this site is on my GitHub profile and here there is a link for it.",
      tags: [
        {
          name: "html",
          color: "text-blue-500",
        },
        {
          name: "css",
          color: "text-yellow-300",
        },
        {
          name: "javascript",
          color: "text-green-400",
        },
        {
          name: "react",
          color: "text-purple-400",
        },
        {
          name: "tailwindcss",
          color: "text-orange-500",
        },
      ],
    image: tripguide,
    source_code_link: "",
  },
];

export { labels, experiences, projects };
