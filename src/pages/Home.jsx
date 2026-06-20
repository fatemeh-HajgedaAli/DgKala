import React from "react";
import Navbar from "../features/navbar/Navbar";
import StoryHeader from "../features/story/StoryHeader";
//  hero
import HeroSliderSm from "../features/hero/HeroSliderSm";
import HeroSliderLg from "../features/hero/HeroSliderLg";
import HeroStory from "../features/hero/HeroStory";
// offers
import AmazingCarousal from "../features/offers/AmazingCarousel";
// banners
import BannerDiscription from "../features/banners/bannerDescription/BannerDiscription";
//  brandsPart
import BrandsPart from "../features/brands/BrandsPart";
// ShopingByCategories
import ShopingByCategories from "../features/products/productCategories/ShopingByCategories";
// banners
import MainSuggestionProducts from "../features/products/suggestionProducts/MainSuggestionProducts";

// posterDescription
import PosterDescriptionBottom from "../features/banners/posterDescription/PosterDescriptionBottom";

import PosterDescriptionTop from "../features/banners/posterDescription/PosterDescriptionTop";



// start
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
      <ShopingByCategories />
      {/* posterDescription */}
     <PosterDescriptionTop/>
    
      {/* brandsPart */}
      <BrandsPart />
         {/* posterDescription */}
     <PosterDescriptionBottom/>
    
        {/* suggestionProducts */}
      <MainSuggestionProducts />
    </>
  );
}
