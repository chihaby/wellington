import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../styles/About.module.css";
import home_secondary from "../public/assets/svg/home_secondary.svg";
import Image from "next/image";

const About = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <Row>
        <Col sm={12} md={6} lg={6}>
          <div className={styles.about_icon}>
            <Image
              src={home_secondary}
              alt="real estate icon image"
              width={150}
            />
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <h2 className={styles.title}>Wellington/CMA</h2>
          <p className={styles.description}>
            A trusted property management company with 15 years of service in
            the Bay Area. We focus on simplifying the rental experience for
            owners and tenants alike, ensuring every property is
            well-maintained, efficiently managed, and consistently profitable.
            From tenant screening to rent collection, our dedicated team handles
            every detail so you can enjoy peace of mind and maximize your
            investment.
          </p>
          <br />
        </Col>
      </Row>
      <hr />
      <Row>
        <h4>Why Wellington?</h4>
        <br />
        <br />
        <br />
        <ul className={styles.list}>
          <li>
            <b>Local Knowledge, Local Advantage:</b>
            <p>
              As a locally-owned business, we understand the unique needs and
              regulations of our area, giving you a competitive edge.
            </p>
          </li>
          <li>
            <b>Dedicated Property Manager:</b>
            <p>
              A single point of contact who knows your property and is dedicated
              to your success.
            </p>
          </li>
          <li>
            <b>Tenant Screening & Retention:</b>
            <p>
              We find the best tenants and ensure they are happy, reducing
              turnover and maximizing rental income.
            </p>
          </li>
          <li>
            <b>24/7 Availability:</b>
            <p>
              Always here when you need us—whether it is an emergency
              maintenance issue or a routine inquiry.
            </p>
          </li>
        </ul>
      </Row>
    </div>
  );
};

export default About;
