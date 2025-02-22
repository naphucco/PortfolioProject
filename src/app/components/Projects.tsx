"use client";

import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5">Featured Projects</h2>
      <div className="row g-4">
        <ProjectCard
          title="Project One"
          description="A sleek website design for a modern startup."
          imgSrc="/project1.jpg"
        />
        <ProjectCard
          title="Project Two"
          description="An intuitive mobile app interface."
          imgSrc="/project2.jpg"
        />
        <ProjectCard
          title="Project Three"
          description="A branding project with a unique identity."
          imgSrc="/project3.jpg"
        />
      </div>
    </section>
  );
}
