import { Outlet } from "react-router-dom";

import Navbar from "../features/navbar/Navbar";
import Footer from "../features/footer/Footer";

export default function MainLayout() {
  return (
    <>
      {/* NavBar */}
      <Navbar />

      <main>
        <Outlet />
      </main>
      {/* FOOTER */}
      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
