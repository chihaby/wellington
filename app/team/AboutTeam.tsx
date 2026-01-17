"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import styles from "../../styles/AboutTeam.module.css";
import male_icon from "../../public/assets/svg/male.svg";
import female_icon from "../../public/assets/svg/female.svg";
import partners from "../../public/assets/img/partners.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Bay Area Web Design",
  description:
    "View bay area web design services for small, medium businesses and industry professionals",
  metadataBase: new URL("https://bayareawebdesign.net"),
  alternates: {
    canonical: "/services",
  },
};

const teamMembers = [
  {
    name: "Ricardo da Silva",
    role: "Wellington Property Company",
    about:
      "With over fifteen years of experience providing commercial brokerage {'&'}amp; consulting services, Mr.Ricardo da Silva has successfully represented numerous user, investor and developer clients in a variety of commercial property purchase, sale and lease transactions. Mr. da Silva is a graduate of Boston College.",
    image: male_icon,
  },
  {
    name: "Tad Lacey",
    role: "CMA Asset Managers, Inc.r",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: female_icon,
  },
  {
    name: "Chris Gray",
    role: "Senior Asset Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: male_icon,
  },
  {
    name: "Christine Green",
    role: "CMA Asset Managers, Inc.",
    about:
      "Boss Ninja Lady A rampant generalist who oversees all aspects of the business. Always looking for opportunities for optimization and to complete her lifetime certification in Kaizen. Proactive manager who resists a reactive environment. Always wishing her team gets to do exactly what they want, while fulfilling the needs of the company. A double Major BA from SFSU, apparently Christine still speaks some Spanish and French. Christine has lived the majority of her life in the Bay Area. Along with her resistant family, she is a budding naturalist with a distinct caterpillar problem. Desperately seeking new canine companion to complete her family. Will settle for bird watching on weekends.",
    image: female_icon,
  },
  {
    name: "Michelle Hardy",
    role: "CMA Asset Managers, Inc. Senior Administrator",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: female_icon,
  },
  {
    name: "Raynald Jean-Gilles",
    role: "CMA Asset Managers, Inc. Assistant Asset Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: male_icon,
  },
  {
    name: "D. Holt Lacey",
    role: "CMA Asset Managers, Inc. Facilities and Asset Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: male_icon,
  },
  {
    name: "Aja Latham",
    role: "CMA Asset Managers, Inc. Office Administrator",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: female_icon,
  },
  {
    name: "Kelly Tran",
    role: "Wellington Property Company Senior Operation Manager",
    about:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    image: female_icon,
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
            src={partners}
            alt="Company logo"
            width={1200}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div>
          <p>
            <em>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum
            </em>
          </p>
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
              <span>{member.about}</span>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
