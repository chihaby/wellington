import styles from "../styles/Hero.module.css";
import Image from "next/image";
import appt from "../public/assets/img/appt.jpg";
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
            src={appt}
            alt="image of Rad an experienced web developer"
            height={350}
            width={380}
            priority
          />
          {/* <Image
            src={parking}
            alt="image of Rad an experienced web developer"
            height={320}
            width={450}
            priority
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
