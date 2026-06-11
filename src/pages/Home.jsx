import React from "react";
import TopNavbar from "../components/navbarPart/TopNavbar";
import StoryHeader from "../components/header/StoryHeader";
// heroPart
import HeroSliderSm from "../components/heroSections/HeroSliderSm";
import HeroSliderLg from "../components/heroSections/HeroSliderLg";
import HeroStory from "../components/heroSections/HeroStory";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <StoryHeader />
      {/* heroSection */}
      <HeroSliderLg />
      <HeroSliderSm />
      <HeroStory/>
{/* mainPart */}
    </>
  );
}
