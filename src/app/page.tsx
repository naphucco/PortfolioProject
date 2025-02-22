"use client";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <main className="min-vh-100 bg-dark text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
