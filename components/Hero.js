import styles from "../styles/Hero.module.css";
// import Image from "next/image";
// import heroImage from "../public/assets/svg/hero9.svg";
// import Rad from '../public/img/Rad.jpg';
import CtaLink from "./CtaLink";

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
          <CtaLink />
        </div>
        <div className={styles.image_hero}>
          {/* <Image
            src={Rad}
            alt='image of Rad an experienced web developer'
            width={330}
            height={300}
            priority
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
