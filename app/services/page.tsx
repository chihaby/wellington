// app/about/page.tsx (server by default)
import type { Metadata } from "next";
import Services from "./AboutServices";

export const metadata: Metadata = {
  title: "View our services - Wellington CMA property, parking, and event management",
  alternates: {
    canonical: "https://wellingtoncma.com/services",
  },
};

export default function AboutContact() {
  return <Services />;
}
