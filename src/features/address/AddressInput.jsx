import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import AddressModal from "./AddressModal";

export default function AddressInput({ address, setAddress }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="
    flex items-center gap-2 cursor-pointer
    border rounded-xl px-3 py-2 bg-gray-100
    hover:bg-gray-200 transition w-full
  "
      >
        <CiLocationOn className="text-red-600" />

        <span className="text-sm">
          {address ? address.address : "انتخاب موقعیت از نقشه"}
        </span>
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
