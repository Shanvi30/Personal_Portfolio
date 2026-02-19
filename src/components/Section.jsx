import React from "react";
import { useInView } from "../hooks/useInView";

const Section = ({ id, className = "", children }) => {
  const { ref, inView } = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={[
        "min-h-[80vh] md:min-h-screen",

        id === "home" ? "flex items-center justify-center md:block" : "",

        "px-4 py-12 md:px-8 md:py-20",

        id !== "home" && "bg-[#f3f4f8] dark:bg-[#1a1a22]",

        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",

        className,
      ].join(" ")}
    >
      <div className="w-full max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default Section;
