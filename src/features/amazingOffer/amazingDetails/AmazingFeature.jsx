// START
export default function AmazingFeature({ name, value }) {
  const displayValue =
    value && typeof value === "object"
      ? (value.value ?? value.name ?? "")
      : value;

  return (
    <div className="flex text-xs leading-6 py-1">
      <span className="text-gray-400 min-w-[120px]">{name}</span>

      <span className="text-gray-700 font-medium">{displayValue}</span>
    </div>
  );
}
// FINISH
