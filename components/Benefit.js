import styles from "../styles/Benefits.module.css";
import Image from "next/image";
import axe from "../public/assets/svg/axe.svg";
import logo from "../public/assets/svg/logo.svg";
import copy from "../public/assets/svg/copy.svg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Benefit = () => {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Services</h2>
        <br />
        <Row style={{ padding: "16px" }}>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={axe}
                alt="accessibility"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Parking Management
            </div>
            <br />
            <div className={styles.description}>
              A fully accessible website that meets the latest legal
              accessibility standards, allowing all users to engage with the
              content.
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={copy}
                alt="writing for the web"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Property Management
            </div>
            <br />
            <div className={styles.description}>
              <b>Commercial {"&"} Residential</b>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={logo}
                alt="logo design"
                width={130}
                style={{
                  margin: "auto",
                }}
              />
            </div>
            <div
              className={styles.item_title}
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              Special Events
            </div>
            <br />
            <div className={styles.description}>
              A logo that tells your brand story and resonates with your
              audience, leaving a lasting impression
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Benefit;
