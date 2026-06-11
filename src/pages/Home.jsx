import React from "react";
import TopNavbar from "../components/navbarPart/TopNavbar";
import StoryHeader from "../components/header/StoryHeader";

import HeroSliderSm from "../components/heroSections/HeroSliderSm";
import HeroSliderLg from "../components/heroSections/HeroSliderLg";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <StoryHeader />
      <HeroSliderLg />
      <HeroSliderSm />
    </>
  );
}
