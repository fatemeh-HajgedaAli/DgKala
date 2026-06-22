// footerWithUs
// icons
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiAparat } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
// start
export default function FooterWithUs() {
  return (
    <>
      <div className="hidden lg:flex flex-col mx-5 gap-6 ">
        <p className="text-gray-600">همراه ما باشید!</p>
        <div className=" flex flex-row gap-5 text-2xl text-gray-400">
          <BsInstagram />
          <BsLinkedin />
          <SiAparat />
          <IoLogoWhatsapp />
          <BsTwitter />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <p className="text-gray-600 ">
            با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
          </p>
          <div className="flex gap-2 ">
            <input
              type="text"
              className="bg-gray-100 py-3 px-8 rounded-xl text-gray-500"
              placeholder="ایمیل شما"
            />
            <button
              type="button"
              className="bg-gray-300 p-3 rounded-xl text-white"
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
// finish
