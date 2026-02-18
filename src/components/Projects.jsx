import React, { useMemo, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

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
        liveLink: "https://netflix-clone-frontend-web-project.vercel.app/",
        image: "Netflix.png",
      },
      {
        id: 2,
        title: "Fashion Store",
        description:
          "This project is a fully responsive frontend design converted from a Figma UI layout. The goal of the project is to transform a static design prototype into a pixel-perfect and functional webpage using React.",
        tech: ["React", "CSS", "JavaScript"],
        githubLink: "https://github.com/Shanvi30/Fashion-Store.git",
        liveLink: "https://fashion-store-gules-rho.vercel.app/",
        image: "Fashion-Store.png",
      },
      {
        id: 3,
        title: "Light Dark Theme Toggle",
        description:
          "This project demonstrates how to implement a smooth and responsive Light–Dark Theme Toggle in a React application using Context API and Tailwind CSS.",
        tech: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/Shanvi30/Light-Dark-Theme-Toggle.git",
        liveLink: "https://example.com",
        image: "Toggle.png",
      },
      {
        id: 4,
        title: "React Router",
        description:
          "A small project built while learning React Router. This project demonstrates how to set up routing in a React application and navigate between multiple pages smoothly.",
        tech: ["React", "Tailwind CSS", "Vite"],
        githubLink: "https://github.com/Shanvi30/React-Router.git",
        liveLink: "https://react-router-opal-two.vercel.app/",
        image: "React_router.png",
      },
      {
        id: 5,
        title: "Currency Converter App",
        description:
          "A simple and elegant currency converter built using React.js. It allows users to convert money between different currencies in real-time using a live exchange-rate API.",
        tech: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/Shanvi30/Currency-Converter-App.git",
        liveLink: "https://currency-converter-app-lyart-eta.vercel.app/",
        image: "Currency.png",
      },
      {
        id: 6,
        title: "Password Generator",
        description:
          "A clean and responsive Password Generator built using React Hooks and Tailwind CSS. Users can customize password length and choose character types to generate secure passwords instantly.",
        tech: ["React", "Tailwind CSS"],
        githubLink: "https://github.com/Shanvi30/Password_Generator.git",
        liveLink: "https://password-generator-khaki-phi.vercel.app/",
        image: "Password.png",
      },
      {
        id: 7,
        title: "Number Guessing Game",
        description:
          "A fun JavaScript guessing game where the player tries to guess a randomly generated number within a limited number of attempts.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Shanvi30/Number-Guessing-Game.git",
        liveLink: "https://number-guessing-game-six-lovat.vercel.app/",
        image: "Guessing-Game.png",
      },
      {
        id: 8,
        title: "BMI Calculator",
        description: "A webpage to calculate your body mass index.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Shanvi30/BMI-Calculator.git",
        liveLink: "https://bmi-calculator-three-blue.vercel.app/",
        image: "BMI-Calculator.png",
      },
      {
        id: 9,
        title: "Color Switcher",
        description: "A playground to change the color of the background.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Shanvi30/Color-Switcher.git",
        liveLink: "https://color-switcher-three-ochre.vercel.app/",
        image: "Color-Switcher.png",
      },
      {
        id: 10,
        title: "Auth Form Design",
        description:
          "A beautiful glassmorphic Login and Register UI featuring animations, gradient backgrounds, and clean responsive design.",
        tech: ["HTML", "CSS", "JavaScript"],
        githubLink: "https://github.com/Shanvi30/auth-form-design.git",
        liveLink: "https://auth-form-design.vercel.app/",
        image: "Auth-Form.png",
      },
    ],
    [],
  );

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    if (expandedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [expandedProject]);

  const openModal = (project) => {
    setExpandedProject(project);
  };

  const closeModal = () => {
    setExpandedProject(null);
  };

  return (
    <>
      <Section id="projects">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] dark:text-[#f5f5f7] transition-all duration-300 pb-4 relative inline-block group cursor-default">
              PROJECTS
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] transition-all duration-300 group-hover:scale-x-110 group-hover:opacity-80"></span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {visibleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openModal(project)}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white font-medium hover:opacity-90 transition"
            >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </Section>

      {expandedProject &&
        createPortal(
          <div
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white dark:bg-[#1f1f27] rounded-2xl shadow-2xl p-6 md:p-8 transform transition-all duration-300 scale-100"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                <FaTimes size={22} />
              </button>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {expandedProject.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {expandedProject.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {expandedProject.tech.map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 text-sm rounded-full bg-gray-100 dark:bg-[#2a2a35] text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={expandedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-200 dark:bg-[#2a2a35] hover:bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:hover:bg-[#32323d] transition font-medium"
                >
                  <FaGithub />
                  View Code
                </a>

                <a
                  href={expandedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white font-medium hover:opacity-90 transition"
                >
                  <FaExternalLinkAlt />
                  View Live
                </a>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Projects;
