// footer brands
import { footerBrands } from "../../data/componentData/footer.data";
// start
export default function FooterBrands() {
  return (
    <div>
      <div className="hidden lg:grid grid-cols-9 bg-gray-200">
        {footerBrands.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-col
           items-center gap-2 border-1 border-gray-400"
          >
            <img
              src={brand.image}
              alt={brand.title}
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
// finish
