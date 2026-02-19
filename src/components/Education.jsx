import React from "react";
import Section from "./Section";

const educationItems = [
  {
    title: "Bachelor of Technology — Computer Science & Engineering",
    institute: "IIMT College of Engineering",
    detail: "Current CGPA: 75%",
    period: "2022 — 2026",
  },
  {
    title: "Senior Secondary (12th)",
    institute: "CBSE",
    detail: "Percentage: 74.4%",
    period: "2021",
  },
  {
    title: "High School (10th)",
    institute: "CBSE",
    detail: "Percentage: 82.2%",
    period: "2019",
  },
];

const Education = () => {
  return (
    <Section id="education" className="pt-10">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1c1c1e] dark:text-[#f5f5f7] transition-all duration-300 pb-4 relative inline-block group cursor-default">
            EDUCATION
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] transition-all duration-300 group-hover:scale-x-110 group-hover:opacity-80"></span>
          </h2>
        </div>

        <div className="relative pl-4 md:pl-10">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-[#e4e6eb] dark:bg-[#2e2e38] transition-colors duration-300" />

          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <div key={item.title} className="relative flex gap-6">
                {/* Dot */}
                <div className="mt-3">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] ring-4 ring-[#f3f4f8] dark:ring-[#1a1a22] transition-colors duration-300" />
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div className="card-surface rounded-lg px-6 py-6 md:px-8 md:py-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#1c1c1e] dark:text-[#f5f5f7] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm md:text-base text-[#5f6368] dark:text-[#a1a1aa] mt-1 transition-colors duration-300">
                          {item.institute}
                        </p>
                        <p className="text-sm text-[#5f6368] dark:text-[#a1a1aa] mt-1 transition-colors duration-300">
                          {item.detail}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-[#5f6368] dark:text-[#a1a1aa] whitespace-nowrap transition-colors duration-300">
                        {item.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
