// guarantee
import { GoShieldCheck } from "react-icons/go";
// start
export default function Guarantee({ guarantee }) {
  if (!guarantee) return null;
  // jsx
  return (
    <div className="flex items-center gap-3 text-xs text-gray-600">
      <GoShieldCheck className="text-lg" />
      <span>{guarantee}</span>
    </div>
  );
}
