// Acess-To-Offer
import earlyAccessTeasing from "../../../../assets/logos/earlyAccessTeasing.svg";
import earlyAccessPatternPlus from "../../../../assets/logos/earlyAccessPatternPlus.svg";
import earlyAccessPatternPlusMobile from "../../../../assets/logos/earlyAccessPatternPlusMobile.svg";

import { PiStarFourBold } from "react-icons/pi";
import AmazingOfferTimer from "../AmazingOfferTimer";

export default function AccessToOffer() {
  return (
    <section className="mx-[70px] mt-8   ">
      <div className="relative  overflow-hidden rounded-2xl bg-gradient-to-r from-gray-100 to-fuchsia-100">
        {/* Pattern Right */}
        <div
          className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
          style={{
            backgroundImage: `url(${earlyAccessPatternPlus})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right center",
            backgroundSize: "contain",
          }}
        />

        {/* Pattern Left */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
          style={{
            backgroundImage: `url(${earlyAccessPatternPlusMobile})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            backgroundSize: "contain",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-6">
          {/* IMAGE → LEFT in desktop */}
          <img
            src={earlyAccessTeasing}
            alt="Plus"
            className="
              order-2 lg:order-1
              w-64 lg:w-96 object-contain
            "
          />

          {/* TEXT (RIGHT side in desktop) */}
          <div className="flex flex-col items-center lg:items-start gap-4 order-1 lg:order-2">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-fuchsia-800">
              <PiStarFourBold className="text-fuchsia-600" />
              ویژه اعضای پلاس
            </h2>

            <AmazingOfferTimer duration={13 * 60 * 60 * 1000} />
          </div>
        </div>
      </div>
    </section>
  );
}
