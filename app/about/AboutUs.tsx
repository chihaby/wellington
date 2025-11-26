"use client";
import Navbar from "../../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import CardBody from "react-bootstrap/CardBody";
import Footer from "../../components/Footer";
import Rad from "../../public/img/Rad.jpg";
import Image from "next/image";
import styles from "../../styles/AboutPage.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Bay Area Web Design",
  description: "Learn more about Rad, a web developer and UI/UX specialist.",
  metadataBase: new URL("https://bayareawebdesign.net"),
  alternates: {
    canonical: "/about",
  },
};

export default function about() {
  return (
    <>
      <Navbar />
      <h1>About</h1>
      <Footer />
    </>
  );
}
