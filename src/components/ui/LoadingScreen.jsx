// loading-part
import SmileLogo from "../../assets/logos/smile-favicon.webp";

export default function LoadingScreen({ text = "در حال بارگذاری محصول" }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* logo container */}
      <div className="flex flex-col items-center gap-3">
        <img
          src={SmileLogo}
          alt="loading"
          className="w-20 h-20 animate-pulse"
        />

        {/* text */}
        <p className="text-gray-600 text-sm font-medium animate-pulse">
          {text}
        </p>

        {/* dots */}
        <div className="flex gap-1 mt-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
}
