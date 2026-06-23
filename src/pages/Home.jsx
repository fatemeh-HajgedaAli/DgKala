import React from "react";

import Navbar from "../features/navbar/Navbar";

// story / header
import StoryHeader from "../features/story/StoryHeader";

// hero
import HeroSliderSm from "../features/hero/HeroSliderSm";
import HeroSliderLg from "../features/hero/HeroSliderLg";
import HeroStory from "../features/hero/HeroStory";

// offers
import AmazingCarousal from "../features/offers/AmazingCarousel";

// banners
import BannerDiscription from "../features/banners/bannerDescription/BannerDiscription";

// categories / brands
import ShopingByCategories from "../features/products/productCategories/ShopingByCategories";
import BrandsPart from "../features/brands/BrandsPart";

// posters
import PosterDescriptionTop from "../features/banners/posterDescription/PosterDescriptionTop";
import PosterDescriptionBottom from "../features/banners/posterDescription/PosterDescriptionBottom";

// products
import SuggestionProducts1 from "../features/products/suggestionProducts/SuggestionProducts1";
import MainBestSelling from "../features/products/bestSelling/MainBestSelling";
import SuggestionProducts2 from "../features/products/suggestionProducts/SuggestionProducts2";
import SelectedDiscountProducts from "../features/products/selectedDiscount/SelectedDiscountProducts";
import TrendingProducts from "../features/products/designTrendingProducts/TrendingProducts";

// reading
import Reading from "../features/readingPart/Reading";

// footer
import Footer from "../features/footer/Footer";
import TrendingProductsMobile from "../features/products/designTrendingProducts/TrendingProductsMobile";

export default function Home() {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* STORY HEADER (top row) */}
      <div className="px-3 mt-2">
        <StoryHeader />
      </div>

      {/* HERO SECTION */}
      <div className="relative">
        <HeroSliderSm />
        <HeroSliderLg />

        {/* HERO STORY OVERLAY  */}
        <div className="relative mt-2 z-10">
          <HeroStory />
        </div>
      </div>

      {/* OFFERS */}
      <div className="mt-4">
        <AmazingCarousal />
      </div>

      {/* BANNER */}
      <div className="mt-5 px-3">
        <BannerDiscription />
      </div>

      {/* CATEGORIES */}
      <div className="mt-5">
        <ShopingByCategories />
      </div>

      {/* POSTERS TOP */}
      <div className="mt-6 px-3">
        <PosterDescriptionTop />
      </div>

      {/* BRANDS */}
      <div className="mt-6">
        <BrandsPart />
      </div>

      {/* POSTERS BOTTOM */}
      <div className="mt-6 px-3">
        <PosterDescriptionBottom />
      </div>

      {/* PRODUCTS */}
      <div className="mt-6">
        <SuggestionProducts1 />
      </div>
      <div className="">
        <TrendingProductsMobile />
      </div>
      <div className="mt-6">
        <MainBestSelling />
      </div>

      <div className="mt-6">
        <SuggestionProducts2 />
      </div>
      {/* POSTERS */}
      <div className="flex lg:hidden mt-6 px-3">
        <PosterDescriptionTop />
      </div>

      <div className="mt-6">
        <SelectedDiscountProducts />
      </div>

      <div className="mt-6">
        <TrendingProducts />
      </div>

      {/* READING */}
      <div className="mt-6 px-3">
        <Reading />
      </div>

      {/* FOOTER */}
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
