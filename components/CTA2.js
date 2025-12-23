import styles from "../styles/CTA2.module.css";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <Link href="/services" className={styles.cta_link}>
        VIEW SERVICES
      </Link>
    </>
  );
};

export default Cta;
