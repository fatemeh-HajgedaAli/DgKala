import RatingStars from "./RatingStars";

export default function ReviewHeader() {
  return (
    <div
      className="
        px-7
        py-6
        border-b
        border-slate-100
      "
    >
      <h2
        className="
          text-xl
          font-medium
          text-slate-900
        "
      >
        امتیاز و دیدگاه کاربران
      </h2>

      <div className="flex flex-col gap-4 mt-5">
        <div className="flex items-end gap-2">
          <span
            className="
              text-5xl
              font-black
              text-slate-900
            "
          >
            ۴.۷
          </span>

          <span
            className="
              text-sm
              text-slate-500
              mb-2
            "
          >
            از ۵
          </span>
        </div>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <RatingStars rating={4} />

          <p
            className="
              text-xs
              text-slate-500
            "
          >
            از مجموع ۳ امتیاز
          </p>
        </div>
      </div>

      <button
        className="
          mt-6
          border
          border-red-500
          text-red-500
          rounded-xl
          px-6
          py-3
          text-sm
          font-bold
          hover:bg-red-50
        "
      >
        شما هم درباره این کالا دیدگاه ثبت کنید
      </button>
    </div>
  );
}
