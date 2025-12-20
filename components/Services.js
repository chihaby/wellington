import styles from '../styles/Services.module.css';
import Image from 'next/image';
import parking from '../public/assets/svg/parking_primary.svg';
import Commercial from '../public/assets/svg/commercial_primary.svg';
import events from '../public/assets/svg/events.svg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Benefit = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Services</h2>
        <br />
        <Row style={{ padding: '16px' }}>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={parking}
                alt='parking icon image'
                width={80}
                style={{
                  margin: 'auto',
                }}
              />
            </div>
            <span className={styles.item_title}>Parking</span>
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
                src={Commercial}
                alt='commercial building icon'
                width={80}
                style={{
                  margin: 'auto',
                }}
              />
            </div>
            <span className={styles.item_title}>Commercial/Residential</span>
            <br />
            <div className={styles.description}>
              Commercial {'&'} Residential
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={events}
                alt='logo design'
                width={80}
                style={{
                  margin: 'auto',
                }}
              />
            </div>
            <span className={styles.item_title}>Events</span>
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
