import { useState } from "react";

export default function MobileGallary({ product }) {
  const images = product?.images || [];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      {/* Main Image */}
      <div className="flex items-center justify-center h-[400px]">
        <img
          src={selectedImage}
          alt={product.title}
          className="max-h-full object-contain transition-all duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-6 overflow-x-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-20 rounded-xl border-2 overflow-hidden transition ${
              selectedImage === img
                ? "border-red-500"
                : "border-gray-200 hover:border-gray-400"
            }`}
          >
            <img
              src={img}
              alt={`${product.title}-${index}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
