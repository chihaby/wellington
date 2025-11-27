import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "../styles/About.module.css";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <Card style={{ width: "18rem" }}></Card>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className={styles.title}>
            <h3>Hi! We are Wellington</h3>
          </div>
          <p>
            Have you ever visited a website only to feel overwhelmed by clutter,
            inconsistent colors, or confusing navigation? At Bay Area Web
            Design, we specialize in eliminating that frustration. Our focus
            goes beyond aesthetics—we carefully structure information
            architecture and design intuitive content flows so visitors
          </p>
          <br />
        </Col>
      </Row>
      <hr />
      <Row>
        <div className={styles.title}>
          <h3>Why Work With Us</h3>
        </div>
        <p>
          Have you ever visited a website only to feel overwhelmed by clutter,
          inconsistent colors, or confusing navigation? At Bay Area Web Design,
          we specialize in eliminating that frustration. Our focus goes beyond
          aesthetics—we carefully structure information architecture and design
          intuitive content flows so visitors
        </p>
      </Row>
    </div>
  );
};

export default About;
