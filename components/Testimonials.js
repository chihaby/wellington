// import Image from 'next/image';
import styles from "../styles/Testimonials.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Link from 'next/link';
// import WhiteCtaLink from "./WhiteCtaLink";

const Clients = () => {
  return (
    <div style={{ backgroundColor: "var(--color-surface)" }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Clients</h2>
        <Row className={styles.models}>
          <Col sm={12} md={4} className={styles.model_item}>
            <div className={styles.model_title}>Business</div>
            <div className={styles.model_image}></div>
            <div className={styles.model_description}>
              Tailored solutions to meet specific business needs. Perfect for
              showcasing products and services.
            </div>
          </Col>
          <Col sm={12} md={4} className={styles.model_item}>
            <div className={styles.model_title}>Personal</div>
            <div className={styles.model_image}></div>
            <div className={styles.model_text}>
              <div className={styles.model_description}>
                Perfect platform to showcase your skills and connect with
                potential clients.
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Clients;
