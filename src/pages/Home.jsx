import React from "react";
import Navbar from "../features/navbar/Navbar";
import StoryHeader from "../features/story/StoryHeader";
      {/* hero */}
import HeroSliderSm from "../features/hero/HeroSliderSm";
import HeroSliderLg from "../features/hero/HeroSliderLg";
import HeroStory from "../features/hero/HeroStory";
 {/* offers */}
import AmazingCarousal from "../features/offers/AmazingCarousel";
import BannerDiscription from "../features/products/BannerDiscription";
{/* brandsPart */}
import BrandsPart from "../features/brands/BrandsPart";
 {/*ShopingByCategories */}
import ShopingByCategories from "../features/products/ShopingByCategories";

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
      <BannerDiscription />
      {/*ShopingByCategories */}
      <ShopingByCategories/>
      {/* brandsPart */}
      <BrandsPart/>

    </>
  );
}
