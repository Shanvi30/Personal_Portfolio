import React from "react";

const ProjectCard = ({ project = {}, onClick }) => {
  const {
    title = "Project Title",
    description = "Project description goes here...",
    tech = [],
    image = "",
  } = project;

  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        bg-white dark:bg-[#1f1f27]
        rounded-2xl
        shadow-md hover:shadow-xl
        transition-all duration-300
        border border-gray-200 dark:border-[#2e2e38]
        overflow-hidden
        group
        hover:-translate-y-1
      "
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span
              key={index}
              className="
                px-3 py-1 text-xs rounded-full
                bg-gray-100 dark:bg-[#2a2a35]
                text-gray-700 dark:text-gray-300
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
