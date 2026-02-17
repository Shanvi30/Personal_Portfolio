import React from "react";
import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode, SiVercel } from "react-icons/si";
import { profile } from "../data/profile";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f3f4f8] dark:bg-[#1a1a22] border-t border-[#e4e6eb] dark:border-[#2e2e38] py-10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 inline-flex items-center justify-center rounded-lg bg-white dark:bg-[#23232d] border border-[#e4e6eb] dark:border-[#2e2e38] hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35] transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-[#5f6368] dark:text-[#a1a1aa] hover:text-[#1c1c1e] dark:hover:text-[#f5f5f7] transition-colors duration-300" />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 inline-flex items-center justify-center rounded-lg bg-white dark:bg-[#23232d] border border-[#e4e6eb] dark:border-[#2e2e38] hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-[#5f6368] dark:text-[#a1a1aa] hover:text-[#1c1c1e] dark:hover:text-[#f5f5f7] transition-colors duration-300" />
            </a>
            <a
              href={profile.links.vercel}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 inline-flex items-center justify-center rounded-lg bg-white dark:bg-[#23232d] border border-[#e4e6eb] dark:border-[#2e2e38] hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35] transition-all duration-300"
              aria-label="Vercel"
            >
              <SiVercel className="text-[#5f6368] dark:text-[#a1a1aa] hover:text-[#1c1c1e] dark:hover:text-[#f5f5f7] transition-colors duration-300" />
            </a>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 inline-flex items-center justify-center rounded-lg bg-white dark:bg-[#23232d] border border-[#e4e6eb] dark:border-[#2e2e38] hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35] transition-all duration-300"
              aria-label="LeetCode"
            >
              <SiLeetcode className="text-[#5f6368] dark:text-[#a1a1aa] hover:text-[#1c1c1e] dark:hover:text-[#f5f5f7] transition-colors duration-300" />
            </a>
            <a
              href={profile.links.gfg}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 inline-flex items-center justify-center rounded-lg bg-white dark:bg-[#23232d] border border-[#e4e6eb] dark:border-[#2e2e38] hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35] transition-all duration-300"
              aria-label="GeeksforGeeks"
            >
              <SiGeeksforgeeks className="text-[#5f6368] dark:text-[#a1a1aa] hover:text-[#1c1c1e] dark:hover:text-[#f5f5f7] transition-colors duration-300" />
            </a>
          </div>

          <p className="text-[#5f6368] dark:text-[#a1a1aa] mb-2 transition-colors duration-300">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
