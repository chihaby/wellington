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
        <h2 className={styles.title}>Clients</h2>
        <div
          style={{
            alignItems: "center",
            textAlign: "center",
            marginTop: "50px",
            marginLeft: "65px",
            marginBottom: "50px",
          }}
        >
          <Row className={styles.models}>
            <Col sm={12} md={3} lg={3}>
              <div className={styles.model_description}>
                {'"'}Lorem Ipsum has been the industry's standard text ever
                since the 1500s{'"'}
              </div>
              <div className={styles.model_title}>Client A</div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className={styles.model_description}>
                {'"'}Lorem Ipsum has been the industry's standard text ever
                since the 1500s{'"'}
              </div>
              <div>
                <div className={styles.model_title}>Client B</div>
              </div>
            </Col>
            <Col sm={12} md={3} lg={3}>
              <div className={styles.model_description}>
                {'"'}Lorem Ipsum has been the industry's standard text ever
                since the 1500s{'"'}
              </div>
              <div className={styles.model_title}>Client C</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Clients;
