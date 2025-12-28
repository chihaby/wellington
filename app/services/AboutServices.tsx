"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import styles from "../../styles/AboutServices.module.css";
import Accordion from 'react-bootstrap/Accordion';
import healthcare from '../../public/assets/svg/healthcare.svg';
import corporate from '../../public/assets/svg/corporate.svg';
import residential from '../../public/assets/svg/residential.svg';
import airport from '../../public/assets/svg/airport.svg';
import valet from '../../public/assets/svg/valet.svg';
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
        <span className={styles.title}><b>Services</b></span>
        <p>
          We manage parking for residential, commercial, medical, and large-scale properties with a hands-on, local approach focused on results. Our nearby teams respond quickly to maintenance and repairs, reducing downtime, preventing misuse, and keeping parking areas operating at full capacity. By improving efficiency, compliance, and space utilization, our parking management services help property owners increase revenue, lower operating costs, and protect long-term asset value.
        </p>
      </div>
      <div className={styles.accordion_div}>
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Image 
                className={styles.icon}
                alt='icon image of commercial building'   
                src={corporate} 
              />&nbsp;    
              <b>Commercial</b>
            </Accordion.Header>
            <Accordion.Body>
              <ul className={styles.list}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Image 
                className={styles.icon}
                alt='icon image of commercial building'   
                src={residential} 
              />&nbsp;   
              <b>Residential</b></Accordion.Header>
            <Accordion.Body>
              <ul className={styles.list}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
              </ul>
          </Accordion.Body>
        </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <Image 
                className={styles.icon}
                alt='icon image of commercial building'   
                src={healthcare} 
              />&nbsp;   
              <b>Healthcare</b></Accordion.Header>
            <Accordion.Body>
              <ul className={styles.list}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
              </ul>
          </Accordion.Body>
        </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <Image 
                className={styles.icon}
                alt='icon image of commercial building'   
                src={airport} 
              />&nbsp;   
              <b>Airport</b></Accordion.Header>
            <Accordion.Body>
              <ul className={styles.list}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
              </ul>
          </Accordion.Body>
        </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <Image 
                className={styles.icon}
                alt='icon image of commercial building'   
                src={valet} 
              />&nbsp;   
              <b>Valet</b></Accordion.Header>
            <Accordion.Body>
              <ul className={styles.list}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse.</li>
              </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
    <Footer />
    </>
  );
};

export default services;