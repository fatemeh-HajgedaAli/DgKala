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

// suggestionsCard
import SuggestionProducts1 from "../features/products/suggestionProducts/SuggestionProducts1";
import SuggestionProducts2 from "../features/products/suggestionProducts/SuggestionProducts2";
// posterDescription
import PosterDescriptionBottom from "../features/banners/posterDescription/PosterDescriptionBottom";
import PosterDescriptionTop from "../features/banners/posterDescription/PosterDescriptionTop";
// bestSelling
import MainBestSelling from "../features/products/bestSelling/MainBestSelling";
import SelectedDiscountProducts from "../features/products/selectedDiscount/SelectedDiscountProducts";

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
      <PosterDescriptionTop />
      {/* brandsPart */}
      <BrandsPart />
      {/* posterDescription */}
      <PosterDescriptionBottom />
      {/* suggestionProducts */}
      <SuggestionProducts1 />
      {/* bestSelling */}
      <MainBestSelling />
      {/* suggestionProducts */}
      <SuggestionProducts2 />
      {/* SelectedDiscountProducts */}
      <SelectedDiscountProducts/>
    </>
  );
}
