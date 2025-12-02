import styles from "../styles/Benefits.module.css";
import Image from "next/image";
import parking from "../public/assets/svg/parking.svg";
import property from "../public/assets/svg/property.svg";
import events from "../public/assets/svg/events.svg";
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
                src={parking}
                alt="parking icon image"
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
                src={property}
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
                src={events}
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
