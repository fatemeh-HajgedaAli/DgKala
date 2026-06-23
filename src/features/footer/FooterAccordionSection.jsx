// FOOTER DROWPDOWN LIST
import { useState } from "react";
// ICONS
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
// START
export default function FooterAccordionSection({ title, links }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-3 mx-5">
      {/* TITLE */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex justify-between items-center text-right"
      >
        <h3 className="text-sm ">{title}</h3>

        <span className="text-xl">
          {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
      </button>

      {/* DROPDOWN */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <ul className="space-y-3">
          {links.map((link) => (
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
    </div>
  );
}
