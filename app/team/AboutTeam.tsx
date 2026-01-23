"use client";
import type { Metadata } from "next";
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
  title: "Services | Bay Area Web Design",
  description:
    "View bay area web design services for small, medium businesses and industry professionals",
  metadataBase: new URL("https://wellingtoncma.com"),
  alternates: {
    canonical: "/services",
  },
};

const teamMembers = [
  {
    name: "Tad Lacey",
    role: "CMA Asset Managers, Inc.r",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: tad,
  },
  {
    name: "Ricardo da Silva",
    role: "Wellington Property Company",
    about:
      "With over fifteen years of experience providing commercial brokerage {'&'}amp; consulting services, Mr.Ricardo da Silva has successfully represented numerous user, investor and developer clients in a variety of commercial property purchase, sale and lease transactions. Mr. da Silva is a graduate of Boston College.",
    image: ricardo,
  },
  {
    name: "Chris Gray",
    role: "Senior Asset Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: chris,
  },
  {
    name: "Christine Green",
    role: "CMA Asset Managers, Inc.",
    about:
      "Boss Ninja Lady A rampant generalist who oversees all aspects of the business. Always looking for opportunities for optimization and to complete her lifetime certification in Kaizen. Proactive manager who resists a reactive environment. Always wishing her team gets to do exactly what they want, while fulfilling the needs of the company. A double Major BA from SFSU, apparently Christine still speaks some Spanish and French. Christine has lived the majority of her life in the Bay Area. Along with her resistant family, she is a budding naturalist with a distinct caterpillar problem. Desperately seeking new canine companion to complete her family. Will settle for bird watching on weekends.",
    image: christine,
  },
  {
    name: "Michelle Hardy",
    role: "CMA Asset Managers, Inc. Senior Administrator",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: michelle,
  },
  {
    name: "Raynald Jean-Gilles",
    role: "CMA Asset Managers, Inc. Assistant Asset Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: ray,
  },
  {
    name: "D. Holt Lacey",
    role: "CMA Asset Managers, Inc. Facilities and Asset Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: holt,
  },
  {
    name: "Aja Latham",
    role: "CMA Asset Managers, Inc. Office Administrator",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: aja,
  },
  {
    name: "Kelly Tran",
    role: "Wellington Property Company Senior Operation Manager",
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
              <span>{member.role}</span>
              {/* <span>{member.about}</span> */}
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
