// import Image from 'next/image';
import styles from "../styles/Clients.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Link from 'next/link';
// import WhiteCtaLink from "./WhiteCtaLink";

const Clients = () => {
  return (
    <div style={{ backgroundColor: "var(--color-surface)" }}>
      <div className={styles.container}>
        <h2 className={styles.title}>CLIENTS</h2>
        <Row className={styles.reviews}>
          <Col sm={12} md={3} lg={3}>
            <div className={styles.description}>
              {'"'}Lorem Ipsum has been the industry standard text ever since
              the 1500s{'"'}
            </div>
            <div className={styles.subtitle}>Client A</div>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <div className={styles.description}>
              {'"'}Lorem Ipsum has been the industry standard text ever since
              the 1500s{'"'}
            </div>
            <div>
              <div className={styles.subtitle}>Client B</div>
            </div>
          </Col>
          <Col sm={12} md={3} lg={3}>
            <div className={styles.description}>
              {'"'}Lorem Ipsum has been the industry standard text ever since
              the 1500s{'"'}
            </div>
            <div className={styles.subtitle}>Client C</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Clients;
