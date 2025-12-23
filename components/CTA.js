import styles from "../styles/CTA.module.css";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <Link href="/services" className={styles.cta_link}>
        CONTACT US
      </Link>
    </>
  );
};

export default Cta;
