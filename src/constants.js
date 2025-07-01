// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import samajhIntern from './assets/company_logo/samajhAI.jpg';
import techplementIntern from './assets/company_logo/Techplement.png';

// Education Section Logo's
import college from './assets/education_logo/college.jpg';
import school from './assets/education_logo/school.jpg';

// Project Section Logo's
import CineAI from './assets/work_logo/cineAI.png';
import SamajhAI from './assets/work_logo/samajh.png';
import Calci from './assets/work_logo/calci.png';
import SkillStack from './assets/work_logo/skillstack.png';
import Todo from './assets/work_logo/todo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
  
    {
      id: 1,
      img: techplementIntern,
      role: "Frontend Developer Intern",
      company: "Techplement",
      date: "March 2025 - April 2025",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 1,
      img: college,
      school: "ITS Engineering College, Greater Noida",
      date: "Sept 2022 - Present",
      grade: "73.2%",
      desc: "I completed my BTech in Computer Science from ITS College, Greater Noida. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
      degree: "Bachelor of Technology - BTech (Computer Science)",
    },
    {
      id: 2,
      img: school,
      school: "Ebenezer Higher Secondary School, Gwalior",
      date: "Apr 2020 - March 2021",
      grade: "92%",
      desc: "I completed my class 12 education from Ebenezer Higher Secondary School, Gwalior, under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "MPBSE(XII) - PCM",
    },
    {
      id: 3,
      img: school,
      school: "Ebenezer Higher Secondary School, Gwalior",
      date: "Apr 2015 - March 2016",
      grade: "91.8%",
      desc: "I completed my class 10 education from Ebenezer Higher Secondary School, Gwalior, under the MP board, where I studied Science",
      degree: "MPBSE(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "CineAI – AI-powered Movie Recommendation App",
      description:
        "A full-stack movie recommendation platform built with React, Express, and MongoDB. Integrates Google Gemini API to generate intelligent suggestions based on user preferences (liked/saved movies). Features include user auth (Firebase), real-time like/save toggling, and animated UI with Framer Motion.",
      image: CineAI,
      tags: [
    "React JS",
    "Tailwind CSS",
    "JavaScript",
    "Express",
    "MongoDB",
    "Firebase",
    "Framer Motion",
    "Axios",
    "React-Toastify",
    "React-Router",
    "API",
    "React-Icons"
  ],
      github: "https://github.com/Ashutoshp-dev/CineAI-A-Movie-Recommendation-Platform",
      webapp: "https://cineai-a-movie-recommendation-platform.onrender.com/",
    },
    {
      id: 1,
      title: "Samajh AI - Image Magnifier Tool",
      description:
        "Built a responsive modal system for SamajhAI using React, Tailwind CSS, and Docker, enabling users to view product details with an interactive image magnifier, all optimized for seamless cross-device experience and containerized deployment.",
      image: SamajhAI,
      tags: ["HTML", "CSS", "JavaScript","React JS","TailWindCSS","React-Magnify"],
      github: "https://github.com/Ashutoshp-dev/samajhai",
      webapp: "https://ashutoshp-dev.github.io/samajhai/",
    },
    {
      id: 2,
      title: "AllInOneCalci - multi utility toolkit",
      description:
        "AllInOneCalci – A multi-utility web toolkit offering 20+ calculators across finance, health, conversions, geometry, and algebra, built using HTML, CSS, JavaScript, Node.js, Express.js, and EJS for seamless and responsive calculations.",
      image: Calci,
      tags: ["HTML", "CSS","JavaScript", "NodeJS", "ExpressJS", "EJS"],
      github: "https://github.com/Nishant18S/Team-Web-02-Techplement",
      webapp: "https://team-web-02-techplement.vercel.app/Techplement%20Web-02/register.html",
    },
    {
      id: 3,
      title: "SkillStack - A Learning Platform",
      description:
        "SkillStack – A responsive web platform that categorizes and showcases learning resources, built using HTML, CSS, and JavaScript, featuring interactive course previews and a clean, user-friendly interface.",
      image: SkillStack,
      tags: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Ashutoshp-dev/SkillStack--A-Learning-Platform",
      webapp: "https://ashutoshp-dev.github.io/SkillStack--A-Learning-Platform/",
    },
    {
      id: 4,
      title: "Todo List",
      description:
        "Todo App – A responsive and visually engaging task manager built with React, featuring GSAP animations, interactive toasts via react-toastify, and dynamic task completion or deletion. Styled with custom CSS for a sleek user experience.",
      image: Todo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "GSAP", "React-Toastify"],
      github: "https://github.com/Ashutoshp-dev/Todo-App",
      webapp: "https://ashutoshp-dev.github.io/Todo-App/",
    },
    
  ];  