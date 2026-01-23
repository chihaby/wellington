"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import styles from "../../styles/AboutServices.module.css";
import Accordion from "react-bootstrap/Accordion";
import healthcare from "../../public/assets/svg/healthcare.svg";
import corporate from "../../public/assets/svg/corporate.svg";
import residential from "../../public/assets/svg/residential.svg";
import events from "../../public/assets/svg/events.svg";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Wellington CMA",
  description:
    "View bay area web design services for small, medium businesses and industry professionals",
  metadataBase: new URL("https://bayareawebdesign.net"),
  alternates: {
    canonical: "/services",
  },
};

const services = () => {
  return (
    <>
      <Navbar />
      <div className={styles.top_section}>
        <span className={styles.title}>
          <b>Services</b>
        </span>
        <p>
          We manage parking for residential, commercial, medical, and
          large-scale properties with a hands-on, local approach focused on
          results. Our nearby teams respond quickly to maintenance and repairs,
          reducing downtime, preventing misuse, and keeping parking areas
          operating at full capacity. By improving efficiency, compliance, and
          space utilization, our parking management services help property
          owners increase revenue, lower operating costs, and protect long-term
          asset value.
        </p>
      </div>
      <div className={styles.accordion_div}>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Image
                className={styles.icon}
                alt="icon image of commercial building"
                src={corporate}
              />
              &nbsp;
              <b>Parking</b>
            </Accordion.Header>
            <Accordion.Body>
              <ul className={styles.list}>
                <li>
                  We deliver reliable and seamless parking experience for
                  monthly, transient, and event customers by anticipating patron
                  needs.
                </li>
                <li>
                  We lead with awareness and responsibility, staying informed
                  about weather conditions, neighborhood dynamics, and city
                  policies to ensure our operations support both our customers
                  and the communities around us.
                </li>
                <li>
                  We are committed to investing locally, building strong
                  partnerships with trusted vendors and tradespeople to deliver
                  reliable facility support while contributing to the local
                  economy.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Image
                className={styles.icon}
                alt="icon image of commercial building"
                src={residential}
              />
              &nbsp;
              <b>Properties</b>
            </Accordion.Header>
            <Accordion.Body>
              <ul className={styles.list}>
                <li>
                  Our facility management and maintenance teams work
                  synergistically to maintain all properties at optimal
                  condition.
                </li>
                <li>
                  We provide reserved planning and consulting services for major
                  capital projects to keep our client informed of facility
                  needs.
                </li>
                <li>
                  We utilize trusted small local contractors and vendors that
                  consistently deliver excellent services to the properties we
                  manage.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <Image
                className={styles.icon}
                alt="icon image of commercial building"
                src={events}
              />
              &nbsp;
              <b>Events</b>
            </Accordion.Header>
            <Accordion.Body>
              <ul className={styles.list}>
                <li>
                  Our partnerships and continuous communication with
                  entertainment groups and local venues ensures smooth event
                  operations.
                </li>
                <li>
                  The coordinated efforts between parking, security and
                  maintenance teams delivers a safe, worry-free experience for
                  patrons.
                </li>
                <li>
                  The smart technology solutions that we implement make paying,
                  parking, and accessing event locations fast and convenient.
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
      <Footer />
    </>
  );
};

export default services;
