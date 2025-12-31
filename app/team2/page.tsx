import type { Metadata } from "next";
import Team2 from "./AboutTeam2";

export const metadata: Metadata = {
  title: "View our services - Bay Area Web Design",
  alternates: {
    canonical: "https://bayareawebdesign.net/services",
  },
};

export default function AboutContact() {
  return <Team2 />;
}
