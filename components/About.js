import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../styles/About.module.css';
import home_secondary from '../public/assets/svg/home_secondary.svg';
import Image from 'next/image';

const About = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <Row>
        <Col sm={12} md={6} lg={6}>
          <div className={styles.icon}>
            <Image
              src={home_secondary}
              alt='real estate icon image'
              width={150}
            />
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <h2 className={styles.title}>Wellington/CMA</h2>
          <p className={styles.description}>
            A trusted asset management company in the East Bay since 2014.
            Combining the forces of two long term East Bay companies, serving
            the community for decades. We focus on managing properties and
            operations oversight for the most consistent, economical, and
            profitable outcome for our clients. Pursuing trusted methods as well
            as employing new technology to maximize client investment and peace
            of mind.
          </p>
          <br />
        </Col>
      </Row>
      <hr />
      <Row>
        <h4 className={styles.subtitle}>Why Wellington?</h4>
        <br />
        <br />
        <br />
        <div className={styles.sub_section}>
          <ul className={styles.ul_list}>
            <li>
              <b>Local Knowledge, Local Advantage:</b>
              <p>
                As a locally-owned business, we understand the unique needs and
                regulations of our area, giving you a competitive edge.
              </p>
            </li>
            <li>
              <b>Dedicated Property Team:</b>
              <p>
                A single point of contact who knows your property and is backed
                by a diverse team dedicated to your success. Maintaining
                business hours and afterhours emergency services.
              </p>
            </li>
            <li>
              <b>Partnership:</b>
              <p>
                Our clients are our partners in the community. We are ready to
                assist in your new endeavors and consult on major changes.
              </p>
            </li>
          </ul>
        </div>
      </Row>
    </div>
  );
};

export default About;
