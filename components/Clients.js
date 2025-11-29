// import Image from 'next/image';
import styles from '../styles/Service.module.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link';
// import WhiteCtaLink from "./WhiteCtaLink";

const Clients = () => {
  return (
    <div style={{ backgroundColor: '#fafafa' }}>
      <div className={styles.container}>
        <h2 className={styles.models_main_title}>Testimonials</h2>
        <Row className={styles.models}>
          <Col sm={12} md={4} className={styles.model_item}>
            <a
              href='https://www.blitzdetail.com/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.model_link}
            >
              <div className={styles.model_title}>Business</div>
              <div className={styles.model_image}></div>
              <div className={styles.model_description}>
                Tailored solutions to meet specific business needs. Perfect for
                showcasing products and services.
              </div>
              <br />
            </a>
          </Col>
          <Col sm={12} md={4} className={styles.model_item}>
            <a
              href='https://client-custom-website.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.model_link}
            >
              <div className={styles.model_title}>Personal</div>
              <div className={styles.model_image}></div>
              <div className={styles.model_text}>
                <div className={styles.model_description}>
                  Perfect platform to showcase your skills and connect with
                  potential clients.
                </div>
              </div>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Clients;
