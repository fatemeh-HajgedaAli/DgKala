import { useState } from "react";
import MapPicker from "./MapPicker";
import { geocodeAddress } from "./services/geocode";
import { CiLocationOn } from "react-icons/ci";

export default function AddressModal({ open, onClose, onSelect }) {
  const [tab, setTab] = useState("map");
  const [search, setSearch] = useState("");

  const savedAddresses = [
    { id: 1, address: "خ. بلال روبه روی پارک شادمان پلاک 151" },
  ];

  if (!open) return null;

  const handleSearch = async () => {
    const res = await geocodeAddress(search);
    if (!res) return;

    onSelect({
      lat: res.lat,
      lng: res.lng,
      address: res.displayName,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50">
      {/* MODAL */}
      <div className="w-full sm:w-[620px] bg-white sm:rounded-2xl rounded-t-2xl flex flex-col max-h-[90vh] overflow-hidden shadow-xl">
        {/* HEADER */}
        <div className="p-4 border-b flex justify-between items-center">
          <span className="font-bold text-sm sm:text-base">انتخاب موقعیت</span>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button>
        </div>

        {/* TABS */}
        <div className="grid grid-rows-2  text-sm ">
          <button
            onClick={() => setTab("map")}
            className={`flex-1 py-3 flex items-center justify-start pr-5  gap-2 transition mx-5
        lg:mx-2       my-2 sm:w-[600px] border-2 border-dashed rounded-xl
              ${tab === "map" ? "text-orange-500" : "text-gray-300"}`}
          >
            <CiLocationOn className="text-lg" />
            انتخاب موقعیت از نقشه
          </button>

          <button
            onClick={() => setTab("saved")}
            className={`flex-1 py-3 flex justify-start items-center lg:pr-8 sm:pr-12 transition
              ${
                tab === "saved"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-800"
              }`}
          >
            آدرس‌ها
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-4 overflow-y-auto flex-1">
          {/* MAP TAB */}
          {tab === "map" && (
            <>
              {/* SEARCH */}
              <div className="flex gap-2 mb-4">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="جستجوی آدرس..."
                  className="flex-1 border rounded-xl px-3 py-2 text-sm outline-none focus:border-orange-400"
                />

                <button
                  onClick={handleSearch}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded-xl text-sm"
                >
                  جستجو
                </button>
              </div>

              {/* MAP BOX (dashed style like DigiKala) */}
              <div
                className="border-2 border-dashed border-gray-300 
              rounded-2xl p-3 bg-gray-50"
              >
                <MapPicker onSelect={onSelect} />
              </div>
            </>
          )}

          {/* SAVED TAB */}
          {tab === "saved" && (
            <div className="space-y-3">
              {savedAddresses.map((a) => (
                <div
                  key={a.id}
                  onClick={() => {
                    onSelect(a);
                    onClose();
                  }}
                  className="
                    border rounded-xl p-3 cursor-pointer
                    hover:bg-gray-50 transition
                  "
                >
                  {a.address}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
