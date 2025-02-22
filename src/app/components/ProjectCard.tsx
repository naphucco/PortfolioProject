"use client";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

export default function ProjectCard({
  title,
  description,
  imgSrc,
}: ProjectCardProps) {
  return (
    <div className="col-md-4">
      <div className="card bg-secondary text-light h-100">
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={300}
          className="card-img-top w-100"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}
