import React, { useEffect, useMemo, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useTheme } from "../context/ThemeProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { name: "Home", href: "#home", id: "home" },
      { name: "About", href: "#about", id: "about" },
      { name: "Education", href: "#education", id: "education" },
      { name: "Skills", href: "#skills", id: "skills" },
      { name: "Experience", href: "#experience", id: "experience" },
      { name: "Projects", href: "#projects", id: "projects" },
      { name: "Contact", href: "#contact", id: "contact" },
    ],
    [],
  );

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navLinks]);

  const handleNavClick = (e, href) => {
    e.preventDefault();

    const element = document.querySelector(href);
    const navbar = document.querySelector("nav");

    if (element && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - navbarHeight + 2,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={[
        "fixed top-0 left-0 w-full z-50",
        "transition-all duration-300",
        scrolled ? "mx-0" : "mx-4 mt-4",
      ].join(" ")}
    >
      <div
        className={[
          "transition-all duration-300",
          scrolled
            ? "bg-[#fafafa]/80 dark:bg-[#0f0f14]/80 backdrop-blur-lg border-b border-[#e4e6eb]/50 dark:border-[#2e2e38] w-full"
            : "bg-[#fafafa]/90 dark:bg-[#0f0f14]/95 backdrop-blur-md border border-[#e4e6eb]/80 dark:border-[#2e2e38] max-w-5xl mx-auto md:rounded-full",
        ].join(" ")}
      >
        <div className="px-4 md:px-6">
          <div
            className={[
              "flex items-center justify-between",
              scrolled ? "py-2" : "py-3",
            ].join(" ")}
          >
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-xl md:text-2xl font-semibold tracking-wide transition-all duration-300 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] dark:from-[#f58529] dark:via-[#c13584] dark:to-[#5851db] bg-clip-text text-transparent hover:opacity-80"
            >
              Hanshika Shanvi
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={[
                    "relative font-medium text-sm",
                    "text-[#5f6368] hover:text-[#1c1c1e] dark:text-[#a1a1aa] dark:hover:text-[#f5f5f7]",
                    "transition-colors duration-300",
                    "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:rounded-full",
                    "after:bg-gradient-to-r after:from-[#f58529] after:via-[#dd2a7b] after:to-[#8134af]",
                    "dark:after:bg-gradient-to-r dark:after:from-[#f58529] dark:after:via-[#c13584] dark:after:to-[#5851db]",
                    "after:transition-all after:duration-300 hover:after:w-full",
                    activeId === link.id
                      ? "text-[#1c1c1e] dark:text-[#f5f5f7] after:w-full"
                      : "",
                  ].join(" ")}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-[#e4e6eb] bg-white dark:bg-[#23232d] dark:border-[#2e2e38] transition-all duration-300 hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35]"
              >
                {isDark ? (
                  <FaSun className="text-[#f5f5f7]" size={16} />
                ) : (
                  <FaMoon className="text-[#5f6368]" size={16} />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-[#e4e6eb] bg-white dark:bg-[#23232d] dark:border-[#2e2e38] transition-all duration-300 hover:bg-[#f3f4f8] dark:hover:bg-[#2a2a35]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation menu"
              >
                {isOpen ? (
                  <FaTimes
                    className="text-[#1c1c1e] dark:text-[#f5f5f7]"
                    size={18}
                  />
                ) : (
                  <FaBars
                    className="text-[#1c1c1e] dark:text-[#f5f5f7]"
                    size={18}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 pt-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={[
                    "block py-2 px-1 font-medium",
                    "text-[#5f6368] hover:text-[#1c1c1e] dark:text-[#a1a1aa] dark:hover:text-[#f5f5f7]",
                    "transition-colors duration-300",
                    activeId === link.id
                      ? "text-[#1c1c1e] dark:text-[#f5f5f7]"
                      : "",
                  ].join(" ")}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
