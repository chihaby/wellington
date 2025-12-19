import styles from "../styles/Hero.module.css";
import Image from "next/image";
// import heroImage from "../public/assets/svg/hero9.svg";
// import appt1 from '../public/assets/img/appt1.jpg';
import Cta from "./Cta";

const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.hero_section}>
        <div className={styles.left_side}>
          <h1 className={styles.strapline}>
            Your Bay Area property management. Providing residential,
            commercial, and parking services. Proudly serving our community for
            15 years!
          </h1>
          <Cta />
        </div>
        <div className={styles.image_hero}>
          {/* <Image
            src={appt1}
            alt='image of Rad an experienced web developer'
            width={380}
            height={350}
            priority
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
