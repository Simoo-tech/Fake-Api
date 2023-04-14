import Link from "next/link";
import style from "../src/styles/nav.module.css";
export default function Navbar() {
  return (
    <div className={style.nav}>
      <div className="container">
        <div className={`row ${style.row}`}>
          <h4 className={`${style.logo} col-6`}>Fake API</h4>
          <ul className="links col-6">
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
