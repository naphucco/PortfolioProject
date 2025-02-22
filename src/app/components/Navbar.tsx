"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand text-white" href="/">
          MyLogo
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler text-white border-0"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Nav Links (Collapsible) */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <div className="navbar-nav ms-auto text-center">
            <Link className="nav-link px-3 text-white fs-sm" href="/">
              Home
            </Link>
            <Link className="nav-link px-3 text-white fs-sm" href="/about">
              About
            </Link>
            <Link className="nav-link px-3 text-white fs-sm" href="/projects">
              Projects
            </Link>
            <Link className="nav-link px-3 text-white fs-sm" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
