import React from "react";
import FooterContact from "./FooterContact";
import FooterFeatures from "./FooterFeatures";
import FooterLinks from "./FooterLinks";
import FooterApp from "./FooterApp";
import FooterAbout from "./FooterAbout";
import FooterBrands from "./FooterBrands";
import DigiApplication from "./DigiApplication";

export default function Footer() {
  return (
    <>
      <footer className="relative hidden md:block w-full border-t-1 border-gray-200  mt-20 ">
        {/* contactUs */}
        <FooterContact />
        {/* digiApplication(phone) */}
        <DigiApplication />
        {/* features */}
        <FooterFeatures />
        {/* links */}
        <FooterLinks />
        {/* apps */}
        <FooterApp />
        {/* aboutUs */}
        <FooterAbout />
        {/* brands */}
        <FooterBrands />
      </footer>
    </>
  );
}
