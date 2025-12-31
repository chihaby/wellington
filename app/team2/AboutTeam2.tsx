"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import styles from "../../styles/AboutTeam2.module.css";
import male_icon from "../../public/assets/svg/male.svg";
import female_icon from "../../public/assets/svg/female.svg";
import type { Metadata } from "next";

import maleIcon from "@/public/assets/svg/male.svg";
import femaleIcon from "@/public/assets/svg/female.svg";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Frontend Developer",
    bio: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,",
    image: maleIcon,
  },
  {
    name: "Maria Lopez",
    role: "UX Designer",
    bio: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    image: femaleIcon,
  },
  {
    name: "James Smith",
    role: "Backend Engineer",
    bio: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    image: maleIcon,
  },
];

export default function TeamAlt() {
  return (
    <>
      <Navbar />
      <main className={styles.teamContainer}>
        <header className={styles.header}>
          <h1>Meet the Team</h1>
          <p>People behind the product</p>
        </header>

        {teamMembers.map((member, index) => (
          <section
            key={index}
            className={`${styles.memberRow} ${
              index % 2 !== 0 ? styles.reverse : ""
            }`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={member.image}
                alt={member.name}
                width={220}
                height={220}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <h2>{member.name}</h2>
              <h4>{member.role}</h4>
              <p>{member.bio}</p>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
