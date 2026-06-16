import React from "react";
import Navbar from "../features/navbar/Navbar";
import StoryHeader from "../features/story/StoryHeader";
import HeroSliderSm from "../features/hero/HeroSliderSm";
import HeroSliderLg from "../features/hero/HeroSliderLg";
import HeroStory from "../features/hero/HeroStory";
import AmazingCarousal from "../features/offers/AmazingCarousel";
import BannerDiscription from "../features/products/BannerDiscription";


export default function Home() {
  return (
    <>
      <Navbar />
      <StoryHeader />
      {/* hero */}
      <HeroSliderSm />
      <HeroSliderLg />
      <HeroStory />
      {/* offers */}
      <AmazingCarousal />
      {/* descriptionBanner */}
  <BannerDiscription/>
    </>
  );
}
