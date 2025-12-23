import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import logo from "../public/assets/logo/logo.png";

export default function Navbar() {
  return (
    <div className={styles.main}>
      <Row className={styles.navbar}>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <Image
                  className={styles.logo}
                  alt="bay area web design triangular logo"
                  src={logo}
                  width={55}
                />
                <span className={styles.title}>WELLINGTON</span>
              </Link>
            </li>
            <li className={styles.ul_links}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.ul_links}>
              <Link href="/services">Services</Link>
            </li>
            <li className={styles.ul_links}>
              <Link href="/team">Team</Link>
            </li>
            <li className={styles.ul_links}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </Row>
    </div>
  );
}
