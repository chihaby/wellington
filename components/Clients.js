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
          <div className={styles.description}>
            {'"'}"What distinguishes Wellington/CMA is not only their
            operational expertise, but their genuine commitment to partnership.
            Wellington/CMA is exceptionally easy to work with. Their team is
            responsive, transparent, and solutions-oriented, making
            collaboration both efficient and productive. They are trusted
            partners who take the time to understand local conditions and value
            the perspectives of the community.{'"'}
          </div>
          <div className={styles.subtitle}>
            Oakland Chinatown Chamber of Commerce
          </div>
        </Row>
        <Row className={styles.reviews}>
          <div className={styles.description}>
            {'"'}The Fox Theater has been working with Wellington/CMA for the
            past 13 years now, and we value the relationship we have with them.
            They have been a vital part of our operations and are professional,
            responsive, and extremely helpful. They take great pride in
            providing quality services for our staff and patrons.
            {'"'}
          </div>

          <div className={styles.subtitle}>
            <span>Tony Leong</span> <br />
            <span>Fox Theater/Another Planet Entertainment</span>
          </div>
        </Row>
        <Row className={styles.reviews}>
          <div className={styles.description}>
            {'"'}
            We have worked with the team at Wellington/CMA, operating the
            Telegraph Plaza Garage for several years now. We have found their
            administration and operations team to be a service-oriented and
            responsive partner to our theatre operation, and we look forward to
            their continued service to our clients and customers.{'"'}
          </div>
          <div className={styles.subtitle}>
            <span>Jason Blackwell</span>
            <br />
            <span>Paramount Theatre</span>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Clients;
