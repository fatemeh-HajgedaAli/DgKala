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
import TrendingProducts from "../features/products/designTrendingProducts/TrendingProducts";

// start
export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* story-Part */}
      <StoryHeader />
      {/* hero */}
      <HeroSliderSm />
      <HeroSliderLg />
      <HeroStory />
      {/* offers */}
      <AmazingCarousal />
      {/* description-Banner */}
      <BannerDiscription />
      {/*Shoping-By-Categories */}
      <ShopingByCategories />
      {/* poster-Description */}
      <PosterDescriptionTop />
      {/* brands-Part */}
      <BrandsPart />
      {/* poster-Description */}
      <PosterDescriptionBottom />
      {/* suggestion-Products */}
      <SuggestionProducts1 />
      {/* best-Selling */}
      <MainBestSelling />
      {/* suggestion-Products */}
      <SuggestionProducts2 />
      {/* Selected-Discount-Products */}
      <SelectedDiscountProducts />
      {/* trending-products */}
      <TrendingProducts />
    </>
  );
}
