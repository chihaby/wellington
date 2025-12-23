// app/about/page.tsx (server by default)
import type { Metadata } from "next";
import Team from "./AboutTeam";

export const metadata: Metadata = {
  title: "View our services - Bay Area Web Design",
  alternates: {
    canonical: "https://bayareawebdesign.net/services",
  },
};

export default function AboutContact() {
  return <Team />;
}
