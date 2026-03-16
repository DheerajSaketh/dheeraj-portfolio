'use client';

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "resume",
    "education",
    "certifications",
    "interests",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow-lg z-50 border-b border-gray-700/50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dheeraj Saketh</h1>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white hover:text-blue-400 transition-colors"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md shadow-md px-6 pb-4 border-t border-gray-700/50">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="block py-2 capitalize text-gray-300 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}