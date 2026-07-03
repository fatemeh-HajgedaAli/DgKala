// boxItems pictures
import pic1 from "../../assets/images/boxMenu/services.png";
import pic2 from "../../assets/images/boxMenu/DigiKala.png";
import pic3 from "../../assets/images/boxMenu/Gold.png";
import pic4 from "../../assets/images/boxMenu/style.png";
import pic5 from "../../assets/images/boxMenu/market.png";
import pic6 from "../../assets/images/boxMenu/cart.png";
// menuItems icons
import { CgMenu } from "react-icons/cg";
import { AiOutlineGold } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaFireFlameCurved } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
// bottomMenu icons
import { RiHome2Line, RiHome2Fill } from "react-icons/ri";
import { BiCategoryAlt, BiSolidCategoryAlt } from "react-icons/bi";
import { BsCart, BsCartFill } from "react-icons/bs";
import { PiTriangleLight, PiTriangleFill } from "react-icons/pi";
import { IoPersonOutline, IoPerson } from "react-icons/io5";

// box menu
export const boxItems = [
  { id: 1, title: "سرویس ها", image: pic1 },
  { id: 2, title: "دیجی کالا", image: pic2 },
  { id: 3, title: "طلا و نقره", image: pic3 },
  { id: 4, title: "استایل", image: pic4 },
  { id: 5, title: "سوپرمارکت", image: pic5 },
  { id: 6, title: "اعتبار خرید", image: pic6 },
];
// menu
export const menuItems = [
  {
    id: 1,
    icon: CgMenu,
    title: "دسته‌بندی کالاها",
    path: "/products",
  },
  {
    id: 2,
    icon: BiSolidOffer,
    title: "شگفت انگیزها",
    path: "/offers",
    divider: true,
  },
  {
    id: 3,
    icon: BsFillBasket2Fill,
    title: "سوپرمارکت",
    path: "/supermarket",
  },
  {
    id: 4,
    icon: AiOutlineGold,
    title: "طلا و نقره دیجیتال",
    path: "https://www.digikala.com/wealth/landing/",
  },
  {
    id: 5,
    icon: FaFireFlameCurved,
    title: "پرفروش ترین ها",
    path: "/products",
  },
  {
    id: 6,
    title: "سوالی دارید؟",
    path: "/categories",
    divider: true,
  },
  {
    id: 7,
    title: "در دیجی کالا بفروشید!",
    path: "https://www.digikala.com/landings/seller-introduction/",
  },
];
// bottom menu
export const bottemData = [
  {
    id: 1,
    icon: RiHome2Line,
    activeIcon: RiHome2Fill,
    title: "خانه",
    path: "/Home",
  },
  {
    id: 2,
    icon: BiCategoryAlt,
    activeIcon: BiSolidCategoryAlt,
    title: "دسته بندی",
    path: "/categories",
    divider: true,
  },
  {
    id: 3,
    icon: BsCart,
    activeIcon: BsCartFill,
    title: "سبد خرید",
    path: "/Cart",
  },
  {
    id: 4,
    icon: PiTriangleLight,
    activeIcon: PiTriangleFill,
    title: "مگنت",
    path: "/categories",
  },
  {
    id: 5,
    icon: IoPersonOutline,
    activeIcon: IoPerson,
    title: "دیجی کالای من",
    path: "/categories",
  },
];
