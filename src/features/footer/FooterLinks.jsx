// footer-Links
import { footerLinks } from "../../data/componentData/footer.data";
import FooterWithUs from "./FooterWithUs";
import FooterAccordionSection from "./FooterAccordionSection";

export default function FooterLinks() {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6">
      {/* MOBILE: Accordion */}
      <div className="lg:hidden w-full">
        {footerLinks.map((section) => (
          <FooterAccordionSection
            key={section.id}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:grid grid-cols-3 gap-8 mx-5 flex-1">
        {footerLinks.map((section) => (
          <div key={section.id}>
            <h3 className="mb-4 text-lg font-bold">{section.title}</h3>

            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* SOCIAL / EXTRA */}
      <FooterWithUs />
    </div>
  );
}
