import styles from '../styles/Services.module.css';
import Image from 'next/image';
import parking from '../public/assets/svg/parking_primary.svg';
import Commercial from '../public/assets/svg/commercial_primary.svg';
import events from '../public/assets/svg/events.svg';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Cta from './CTA2';

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
                width={60}
                style={{
                  margin: 'auto',
                }}
              />
            </div>
            <div className={styles.item_title}>
              <span>Parking</span>
            </div>
            <div className={styles.description}>
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={Commercial}
                alt='commercial building icon'
                width={60}
                style={{
                  margin: 'auto',
                }}
              />
            </div>
            <div className={styles.item_title}>
              <span>Property</span>
            </div>
            <div className={styles.description}>
              Commercial {'&'} Residentialbeen the industry standard dummy text
              ever since the 1500s
            </div>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div className={styles.icon}>
              <Image
                src={events}
                alt='logo design'
                width={60}
                style={{
                  margin: 'auto',
                }}
              />
            </div>
            <div className={styles.item_title}>
              <span>Events</span>
            </div>
            <div className={styles.description}>
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s
            </div>
          </Col>
        </Row>
        <div className={styles.service_cta}>
          <Cta />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
