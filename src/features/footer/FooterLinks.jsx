// footerLinks
import { footerLinks } from "../../data/footer.data";
import FooterWithUs from "./FooterWithUs";
// start
export default function FooterLinks() {
  return (
    <>
      <div className="flex felx-row justify-between">
        <div className="grid grid-cols-3 gap-2 mx-5">
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
        <FooterWithUs />
      </div>
    </>
  );
}
// finish
