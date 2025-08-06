import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className="box">
        <div className="box-1">Box one</div>
        <div className="box-2">Box Two</div>
        <div className="box-1">Box Three</div>
      </div>
      <div className="box">
        <div className="box-5">Box one</div>
        <div className="box-3">Box Two</div>
        <div className="box-5">Box Three</div>
      </div>
      <div className="box">
        <div className="box-6">Box one</div>
        <div className="box-4">Box Two</div>
        <div className="box-6">Box Three</div>
      </div>
    </div>
  );
}
