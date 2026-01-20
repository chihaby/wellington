import styles from "../styles/Services.module.css";
import Image from "next/image";
import parking from "../public/assets/svg/parking_primary.svg";
import Commercial from "../public/assets/svg/commercial_primary.svg";
import events from "../public/assets/svg/events.svg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Cta from "./CTA2";

const Benefit = () => {
  return (
    <div style={{ backgroundColor: "var(--color-background)" }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Services</h2>
        <br />
        <Row style={{ padding: "16px" }}>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={parking}
                alt="parking icon image"
                width={60}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div className={styles.item_title}>
              <span>Parking</span>
            </div>
            <div className={styles.description}>
              {/* Parking lot or structure, we will manage it for its best revenue
              outcome and with an eye toward serving the greater
              retail/entertainment/residential community. */}
              {/* We deliver a safe, seamless parking experience for monthly,
              transient, and event customers by anticipating patron needs,
              staying informed on factors that impact our facilities, and
              partnering with trusted local vendors who respond quickly and
              efficiently. */}
              Our mission is to serve people and strengthen communities by
              providing safe, welcoming, and thoughtfully managed parking
              environments.
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={Commercial}
                alt="commercial building icon"
                width={60}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div className={styles.item_title}>
              <span>property</span>
            </div>
            <div className={styles.description}>
              We partner with clients to manage their commercial and residential
              properties, providing hands-on operational oversight that drives
              reliable, economical, and profitable results.
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={events}
                alt="logo design"
                width={60}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div className={styles.item_title}>
              <span>Events</span>
            </div>
            <div className={styles.description}>
              {/* We will work with local event spaces and proprietors to provide
              parking that meets your customers{"’"} needs. */}
              {/* Our success in event parking is driven by strong partnerships with
              entertainment groups and local venues, seamless collaboration
              between attendants and security to ensure vehicle safety, and the
              use of efficient technology that enables patrons to pay, park, and
              reach their destinations quickly and effortlessly. */}
              Our approach to event parking is grounded in teamwork, a
              commitment to safety, and the power of technology.
            </div>
          </Col>
        </Row>
        <div className={styles.service_cta}>
          <Cta />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
