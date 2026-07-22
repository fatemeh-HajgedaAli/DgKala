// LogIn
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// IMAGE
import logo from "../assets/logos/dg-name-logo.svg";
// icons
import { FaArrowRight } from "react-icons/fa";
// component
import FloatingInput from "../maincomponents/shared/FloatingInput";
// START
export default function Login() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const isValid = value.length >= 3;
  const handleContinue = () => {
    if (!value.trim()) return;

    // fake login (بدون backend)
    localStorage.setItem("user", JSON.stringify({ login: value }));

    // برو صفحه بعد (مثلاً home)
    navigate("/");
  };
  // JSX
  return (
    <>
      <div
        className="min-h-screen bg-white flex flex-col items-center 
      justify-center"
      >
        <div
          className="flex flex-col  w-[500px]  lg:border-1 
        border-gray-300 rounded-xl p-6"
        >
          <button
            onClick={() => navigate("/")}
            className="p-2 rounded-lg  cursor-pointer transition"
          >
            <FaArrowRight />
          </button>
          <div className="justify-items-center">
            <img src={logo} alt="digiLogo" className="w-30 object-contain  " />
          </div>
          <h1 className="text-start font-medium text-lg mt-10">
            ورود یا ثبت‌نام در دیجی‌کالا
          </h1>

          <p className="text-start text-sm text-gray-400 mt-2 mb-5 ">
            {" "}
            لطفا شماره موبایل یا ایمیل خود را وارد کنید.
          </p>
          {/* input */}
          <div className="">
            <FloatingInput value={value} setValue={setValue} />
          </div>
          {/* btn */}
          <button
            onClick={handleContinue}
            disabled={!value.trim()}
            className={`w-full mt-4 py-2 rounded-lg text-white
                  transition
    ${value.trim() ? "bg-rose-700" : "bg-rose-600 cursor-not-allowed"}
  `}
          >
            ورود به دیجی‌کالا
          </button>
        </div>
        <p className=" ml-20  text-gray-400 text-[1px] font-light">
          ورود شما به معنای پذیرش شرایط{" "}
          <span className="text-blue-800">
            دیجی‌کالا <span className="text-gray-400">و</span> قوانین
          </span>{" "}
          حریم‌خصوصی است
        </p>
      </div>
    </>
  );
}
