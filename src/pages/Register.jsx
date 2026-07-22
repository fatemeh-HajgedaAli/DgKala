// Register.jsx

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/logos/dg-name-logo.svg";
import FloatingInput from "../maincomponents/shared/FloatingInput";

export default function Register() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const isValid = value.trim().length >= 3;

  const handleRegister = () => {
    if (!isValid) return;

    // fake register
    localStorage.setItem(
      "user",
      JSON.stringify({ login: value, isRegistered: true }),
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="flex flex-col w-[500px] lg:border border-gray-300 rounded-xl p-6">
        {/* back button */}
        <button
          onClick={() => navigate("/login")}
          className="p-2 rounded-lg cursor-pointer transition w-fit"
        >
          <FaArrowRight />
        </button>

        {/* logo */}
        <div className="justify-items-center mt-2">
          <img src={logo} alt="digiLogo" className="w-30 object-contain" />
        </div>

        {/* title */}
        <h1 className="text-start font-medium text-lg mt-10">
          ایجاد حساب کاربری
        </h1>

        <p className="text-start text-sm text-gray-400 mt-2 mb-5">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید.
        </p>

        {/* input */}
        <FloatingInput value={value} setValue={setValue} />

        {/* button */}
        <button
          onClick={handleRegister}
          disabled={!isValid}
          className={`w-full mt-4 py-2 rounded-lg text-white transition
            ${isValid ? "bg-green-600" : "bg-gray-300 cursor-not-allowed"}
          `}
        >
          ایجاد حساب
        </button>

        {/* login link */}
        <p className="text-center text-sm mt-4 text-gray-500">
          حساب داری؟{" "}
          <Link to="/login" className="text-red-600">
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
}
