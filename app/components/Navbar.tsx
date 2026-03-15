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
    "education",
    "certifications",
    "interests",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-semibold">Dheeraj Saketh</h1>

        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize text-gray-700 hover:text-black transition"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="block py-2 capitalize text-gray-700"
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