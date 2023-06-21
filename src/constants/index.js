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
    type: "study",
    title: "Maturità classica",
    company_name: "Dal Piaz High School",
    icon: starbucks,
    iconBg: "blue",
    date: "2010 - 2015",
    points: [
      "Winner of the Latin Certamen competition between all students of the same year.",
      "Cultural Exchange in Hungary with Kiskunfélegyházi Móra Ferenc Gimnázium.",
      "English Summer School at Brighton Language College in the United Kindom.",
    ],
  },
  {
    type: "study",
    title: "Maths courses attendance",
    company_name: "Trento University",
    icon: starbucks,
    iconBg: "blue",
    date: "2015 - 2020",
    points: [
      "Passed multiples exams including mathematical analysis, algebra, informatics and biology.",
    ],
  },
  {
    type: "job",
    title: "Homeworks helper and babysitter",
    company_name: "Lentiai, Feltre and Trento cities",
    icon: starbucks,
    iconBg: "brown",
    date: "2014 - 2021",
    points: [
      "Helped young students from 11 to 16 years old to study maths and latin.",
      "Remote lessons with Google Meet during Covid-19.",
    ],
  },
  {
    type: "job",
    title: '"S.O.Scienze" Project',
    company_name: "Sophie Scholl High School",
    icon: starbucks,
    iconBg: "brown",
    date: "Dec 2021 - May 2022",
    points: [
      "Activities in 7+ classes and in the school library to support students in the maths study.",
      "Editing of a physic experiment video with OpenShot.",
      "Creation of two quizzes with Kahoot.it.",
      "Development of a web application with Code.org.",
      "Creation of a slide show presentation for 4+ hours of lesson.",
      "Certification of skills with the Franco Demarchi fondation."
    ],
  },
  {
    type: "study",
    title: "Full-Stack Web Course",
    company_name: "Develhope",
    icon: starbucks,
    iconBg: "blue",
    date: "Sept 2022 - March 2023",
    points: [
      "Full immersion in HTML, CSS, JavaScript, SASS, TypeScript, React and Node.js.",
      "170+ exercises done and 40+ hours of live coding.",
      "Pratical experience in team work, in the development of 3 projects with the Agile methodology.",
      "Reproduction of the Netflix landing page.",
      "Reproduction of two pages of the Lego site.",
      "Ideation and creation of Evolve, a web application for the fitness lovers."
    ],
  },
];

const filters = ["all", "react", "html+css+js", "games-serie", "colors-serie", "develhope"];

const allTags = [
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
  {
    name: "express.js",
    color: "text-orange-500",
  },
  {
    name: "mongodb",
    color: "text-lime-400",
  },
]

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
    source_code_link: "https://github.com/Camilla-Scarton/Esercizi-Develhope",
    site_link: "",
  },
  {
    info: ["develhope", "develhope-trilogy"],
    name: "Netflix clone",
    description:
      "Simple clone of the Netflix principal page that was created in a team work. The most important elements in the page were the two identical forms, the film cards and an accordions section.",
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
    site_link: "",
  },
  {
    info: ["develhope", "develhope-trilogy"],
    name: "Lego clone",
    description:
      "Simple clone of the Lego site, created in a team work during the winter season. The principal page is connected to the Hulkbuster product page. Some parts are in the Christmas version.",
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
    source_code_link: "https://github.com/Camilla-Scarton/Lego-Project-Develhope",
    site_link: "",
  },
  {
    info: ["develhope", "develhope-trilogy"],
    name: "Evolve",
    description:
      "Final project made during the Develhope course. My team and I created a web application for the fitness lovers. An interactive 3D model, one API call and a total of 3 sections can be played with.",
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
    source_code_link: "https://github.com/Camilla-Scarton/Evolve-Project-Develhope",
    site_link: "",
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
    source_code_link: "https://github.com/Camilla-Scarton/mato",
    site_link: "https://camilla-scarton.github.io/mato/",
  },
  {
    info: ["colors-serie", "green", "react"],
    name: "Todo app",
    description:
      "A React app where users can add new todos to the list displayed. The todos already in the list can be edited and/or deleted. All todos are saved in the local storage.",
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
    source_code_link: "https://github.com/Camilla-Scarton/Todo-app-green",
    site_link: "https://camilla-scarton.github.io/Todo-app-green/",
  },
  {
    info: ["games-serie"],
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
    source_code_link: "https://github.com/Camilla-Scarton/tic-tac-toe",
    site_link: "https://camilla-scarton.github.io/tic-tac-toe/",
  },
  {
    info: ["personal", "react", "ongoing"],
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
    source_code_link: "https://github.com/Camilla-Scarton/portfolio",
    site_link: "https://camilla-scarton.github.io/portfolio/",
  },
  {
    info: ["react", "api"],
    name: "My Pokédex",
    description:
      "My Pokédex loads a list of 15 consecutive pokémon. User can sort them by type, see next or previous ones using buttons and choose one pokémon from the list to see more details below.",
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
        }
      ],
    image: tripguide,
    source_code_link: "https://github.com/Camilla-Scarton/pokedex",
    site_link: "https://camilla-scarton.github.io/pokedex/",
  },
  {
    info: ["node", "api", "done"],
    name: "Phonebook project",
    description:
      "RESTful phonebook made with Express.js and MongoDB. Users can login and modify their contacts. All CRUD methods are implemented to manage users and contacts. Authentication is based on JWT.",
      tags: [
        {
          name: "javascript",
          color: "text-green-400",
        },
        {
          name: "node.js",
          color: "text-cyan-300",
        },
        {
          name: "express.js",
          color: "text-orange-500",
        },
        {
          name: "mongodb",
          color: "text-lime-400",
        },
      ],
    image: tripguide,
    source_code_link: "https://github.com/Camilla-Scarton/phonebook-node-project",
    site_link: "",
  },
  {
    info: ["games-serie"],
    name: "Snake",
    description:
      "Cool version of the game Snake. Players can choose snake speed, game mode and the fruits to eat. Live and best score are shown on board side. Game can be paused and settings can be reset.",
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
    source_code_link: "https://github.com/Camilla-Scarton/snake",
    site_link: "https://camilla-scarton.github.io/snake/",
  },
  {
    info: ["react", "api"],
    name: "My Pokémon app",
    description:
      "Cool Pokémon theme project. The landing page gives details and links to other sections. The List part has an infinite scrolling list of Pokémon cards. In the Form part, Pokémon can be found by id or name.",
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
        }
      ],
    image: tripguide,
    source_code_link: "https://github.com/Camilla-Scarton/pokemon-app",
    site_link: "https://camilla-scarton.github.io/pokemon-app/",
  },
];

export { labels, experiences, projects, filters };
