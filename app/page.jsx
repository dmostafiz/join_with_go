"use client";

import { HomeSection } from "./ui";
export default function HomePage() {
  return (
    <>
      <HomeSection.Navbar />
      <HomeSection.Hero />
      <HomeSection.Essential />
      <HomeSection.VideoSection />
      <HomeSection.JoinForm />
      <HomeSection.Features />
      <HomeSection.Footer />
    </>
  );
}
