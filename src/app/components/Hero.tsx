"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold mb-3">Hi, I'm John Doe</h1>
          <p className="lead text-secondary">
            A UX/UI Designer crafting beautiful experiences.
          </p>
          <Link href="/projects">
            <span className="btn btn-primary btn-lg mt-4">View My Work</span>
          </Link>
        </div>
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <Image
            src="/standing-man.png"
            alt="Standing Man"
            width={400}
            height={500}
            className="img-fluid"
            priority
          />
        </div>
      </div>
    </section>
  );
}
