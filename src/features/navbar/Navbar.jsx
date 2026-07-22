// main-NavBar-part
import { useLocation } from "react-router-dom";
// parts
import TopBannerPic from "/topNavbar.gif";
import SearchPart from "./searchPart/SearchPart";
import MobileBottomNavbar from "./MobileBottomNavbar";
// start
export default function Navbar() {
  const location = useLocation();
  const isQuestionsPage = location.pathname === "/questions";
  // jsx
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top banner */}
      {!isQuestionsPage && (
        <div className="w-full">
          <img
            src={TopBannerPic}
            alt="Top Banner"
            className="w-full object-cover"
          />
        </div>
      )}

      {/* Search */}
      <div className="w-full">
        <SearchPart placeholder="جستجو" />
      </div>

      {/* Mobile Bottom Navbar */}
      <MobileBottomNavbar />
    </header>
  );
}
