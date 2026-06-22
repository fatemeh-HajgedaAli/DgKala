// DIGI logo
import smileLogo from "../../assets/logos/smile-favicon.webp";

// App icons
import BazarIcon from "../../assets/logos/footer-coffe-bazzar.svg";
import MiketIcon from "../../assets/logos/footer-myket.svg";
import SibIcon from "../../assets/logos/footer-sib-app.svg";
import more from "../../assets/logos/footer-More.svg";
// start
export default function FooterApp() {
  return (
    <div
      className="hidden lg:flex bg-[#444c74] py-6  px-2 mx-5
     rounded-xl mt-10 mb-5"
    >
      <div className="  flex items-center justify-between">
        {/* Right side text + logo */}
        <div className="flex items-center gap-3">
          <img src={smileLogo} alt="Digikala logo" className="w-10 h-10" />
          <p className="text-white text-2xl font-medium">
            دانلود اپلیکیشن دیجی‌کالا
          </p>
        </div>

        {/* App store icons */}
        <div className="flex items-center gap-3 ">
          <img
            src={BazarIcon}
            alt="Cafe Bazaar"
            className="h-10 cursor-pointer rounded-xl"
          />
          <img
            src={MiketIcon}
            alt="Myket"
            className="h-10 cursor-pointer rounded-xl"
          />
          <img
            src={SibIcon}
            alt="Sib App"
            className="h-10 cursor-pointer rounded-xl"
          />
          <img
            src={more}
            alt="More apps"
            className="h-10 cursor-pointer bg-white rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
// finish
