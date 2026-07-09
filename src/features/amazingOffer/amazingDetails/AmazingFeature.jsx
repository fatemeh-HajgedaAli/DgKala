// START
export default function AmazingFeature({ name, value }) {
  return (
    <div className="flex text-xs leading-6 py-1">
      <span className="text-gray-400 min-w-[120px]">{name}</span>
      <span className="text-gray-700 font-medium">{value}</span>
    </div>
  );
}
// FINISH
