import styles from "../styles/Hero.module.css";
import Image from "next/image";
import office from "../public/assets/img/office.png";
import Cta from "./CTA";

const Hero = () => {
  return (
    <div className={styles.main}>
      <div className={styles.hero_section}>
        <div className={styles.left_side}>
          <h1 className={styles.strapline}>
            Your greater Bay Area asset management company. Providing parking
            management services, special events parking, and property management
            services. Proudly serving our community since 2014.
          </h1>
          <Cta />
        </div>
        <div className={styles.image_hero}>
          <Image
            src={office}
            alt="image of Rad an experienced web developer"
            width={450}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
