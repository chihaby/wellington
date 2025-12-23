"use client";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer.js";
import styles from "../../styles/ServicePage.module.css";
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

const Team = () => {
  return (
    <>
      <Navbar />
      <h1>Team</h1>
      <Footer />
    </>
  );
};

export default Team;
