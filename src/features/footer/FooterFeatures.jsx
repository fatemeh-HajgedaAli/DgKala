// feature Part
import { div } from "framer-motion/client";
import { featureData } from "../../data/footer.data";
// start
export default function FooterFeatures() {
  return (
    <>
      <div className="hidden lg:flex flex-row  items-center justify-between">
        {featureData.map((items) => (
          <div key={items.id} className="mb-20 shrink-0 mx-5">
            <img src={items.image} alt={items.title} className="w-25 h-20" />
            <p className="text-[2px] text-gray-600 font-light">{items.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
// finish
