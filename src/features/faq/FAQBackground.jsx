// src/features/faq/FAQBackground.jsx
import bestSellingPattern from "../../assets/logos/deal-pattern-amazing.svg";

export default function FAQBackground({ children }) {
  return (
    <div
      className="relative w-full h-[300px]
    bg-gradient-to-b
    from-gray-400/60
    to-white overflow-hidden"
    >
      <div
        className="absolute inset-0 z-40 pointer-events-none 
        bg-repeat-x bg-top "
        style={{
          backgroundImage: `url(${bestSellingPattern})`,backgroundSize:"contain"
        }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
