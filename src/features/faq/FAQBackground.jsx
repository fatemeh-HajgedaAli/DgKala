// src/features/faq/FAQBackground.jsx
import bestSellingPattern from "../../assets/logos/deal-pattern-amazing.svg";

export default function FAQBackground({ children }) {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-t
    from-white to-gray-300/90 overflow-hidden">
      {" "}
      <div
        className="absolute inset-0 z-40 pointer-events-none bg-repeat-x bg-top "
        style={{
          backgroundImage: `url(${bestSellingPattern})`,
        }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
