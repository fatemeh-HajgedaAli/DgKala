// details-feature
// start
export default function ProductSpece({ product }) {
  // jsx
  return (
    <div className="border-1 border-gray-300  rounded-sm p-5 shadow-sm mb-10 bg-gray-100">
      <h2 className="font-bold text-xl mb-5">مشخصات محصول</h2>

      <div className="space-y-3">
        {Object.entries(product.specifications).map(([key, value]) => (
          <div
            key={key}
            className="flex justify-between border-b  border-gray-300 pb-2"
          >
            <span>{key}</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
// finish