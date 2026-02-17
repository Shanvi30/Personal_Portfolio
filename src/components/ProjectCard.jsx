import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, isExpanded, onToggle }) => {
  const title = project.title ?? project.name;
  const tech = project.tech ?? project.technologies ?? [];

  return (
    <div className="card-surface rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <button type="button" onClick={onToggle} className="w-full text-left">
        <div className="h-32 w-full bg-[#f3f4f8] dark:bg-[#1a1a22] border-b border-[#e4e6eb] dark:border-[#2e2e38] flex items-center justify-center transition-colors duration-300">
          <div className="text-center px-4">
            <p className="text-[#1c1c1e] dark:text-[#f5f5f7] font-semibold transition-colors duration-300">
              {title}
            </p>
            <p className="text-xs text-[#5f6368] dark:text-[#a1a1aa] mt-1 transition-colors duration-300">
              Click to view more details
            </p>
          </div>
        </div>
      </button>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-[#1c1c1e] dark:text-[#f5f5f7] mb-2 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-[#5f6368] dark:text-[#a1a1aa] text-sm mb-4 leading-relaxed transition-colors duration-300">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-lg border border-[#e4e6eb] dark:border-[#2e2e38] bg-[#f3f4f8] dark:bg-[#1a1a22] text-[#5f6368] dark:text-[#a1a1aa] text-xs font-medium transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className={[
            "overflow-hidden transition-all duration-300",
            isExpanded ? "max-h-60 mt-2" : "max-h-0",
          ].join(" ")}
        >
          {isExpanded && (
            <div className="pt-4 border-t border-[#e4e6eb] dark:border-[#2e2e38] transition-colors duration-300">
              <p className="text-sm text-[#5f6368] dark:text-[#a1a1aa] mb-4 transition-colors duration-300">
                {project.fullDescription ?? project.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#e4e6eb] dark:border-[#2e2e38] text-[#1c1c1e] dark:text-[#f5f5f7] font-medium bg-white dark:bg-[#23232d] hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35] transition-all duration-300"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
