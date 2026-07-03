import React from "react";
import { useSearch } from "../context/SearchContext";

// navbar
import Navbar from "../features/navbar/Navbar";

// story
import StoryHeader from "../features/story/StoryHeader";
import StoryViewer from "../features/story/StoryViewer";

// hero
import HeroSliderSm from "../features/hero/HeroSliderSm";
import HeroSliderLg from "../features/hero/HeroSliderLg";
import HeroStory from "../features/HeroStory/HeroStory";

// offers
import AmazingCarousal from "../features/offers/AmazingCarousel";

// banners
import BannerDiscription from "../features/banners/bannerDescription/BannerDiscription";

// categories / brands
import ShopingByCategories from "../features/productsSections/productCategories/ShopingByCategories";
import BrandsPart from "../features/brands/BrandsPart";

// posters
import PosterDescriptionTop from "../features/banners/posterDescription/PosterDescriptionTop";
import PosterDescriptionBottom from "../features/banners/posterDescription/PosterDescriptionBottom";

// products
import SuggestionProducts1 from "../features/productsSections/suggestionProducts/SuggestionProducts1";
import MainBestSelling from "../features/productsSections/bestSelling/MainBestSelling";
import SuggestionProducts2 from "../features/productsSections/suggestionProducts/SuggestionProducts2";
import SelectedDiscountProducts from "../features/productsSections/selectedDiscount/SelectedDiscountProducts";
import TrendingProducts from "../features/productsSections/designTrendingProducts/TrendingProducts";
import TrendingProductsMobile from "../features/productsSections/designTrendingProducts/TrendingProductsMobile";

// reading
import Reading from "../features/readingPart/Reading";

// footer
import Footer from "../features/footer/Footer";

export default function Home() {
  const { search } = useSearch();

  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* <Navbar /> */}

      {/* STORIES */}
      <section className="px-3 mt-2">
        <StoryHeader />
        <StoryViewer />
      </section>

      {/* HERO */}
      <section className="relative">
        <HeroSliderSm />
        <HeroSliderLg />
      </section>
      {/* overlay story */}
      <section className="mt-1">
        <HeroStory />
      </section>

      {/* OFFERS */}
      <section>
        <AmazingCarousal />
      </section>

      {/* BANNER */}
      <section className="mt-5 pr-10">
        <BannerDiscription />
      </section>

      {/* CATEGORIES */}
      <section className="mt-5">
        <ShopingByCategories />
      </section>

      {/* POSTERS TOP */}
      <section className="mt-6 px-3">
        <PosterDescriptionTop />
      </section>

      {/* BRANDS */}
      <section className="mt-6">
        <BrandsPart />
      </section>

      {/* POSTERS BOTTOM */}
      <section className="mt-6 px-3">
        <PosterDescriptionBottom />
      </section>

      {/* PRODUCTS SECTION 1 */}
      <section className="mt-6">
        <SuggestionProducts1 />
      </section>

      {/* TRENDING MOBILE */}
      <section className="lg:hidden">
        <TrendingProductsMobile />
      </section>

      {/* BEST SELLING */}
      <section className="mt-6">
        <MainBestSelling />
      </section>

      {/* PRODUCTS SECTION 2 */}
      <section className="mt-6">
        <SuggestionProducts2 />
      </section>

      {/* POSTER (mobile only) */}
      <section className="lg:hidden mt-6 px-3">
        <PosterDescriptionTop />
      </section>

      {/* DISCOUNT */}
      <section className="mt-6">
        <SelectedDiscountProducts />
      </section>

      {/* TRENDING DESKTOP */}
      <section className="mt-6 hidden lg:block">
        <TrendingProducts />
      </section>

      {/* READING */}
      <section className="mt-6 px-3">
        <Reading />
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
