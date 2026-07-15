export default function ReviewSort({ count }) {
  return (
    <div
      className="
        px-7
        py-5
        border-b
        border-slate-100
      "
    >
      <div
        className="
          flex
          items-center
          gap-5
          text-sm
        "
      >
        <span className="font-bold text-slate-800">مرتب سازی:</span>

        <button
          className="
            text-red-500
            font-bold
          "
        >
          جدیدترین
        </button>

        <button
          className="
            text-slate-500
            hover:text-slate-900
          "
        >
          مفیدترین
        </button>
      </div>

      <div
        className="
          mt-5
          text-sm
          font-bold
          text-slate-700
        "
      >
        {count} دیدگاه
      </div>
    </div>
  );
}
