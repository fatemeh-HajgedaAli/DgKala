export default function ProductsGallary({ product }) {
  const images = Array.isArray(product.images) ? product.images : [];

  return (
    <div className="space-y-2">
      <img
        src={images[0]}
        alt={product.title}
        className="w-full h-[400px] object-contain"
      />

      <div className="flex gap-2">
        {images.map((img, i) => (
          <img key={i} src={img} className="w-16 h-16 object-contain border" />
        ))}
      </div>
    </div>
  );
}
