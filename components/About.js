import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../styles/About.module.css';
import estate from '../public/assets/svg/estate.svg';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Image
            src={estate}
            alt='parking icon image'
            width={130}
            style={{
              margin: 'auto',
            }}
          />
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className={styles.title}>
            <h2 style={{ fontWeight: '600', color: '#1f2d2a' }}>
              Wellington/CMA
            </h2>
          </div>
          <p style={{ color: '#1f2d2a' }}>
            We are a trusted property management company with 15 years of
            service in the local market. We focus on simplifying the rental
            experience for owners and tenants alike, ensuring every property is
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
        <h3 className={styles.title}>Why Work With Us?</h3>
        <ul className={styles.ul}>
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
