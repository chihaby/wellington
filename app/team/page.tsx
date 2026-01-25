// app/about/page.tsx (server by default)
import type { Metadata } from "next";
import Team from "./AboutTeam";

export const metadata: Metadata = {
  title: "View our services - Wellington CMA Services",
  alternates: {
    canonical: "https://wellingtoncma.com/services",
  },
};

export default function AboutContact() {
  return <Team />;
}
