"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Wellington CMA",
  description: "Contact Wellington CMA",
  metadataBase: new URL("https://wellingtoncma.com"),
  alternates: {
    canonical: "/contact",
  },
};
const contact = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default contact;
