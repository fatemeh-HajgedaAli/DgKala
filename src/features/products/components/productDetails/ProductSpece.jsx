// ویژگی‌ها (specs)
export default function ProductSpece({ product }) {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold mb-2">مشخصات محصول</h3>

      <ul className="space-y-2 text-sm">
        <li>شناسه: {product.id}</li>
        <li>عنوان: {product.title}</li>
        <li>قیمت: {product.price}</li>
      </ul>
    </div>
  );
}
