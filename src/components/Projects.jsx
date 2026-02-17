import React, { useMemo, useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Netflix Clone App",
        description:
          "A Netflix-inspired front-end web application built to practice modern UI development. The project focuses on creating a visually appealing streaming platform interface with smooth layout, responsive design, and dynamic content sections.",
        tech: ["React", "Node.js", "Firebase", "TMDB API"],
        githubLink:
          "https://github.com/Shanvi30/Netflix-Clone-Frontend-Web-Project.git",
        liveLink: "https://netflix-clone-frontend-web-project.vercel.app/login",
      },
      {
        id: 2,
        title: "Fashion Store",
        description:
          "This project is a fully responsive frontend design converted from a Figma UI layout. The goal of the project is to transform a static design prototype into a pixel-perfect and functional webpage using React.",
        tech: ["React", "CSS", "JavaScript"],
        githubLink: "https://github.com/Shanvi30/Fashion-Store.git",
        liveLink: "https://fashion-store-gules-rho.vercel.app/",
      },
      {
        id: 3,
        title: "Light Dark Theme Toggle",
        description:
          "This project demonstrates how to implement a smooth and responsive Light–Dark Theme Toggle in a React application using Context API and Tailwind CSS.",
        tech: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/Shanvi30/Light-Dark-Theme-Toggle.git",
        liveLink: "https://example.com",
      },
      {
        id: 4,
        title: "React Router",
        description:
          "A small project built while learning React Router. This project demonstrates how to set up routing in a React application and navigate between multiple pages smoothly.",
        tech: ["React", "Tailwind CSS", "Vite"],
        githubLink: "https://github.com/Shanvi30/React-Router.git",
        liveLink: "https://react-router-opal-two.vercel.app/",
      },
      {
        id: 5,
        title: "Currency Converter App",
        description:
          "A simple and elegant currency converter built using React.js. It allows users to convert money between different currencies in real-time using a live exchange-rate API.",
        tech: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/Shanvi30/Currency-Converter-App.git",
        liveLink: "https://currency-converter-app-lyart-eta.vercel.app/",
      },
      {
        id: 6,
        title: "URL Shortener",
        description:
          "Shortens long URLs with validation and a minimal dashboard to manage links.",
        tech: ["React", "Node.js", "Express"],
        githubLink: "https://github.com",
        liveLink: "https://example.com",
      },
      {
        id: 7,
        title: "Number Guessing Game",
        description:
          "A fun JavaScript guessing game where the player tries to guess a randomly generated number within a limited number of attempts. Built using HTML, CSS, and vanilla JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Shanvi30/Number-Guessing-Game.git",
        liveLink: "https://number-guessing-game-six-lovat.vercel.app/",
      },
      {
        id: 8,
        title: "BMI Calculator",
        description: "A webpage to calculate your body mass index.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Shanvi30/BMI-Calculator.git",
        liveLink: "https://bmi-calculator-three-blue.vercel.app/",
      },
      {
        id: 9,
        title: "Color Switcher",
        description: "A playground to change the color of the background.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Shanvi30/Color-Switcher.git",
        liveLink: "https://color-switcher-three-ochre.vercel.app/",
      },
      {
        id: 10,
        title: "Auth Form Design",
        description:
          "A beautiful glassmorphic Login and Register UI featuring animations, gradient backgrounds, and clean responsive design. Built using HTML, CSS, and Vanilla JavaScript.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Shanvi30/auth-form-design.git",
        liveLink: "https://auth-form-design.vercel.app/",
      },
    ],
    [],
  );

  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <Section id="projects">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] dark:text-[#f5f5f7] transition-all duration-300 pb-4 relative inline-block group cursor-default">
            PROJECTS
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] transition-all duration-300 group-hover:scale-x-110 group-hover:opacity-80"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 transition-all duration-500">
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() =>
                setExpandedId((current) =>
                  current === project.id ? null : project.id,
                )
              }
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
