import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setBgColor("white");
      setTextColor("gray-600");
    } else {
      setBgColor("transparent");
      setTextColor("white");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      window.addEventListener("scroll", changeNavbarColor);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
        window.removeEventListener("scroll", changeNavbarColor);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"} bg-${bgColor}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home">
              <img
                src="/images/KKSS_logo.png"
                alt="School Logo"
                className="h-12"
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className={`relative group text-${textColor} hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium after:absolute after:bottom-0 after:left-1/4 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`relative group text-${textColor} hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium after:absolute after:bottom-0 after:left-1/4 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300`}
              >
                About
              </a>
              <a
                href="#gallery"
                className={`relative group text-${textColor} hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium after:absolute after:bottom-0 after:left-1/4 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300`}
              >
                Gallery
              </a>
              <a
                href="#facilities"
                className={`relative group text-${textColor} hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium after:absolute after:bottom-0 after:left-1/4 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300`}
              >
                Facilities
              </a>
              <a
                href="#contact"
                className={`relative group text-${textColor} hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium after:absolute after:bottom-0 after:left-1/4 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300`}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
