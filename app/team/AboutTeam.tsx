"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import styles from "../../styles/AboutTeam.module.css";
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
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Maria Lopez",
    role: "UX Designer",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "James Smith",
    role: "Backend Engineer",
    image: "https://via.placeholder.com/300",
  },
  {
    name: "Sarah Kim",
    role: "Product Manager",
    image: "https://via.placeholder.com/300",
  },
];

export default function Team() {
  return (
    <>
      <Navbar />
      <main className={styles.team_container}>
        <header className={styles.team_container}>
          <h1>Meet the Team</h1>
          <p>The people who make everything possible</p>
        </header>

        <section className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.image}
                alt={member.name}
                className="team-image"
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
