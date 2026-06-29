// features-part
export default function FeatureList({ product }) {
  return (
    <>
      <div className="p-5">
        <h3 className="font-bold mb-4">ویژگی‌ها</h3>

        <ul className="space-y-1 list-disc pr-5
         text-gray-500 text-sm">
          {product.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
