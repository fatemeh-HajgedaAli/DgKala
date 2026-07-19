// src/pages/FAQPage.jsx
import { useState } from "react";
import FAQBackground from "../features/faq/FAQBackground"; // امپورت کامپوننت پس‌زمینه
import FAQSearch from "../features/faq/FAQSearch";
import FAQCategories from "../features/faq/FAQCategories";
import FAQList from "../features/faq/FAQList";
import Footer from "../features/footer/Footer";
import { faqData } from "../features/faq/faq.data";
import NavbarMenu from "../features/navbar/NavbarMenu";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() !== "") setSelectedCategory(null);
  };

  const filteredFaqs = faqData.filter((faq) => {
    const cleanQuery = searchQuery.trim();
    if (!cleanQuery) {
      return selectedCategory ? faq.catId === selectedCategory : true;
    }
    return (
      faq.question
        .replace(/\s+/g, " ")
        .includes(cleanQuery.replace(/\s+/g, " ")) ||
      faq.answer.replace(/\s+/g, " ").includes(cleanQuery.replace(/\s+/g, " "))
    );
  });

  return (
    <>
      <NavbarMenu/>
      <FAQBackground>
        <FAQSearch onSearch={handleSearch} />
        <FAQCategories
          activeCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <FAQList faqs={filteredFaqs} />
        <Footer />
      </FAQBackground>
    </>
  );
}
