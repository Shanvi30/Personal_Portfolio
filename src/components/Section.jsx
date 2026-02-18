import React from "react";
import { useInView } from "../hooks/useInView";

const Section = ({ id, className = "", children }) => {
  const { ref, inView } = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={[
        "min-h-[80vh]",

        id === "home" ? "flex items-center justify-center" : "flex flex-col",

        "scroll-mt-[90px] md:scroll-mt-[110px]",

        id === "home"
          ? "px-6 py-16 md:px-8 md:py-20"
          : "px-6 pt-20 pb-16 md:px-8 md:pt-24 md:pb-20",

        id !== "home" && "bg-[#f3f4f8] dark:bg-[#1a1a22]",

        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",

        className,
      ].join(" ")}
    >
      <div className="w-full max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
