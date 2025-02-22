"use client";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="container py-5 text-center">
      <h2 className="mb-4">Let's Work Together</h2>
      <p className="text-secondary">
        Got a project? Let’s build something great together.
      </p>
      <Link href="/contact">
        <span className="btn btn-primary btn-lg mt-3">Contact Me</span>
      </Link>
    </section>
  );
}
