"use client";
import type { Metadata } from "next";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import styles from "../../styles/AboutTeam.module.css";
import partners from "../../public/assets/img/partners.jpg";
import chris from "../../public/assets/img/chris.jpeg";
import christine from "../../public/assets/img/christine.jpeg";
import aja from "../../public/assets/img/aja.jpeg";
import holt from "../../public/assets/img/holt.jpeg";
import kelly from "../../public/assets/img/kelly.jpeg";
import michelle from "../../public/assets/img/michelle.png";
import ray from "../../public/assets/img/ray.jpeg";
import ricardo from "../../public/assets/img/ricardo.jpeg";
import tad from "../../public/assets/img/tad.jpeg";
import group from "../../public/assets/img/group.jpeg";

export const metadata: Metadata = {
  title: "Services | Wellington CMA",
  description: "View Wellington CMA Team members",
  metadataBase: new URL("https://wellingtoncma.com"),
  alternates: {
    canonical: "/services",
  },
};

const teamMembers = [
  {
    name: "Tad Lacey",
    company: "CMA Asset Managers, Inc.",
    role: "Partner - Wellington/CMA",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: tad,
  },
  {
    name: "Ricardo da Silva",
    company: "Wellington Property Company",
    role: "Partner - Wellington/CMA",
    about:
      "With over fifteen years of experience providing commercial brokerage amp; consulting services, Mr.Ricardo da Silva has successfully represented numerous user, investor and developer clients in a variety of commercial property purchase, sale and lease transactions. Mr. da Silva is a graduate of Boston College.",
    image: ricardo,
  },
  {
    name: "Christopher Gray",
    company: "Wellington Property Company",
    role: "Senior Asset Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: chris,
  },
  {
    name: "Christine Green",
    company: "CMA Asset Managers, Inc.",
    role: "Senior Asset Manager",
    about:
      "Boss Ninja Lady A rampant generalist who oversees all aspects of the business. Always looking for opportunities for optimization and to complete her lifetime certification in Kaizen. Proactive manager who resists a reactive environment. Always wishing her team gets to do exactly what they want, while fulfilling the needs of the company. A double Major BA from SFSU, apparently Christine still speaks some Spanish and French. Christine has lived the majority of her life in the Bay Area. Along with her resistant family, she is a budding naturalist with a distinct caterpillar problem. Desperately seeking new canine companion to complete her family. Will settle for bird watching on weekends.",
    image: christine,
  },
  {
    name: "Michelle Hardy",
    company: "CMA Asset Managers, Inc.",
    role: "Senior Administrator",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: michelle,
  },
  {
    name: "Ray Jean-Gilles",
    company: "CMA Asset Managers, Inc.",
    role: "Assistant Asset Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: ray,
  },
  {
    name: "D. Holt Lacey",
    company: "CMA Asset Managers, Inc.",
    role: "Facilities and Asset Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: holt,
  },
  {
    name: "Aja Lathan",
    company: "CMA Asset Managers, Inc.",
    role: "Office Administrator",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: aja,
  },
  {
    name: "Kelly Tran",
    company: "Wellington Property Company",
    role: "Senior Operations Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: kelly,
  },
];

export default function Team() {
  return (
    <>
      <Navbar />
      <main className={styles.team_container}>
        <header className={styles.team_header}>
          <h1>Meet the Team</h1>
          <p>The people who make everything possible</p>
        </header>
        <div className={styles.image_wrapper}>
          <Image
            src={group}
            alt="Company logo"
            width={1200}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <p>
          <em>
            Our team is here for you. We bring a wide range of skills to work
            everyday as unique individuals with complementary perspectives and
            deep integration into our communities.
          </em>
        </p>
        <br />
        <h2>Team Members</h2>
        <section className={styles.team_grid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.team_card}>
              <Image
                src={member.image}
                alt={member.name}
                className={styles.team_image}
                height={200}
              />
              <h3>{member.name}</h3>
              <span>{member.company}</span>
              <br />
              <span>{member.role}</span>
              {/* <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>About</Accordion.Header>
                  <Accordion.Body>{member.about}</Accordion.Body>
                </Accordion.Item>
              </Accordion> */}
            </div>
          ))}
        </section>
        <br /> <br />
        <div className={styles.image_wrapper}>
          <Image
            src={partners}
            alt="Company logo"
            width={1200}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <p>
            <em>Tad Lacey & Ricardo da Silva</em>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
