import React from "react";
import Section from "./Section";
import logo from "../assets/cromacampus_logo.png";

const Experience = () => {
  return (
    <Section id="experience">
      <div className="w-full text-center">
        {/* Heading */}
        <div className="text-center mb-2">
          <h2 className="text-2xl md:text-4xl font-bold tracking-widest text-[#1c1c1e] dark:text-[#f5f5f7] transition-all duration-300 pb-4 relative inline-block group cursor-default">
            EXPERIENCE
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] transition-all duration-300 group-hover:scale-x-110 group-hover:opacity-80"></span>
          </h2>
        </div>

        {/* Card */}
        <div className="card-surface rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-8 text-left mt-12 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="min-w-[100px] h-[100px] bg-[#f3f4f8] dark:bg-[#1a1a22] rounded-lg flex items-center justify-center border border-[#e4e6eb] dark:border-[#2e2e38] transition-all duration-300">
            <img src={logo} alt="Company Logo" className="w-20" />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-[#1c1c1e] dark:text-[#f5f5f7] transition-colors duration-300">
              Java Fullstack Developer
            </h3>

            <p className="text-[#5f6368] dark:text-[#a1a1aa] font-medium mt-1 transition-colors duration-300">
              Croma Campus
            </p>

            <p className="text-[#5f6368] dark:text-[#a1a1aa] text-sm mt-1 mb-4 transition-colors duration-300">
              June 2025 - August 2025
            </p>

            <p className="text-[#5f6368] dark:text-[#a1a1aa] leading-relaxed mb-6 transition-colors duration-300">
              Developed dynamic and scalable web applications using the MERN
              stack, handling frontend. Collaborated with cross-functional teams
              to build responsive UI, implement RESTful APIs, and optimize
              application performance in an agile environment.
            </p>

            <h4 className="font-semibold mb-3 text-[#1c1c1e] dark:text-[#f5f5f7] transition-colors duration-300">
              Skills:
            </h4>

            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React JS",
                "Node JS",
                "Tailwind CSS",
                "MongoDB",
                "SpringBoot",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
