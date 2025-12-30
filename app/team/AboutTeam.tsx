"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import styles from "../../styles/AboutTeam.module.css";
import male_icon from "../../public/assets/svg/male.svg";
import female_icon from "../../public/assets/svg/female.svg";
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
    name: "Alex Johnson",
    role: "Frontend Developer",
    image: male_icon,
  },
  {
    name: "Maria Lopez",
    role: "UX Designer",
    image: female_icon,
  },
  {
    name: "James Smith",
    role: "Backend Engineer",
    image: male_icon,
  },
  {
    name: "Sarah Kim",
    role: "Product Manager",
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

        <section className={styles.team_grid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.team_card}>
              <Image
                src={member.image}
                alt={member.name}
                className={styles.team_image}
                width={100}
                height={200}
              />
              <h3>{member.name}</h3>
              <span>{member.role}</span>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
