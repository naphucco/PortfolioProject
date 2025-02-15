import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-primary">Hello Bootstrap in Next.js!</h1>
      <button className="btn btn-success">Click Me</button>
    </div>
  );
}
