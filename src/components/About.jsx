import React from "react";
import { FaDownload } from "react-icons/fa";
import Section from "./Section";
import { profile } from "../data/profile";

const About = () => {
  return (
    <Section id="about">
      <div className="w-full">
        <div className="card-surface rounded-2xl px-5 py-8 md:px-8 md:py-10 hover:shadow-xl transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c1e] dark:text-[#f5f5f7] mb-6 transition-all duration-300 pb-4 relative inline-block group cursor-default">
                About Me
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] transition-all duration-300 group-hover:scale-x-110 group-hover:opacity-80"></span>
              </h2>
              <p className="text-[#5f6368] dark:text-[#a1a1aa] leading-relaxed mb-4 transition-colors duration-300">
                Hello! I'm{" "}
                <span className="font-semibold text-[#1c1c1e] dark:text-[#f5f5f7]">
                  {profile.name}
                </span>
                , a passionate MERN Stack developer building responsive,
                accessible, and dynamic web applications. I enjoy solving
                problems with clean code and creating thoughtful UI experiences.
              </p>
              <p className="text-[#5f6368] dark:text-[#a1a1aa] leading-relaxed mb-4 transition-colors duration-300">
                I focus on full-stack projects using React, Node.js, Express,
                and MongoDB, and I actively practice DSA to strengthen my
                algorithmic skills.
              </p>
              <p className="text-[#5f6368] dark:text-[#a1a1aa] leading-relaxed mb-8 transition-colors duration-300">
                I like collaborating on projects, learning new technologies, and
                improving product performance and UX.
              </p>

              <a
                href="/Resume.pdf"
                download="HanshikaShanvi_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                <FaDownload />
                Download Resume
              </a>
            </div>

            {/* Right: Image */}
            <div className="hidden md:flex justify-center">
              <div className="relative">
                <div className="h-60 w-60 md:h-72 md:w-72 rounded-xl bg-white dark:bg-[#23232d] border-2 border-[#e4e6eb] dark:border-[#2e2e38] overflow-hidden transition-all duration-300">
                  <img
                    src={profile.image}
                    alt={`Portrait of ${profile.name}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
