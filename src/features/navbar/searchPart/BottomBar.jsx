import NavbarMenu from "../NavbarMenu";
import { useAddress } from "../../../context/AddressContext";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import AddressModal from "../../address/AddressModal";

export default function BottomBar() {
  const { address, setAddress } = useAddress();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex lg:flex items-center justify-between  sm:px-8 ">
        <NavbarMenu />

        <div
          onClick={() => setOpen(true)}
          className="
            cursor-pointer hidden lg:flex items-center gap-2 mb-2 -mt-2
            text-orange-600 border border-orange-400
            rounded-full  px-4 py-1.5 bg-orange-100
            text-xs sm:text-sm
          "
        >
          <CiLocationOn />
          <span>{address ? address.address : "انتخاب آدرس"}</span>
        </div>
      </div>

      <AddressModal
        open={open}
        onClose={() => setOpen(false)}
        onSelect={(data) => {
          setAddress(data);
          setOpen(false);
        }}
      />
    </>
  );
}
