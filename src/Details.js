// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.avif";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Alishba",
  tagline: "I build things for web",
  img: profile,
  about: `Hello, i am a front end web developer, i love building new interactive webpages for businessess. I am always aspiring to grow more in this field.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://github.com/SyedaAlishba",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Smart Coders (SMC)`,
    Location: "Rawalpindi, Pakistan",
    Type: "Full Time",
    Duration: "Dec 2022 - present",
  },
  // {
  //   Position: "Internship",
  //   Company: `Company Name here`,
  //   Location: "Bengaluru",
  //   Type: "Internship",
  //   Duration: "Sep 2021 - Dec 2021",
  // },
  
];

// Enter your Education Details here
export const eduDetails = [
  // {
  //   Position: "Frontend Development",
  //   Company: "Udemy, YouTube, Google, Medium",
  //   Location: "Online",
  //   Type: "Full Time",
  //   Duration: "Jan 2022 - Present",
  // },
  {
    Position: "Bachelor in Software Engineering",
    Company: `NUML University`,
    Location: "Islamabad, Pakistan",
    Type: "Full Time",
    Duration: "Jan 2018 - Jan 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Admin Dashboard",
    image: projectImage1,
    description: `This is a dashboard that i created for admins to manage their site and perform bunch of features.`,
    techstack: "React, Mui, scss",
    previewLink: "https://google.com",
    githubLink: "https://github.com/SyedaAlishba/dashboard",
  },
  {
    title: "Browser tabs clone",
    image: projectImage2,
    description: `This project uses the idea of chrome tabs, you can create new tabs with any name and also close them`,
    techstack: "CSS, React, Mui, Vite",
    previewLink: "https://google.com",
    githubLink: "https://github.com/SyedaAlishba/react-tabs",
  }
];

// Enter your Contact Details here
export const contactDetails = {
  email: "alishbakazmi99@gmail.com",
  // phone: "+91 12345 67890",
};
