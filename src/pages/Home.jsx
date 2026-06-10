import React from "react";
import TopNavbar from "../components/navbarPart/TopNavbar";
import StoryHeader from "../components/header/StoryHeader";
import HeroSlider from "../components/heroSections/HeroSliderLg";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <StoryHeader />
      <HeroSlider />
    </>
  );
}
