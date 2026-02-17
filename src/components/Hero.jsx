import React, { useEffect, useMemo, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import Section from "./Section";
import { profile } from "../data/profile";

const WORDS = ["Fullstack Developer", "MERN Developer"];

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex % words.length];

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 70;
    const pauseAfterTyped = 900;

    const doneTyping = !isDeleting && text === currentWord;
    const doneDeleting = isDeleting && text === "";

    const timeout = window.setTimeout(
      () => {
        if (doneTyping) {
          setIsDeleting(true);
          return;
        }

        if (doneDeleting) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
          return;
        }

        const next = isDeleting
          ? currentWord.slice(0, Math.max(0, text.length - 1))
          : currentWord.slice(0, text.length + 1);

        setText(next);
      },
      doneTyping ? pauseAfterTyped : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [currentWord, isDeleting, text, words.length]);

  return text;
}

const Hero = () => {
  const typed = useTypewriter(WORDS);

  const supportsDownload = useMemo(() => {
    if (typeof document === "undefined") return true;
    return "download" in document.createElement("a");
  }, []);

  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewWorkClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      const elementPosition = projectsSection.getBoundingClientRect().top;
      projectsSection.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id="home">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-2 md:gap-1 items-center">
          {/* Left: Profile image */}
          <div className="flex justify-center md:justify-center mt-6 md:mt-10">
            <div className="relative">
              <div className="h-80 w-80 md:h-96 md:w-96 rounded-full bg-white dark:bg-[#23232d] shadow-xl dark:shadow-dark-soft flex items-center justify-center p-1 animate-float transition-transform duration-500 transform hover:scale-105 hover:shadow-2xl">
                <div className="h-full w-full rounded-full bg-white dark:bg-[#1a1a22] border-2 border-[#e4e6eb] dark:border-[#2e2e38] overflow-hidden transition-transform duration-500 transform hover:rotate-3 hover:scale-105">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="h-full w-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="text-left md:text-left space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-[#5f6368] dark:text-[#a1a1aa] transition-colors duration-300">
              Hey there ! , I'm
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1e] dark:text-[#f5f5f7] transition-colors duration-300">
              Hanshika Shanvi
            </h1>

            {/* Typewriter */}
            <div className="mt-2">
              <div className="min-h-[2.25rem] md:min-h-[2.75rem] min-w-[22ch] text-2xl md:text-3xl font-semibold text-[#1c1c1e] dark:text-[#f5f5f7]">
                <span>{typed}</span>
                <span
                  className="ml-1 inline-block w-[0.6ch] text-[#5f6368] dark:text-[#a1a1aa] animate-pulse transition-colors duration-300"
                  aria-hidden="true"
                >
                  |
                </span>
              </div>
            </div>

            <p className="text-base md:text-lg text-[#5f6368] dark:text-[#a1a1aa] leading-relaxed max-w-xl transition-colors duration-300">
              I am a full-stack developer with strong experience in building
              scalable web applications. Skilled in both front-end and back-end
              development, I specialize in the MERN stack, UI design,
              animations, and creating smooth user experiences.
            </p>

            {/* Social icons */}
            <div className="flex gap-4 mt-4">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 rounded-lg bg-white dark:bg-[#23232d] border border-[#e4e6eb] dark:border-[#2e2e38] flex items-center justify-center text-[#5f6368] dark:text-[#a1a1aa] hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35] hover:text-[#1c1c1e] dark:hover:text-[#f5f5f7] transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 rounded-lg bg-white dark:bg-[#23232d] border border-[#e4e6eb] dark:border-[#2e2e38] flex items-center justify-center text-[#5f6368] dark:text-[#a1a1aa] hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35] hover:text-[#1c1c1e] dark:hover:text-[#f5f5f7] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:hanshikashanvi@gmail.com"
                className="h-11 w-11 rounded-lg bg-white dark:bg-[#23232d] border border-[#e4e6eb] dark:border-[#2e2e38] flex items-center justify-center text-[#5f6368] dark:text-[#a1a1aa] hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35] hover:text-[#1c1c1e] dark:hover:text-[#f5f5f7] transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:+919955487963"
                className="h-11 w-11 rounded-lg bg-white dark:bg-[#23232d] border border-[#e4e6eb] dark:border-[#2e2e38] flex items-center justify-center text-[#5f6368] dark:text-[#a1a1aa] hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35] hover:text-[#1c1c1e] dark:hover:text-[#f5f5f7] transition-all duration-300"
                aria-label="Phone"
              >
                <FaPhone />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={handleViewWorkClick}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] text-white font-medium hover:opacity-90 transition-all duration-300 text-center shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={handleContactClick}
                className="relative px-8 py-3 rounded-lg font-medium text-[#1c1c1e] dark:text-[#f5f5f7] border border-[#e4e6eb] dark:border-[#2e2e38] bg-white dark:bg-[#23232d] overflow-hidden transition-all duration-500 group"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Get In Touch
                </span>

                <span className="absolute inset-0 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                const elementPosition =
                  aboutSection.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - 80;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }}
            className="inline-block text-[#5f6368] dark:text-[#a1a1aa] hover:text-[#1c1c1e] dark:hover:text-[#f5f5f7] transition-colors duration-300 animate-bounce"
          >
            <HiArrowDown size={28} />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
