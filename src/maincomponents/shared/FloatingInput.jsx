import { useState } from "react";

export default function FloatingInput({ value, setValue }) {
  const [focus, setFocus] = useState(false);

  const active = focus || value.length > 0;

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className="w-full border rounded-lg p-3 pt-5 outline-none focus:border-gray-600 focus:ring-0"
      />

      <label
        className={`
          absolute right-3 transition-all duration-200 pointer-events-none
          ${
            active
              ? "top-1 text-xs text-gray-600 bg-white px-1"
              : "top-3.5 text-gray-400"
          }
        `}
      >
        شماره موبایل یا پست الکترونیک
      </label>
    </div>
  );
}
