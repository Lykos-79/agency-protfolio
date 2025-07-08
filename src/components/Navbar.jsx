import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/#clients", label: "Clients" },
    { to: "/#services", label: "Services" },
    { to: "/#projects", label: "Projects" },
    { to: "/#about", label: "About" },
    { to: "/#contact", label: "Contact" },
  ];

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="w-full shadow-md">
      <div className="flex justify-between items-center px-6 md:px-16 py-8">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Tripod</h1>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-3xl text-white"
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:items-center md:space-x-8 font-medium absolute md:static left-0 w-full md:w-auto transition-all duration-300 ease-in-out bg-transparent md:bg-transparent ${
            isMenuOpen ? "top-[10rem] bg-black/80" : "top-[-1000px]"
          }`}
        >
          {navLinks.map((link, index) => (
            <li key={index} className="relative group text-center py-2 md:py-0">
              <Link
                smooth
                to={link.to}
                onClick={() => {
                  if (link.to === "/") {
                    handleHomeClick();
                  }
                  setIsMenuOpen(false);
                }}
                className="cursor-pointer flex flex-col items-center text-white"
              >
                <span className="group-hover:text-gray-300 transition-colors duration-300">
                  {link.label}
                </span>
                <div className="h-1 w-full bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
