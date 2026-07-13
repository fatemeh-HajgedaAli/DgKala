import { useEffect, useState } from "react";

export default function ProductGallery({ product }) {
  const images = product?.images || [];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [product]);

  if (!images.length) {
    return (
      <div className="border border-gray-100 rounded-2xl p-5 flex justify-center bg-white">
        <img
          src="/placeholder.png"
          alt="placeholder"
          className="h-[350px] object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* تصویر اصلی محصول */}
      <div className="w-full h-[400px] flex items-center justify-center p-2 bg-white select-none">
        <img
          src={selectedImage}
          alt={product.title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* تصاویر کوچک آلبوم */}
      {images.length > 1 && (
        <div className="flex flex-row-reverse justify-end w-full gap-3 mt-4 overflow-x-auto py-1">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`w-18 h-18 p-1 border rounded-xl flex items-center justify-center bg-white transition-all overflow-hidden shrink-0 cursor-pointer ${
                selectedImage === img
                  ? "border-gray-600 shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
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
      )}
    </div>
  );
}
