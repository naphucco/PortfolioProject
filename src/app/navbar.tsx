import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo (on the left) */}
        <Link className="navbar-brand text-white" href="/">
          MyLogo
        </Link>

        {/* Nav Links (on the right) */}
        <div>
          <Link className="nav-link d-inline px-3 text-white" href="/">
            Home
          </Link>
          <Link className="nav-link d-inline px-3 text-white" href="/about">
            About
          </Link>
          <Link className="nav-link d-inline px-3 text-white" href="/projects">
            Projects
          </Link>
          <Link className="nav-link d-inline px-3 text-white" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
