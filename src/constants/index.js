import {
  starbucks,
  tripguide,
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
    title: "Maturità classica",
    company_name: "Dal Piaz High School",
    icon: starbucks,
    iconBg: "indigo",
    date: "2010 - 2015",
    points: [
      "Winning of Latin Certamen competition between all students of the same year.",
      "Cultural Exchange in Hungary with Kiskunfélegyházi Móra Ferenc Gimnázium.",
      "English Summer School at Brighton Language College in the United Kindom.",
    ],
  },
  {
    title: "Maths courses attendance",
    company_name: "Trento University",
    icon: starbucks,
    iconBg: "indigo",
    date: "2015 - 2020",
    points: [
      "Passed multiples exams including mathematical analysis, algebra and biology.",
    ],
  },
  {
    title: "Homeworks helper and babysitter",
    company_name: "Lentiai, Feltre and Trento cities",
    icon: starbucks,
    iconBg: "indigo",
    date: "2014 - 2021",
    points: [
      "Helped young students from 11 to 16 years old to study maths and latin.",
      "Remote lessons with Google Meet calls during Covid-19.",
    ],
  },
  {
    title: '"S.O.Scienze" Project',
    company_name: "Sophie Scholl High School",
    icon: starbucks,
    iconBg: "indigo",
    date: "Dec 2021 - May 2022",
    points: [
      "Activities in 7+ class and in the school library to support students in the maths study.",
      "Editing of a physic experiment video with OpenShot.",
      "Creation of two quizzes with Kahoot.it.",
      "Development of a web application with Code.org.",
      "Creation of a slide show presentation for 4+ hours of lesson.",
      "Certification of skills with the Franco Demarchi fondation."
    ],
  },
  {
    title: "Full-Stack Web Course",
    company_name: "Develhope",
    icon: starbucks,
    iconBg: "indigo",
    date: "Sept 2022 - March 2023",
    points: [
      "Full immersion in HTML, CSS, JavaScript, SASS, TypeScript, React and Node.js.",
      "170+ exercises done and 40+ hours of live coding.",
      "Pratical experience in team work, in the development of 3 projects with the Agile methodology.",
      "Reproduction of the Netflix landing page. Reproduction of two pages of the Lego site. Ideation and creation of Evolve, a web application for the fitness lovers."
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
