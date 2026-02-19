import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiFigma } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import Section from "./Section";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiPostman,
  SiVercel,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 className="text-3xl" style={{ color: "#E34F26" }} />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt className="text-3xl" style={{ color: "#1572B6" }} />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-3xl" style={{ color: "#F7DF1E" }} />,
        },
        {
          name: "React",
          icon: <FaReact className="text-3xl" style={{ color: "#61DAFB" }} />,
        },
        {
          name: "Tailwind CSS",
          icon: (
            <SiTailwindcss className="text-3xl" style={{ color: "#06B6D4" }} />
          ),
        },
        {
          name: "Bootstrap",
          icon: (
            <FaBootstrap className="text-3xl" style={{ color: "#7952B3" }} />
          ),
        },
      ],
    },

    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNode className="text-3xl" style={{ color: "#339933" }} />,
        },
        {
          name: "Express",
          icon: <SiExpress className="text-3xl" style={{ color: "#000000" }} />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-3xl" style={{ color: "#47A248" }} />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-3xl" style={{ color: "#4479A1" }} />,
        },
        {
          name: "PostgreSQL",
          icon: (
            <SiPostgresql className="text-3xl" style={{ color: "#336791" }} />
          ),
        },
        {
          name: "Firebase",
          icon: (
            <SiFirebase className="text-3xl" style={{ color: "#FFCA28" }} />
          ),
        },
      ],
    },
    {
      title: "Languages",
      skills: [
        {
          name: "Java",
          icon: <FaJava className="text-3xl" style={{ color: "#007396" }} />,
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-3xl" style={{ color: "#F7DF1E" }} />,
        },
      ],
    },
    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-3xl" style={{ color: "#F05032" }} />,
        },
        {
          name: "GitHub",
          icon: <FaGithub className="text-3xl" style={{ color: "#6e5494" }} />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="text-3xl" style={{ color: "#FF6C37" }} />,
        },
        {
          name: "Vercel",
          icon: <SiVercel className="text-3xl" style={{ color: "#000000" }} />,
        },
        {
          name: "VS Code",
          icon: <VscCode className="text-3xl" style={{ color: "#007ACC" }} />,
        },
        {
          name: "Figma",
          icon: <SiFigma className="text-3xl" style={{ color: "#F24E1E" }} />,
        },
      ],
    },
  ];

  return (
    <Section id="skills">
      <div className="w-full">
        {/* Heading */}
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-[#1c1c1e] dark:text-[#f5f5f7] transition-all duration-300 pb-4 relative inline-block group cursor-default">
            SKILLS
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] transition-all duration-300 group-hover:scale-x-110 group-hover:opacity-80"></span>
          </h2>
        </div>

        <p className="text-center text-[#5f6368] dark:text-[#a1a1aa] mt-6 mb-16 transition-colors duration-300">
          A collection of my technical skills and expertise gained through
          various projects and experiences
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-surface rounded-lg p-5 md:p-8 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-center text-[#1c1c1e] dark:text-[#f5f5f7] mb-8 transition-colors duration-300">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center bg-[#f3f4f8] dark:bg-[#1a1a22] rounded-lg p-4 border border-[#e4e6eb] dark:border-[#2e2e38] hover:bg-white dark:hover:bg-[#23232d] transition-all duration-300"
                  >
                    <div
                      className="mb-2 transition-transform duration-300 hover:scale-110"
                      style={{
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 15px 3px ${skill.icon.props.style.color}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {skill.icon}
                    </div>

                    <span className="text-xs font-medium text-[#1c1c1e] dark:text-[#f5f5f7] transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
