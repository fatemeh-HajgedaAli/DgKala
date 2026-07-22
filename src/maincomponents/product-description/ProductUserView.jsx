import { useEffect, useRef, useState } from "react";
import { reviews } from "./productView/views.data";
import ReviewHeader from "./productView/ReviewHeader";
import ReviewSort from "./productView/ReviewSort";
import ReviewCard from "./productView/ReviewCard";

export default function ProductUserView() {
  const [reviewData, setReviewData] = useState(reviews);
  const [showSideHeader, setShowSideHeader] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSideHeader(!entry.isIntersecting);
      },
      { rootMargin: "-100px 0px 0px 0px" },
    );

    const currentHeader = headerRef.current;
    if (currentHeader) {
      observer.observe(currentHeader);
    }

    return () => {
      if (currentHeader) observer.unobserve(currentHeader);
    };
  }, []);

  // مدیریت لایک با کسر دیس‌لایک قبلی در صورت وجود
  const handleLike = (targetId) => {
    setReviewData((prev) =>
      prev.map((review, index) => {
        const idMatches = review.id
          ? review.id === targetId
          : index === targetId;
        if (!idMatches) return review;

        const isLiked = review.liked;
        const isDisliked = review.disliked;

        return {
          ...review,
          liked: !isLiked,
          likes: isLiked ? review.likes - 1 : review.likes + 1,
          disliked: false,
          dislikes: isDisliked ? review.dislikes - 1 : review.dislikes,
        };
      }),
    );
  };

  // مدیریت دیس‌لایک با کسر لایک قبلی در صورت وجود
  const handleDislike = (targetId) => {
    setReviewData((prev) =>
      prev.map((review, index) => {
        const idMatches = review.id
          ? review.id === targetId
          : index === targetId;
        if (!idMatches) return review;

        const isLiked = review.liked;
        const isDisliked = review.disliked;

        return {
          ...review,
          disliked: !isDisliked,
          dislikes: isDisliked ? review.dislikes - 1 : review.dislikes + 1,
          liked: false,
          likes: isLiked ? review.likes - 1 : review.likes,
        };
      }),
    );
  };

  return (
    <section
      id="reviews"
      dir="rtl"
      className="border-t border-slate-200 mt-12 pt-6"
    >
      {/* Header اصلی */}
      <div ref={headerRef}>
        <ReviewHeader />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Header شناور سمت راست هنگام اسکرول */}
        {showSideHeader && (
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28">
              <ReviewHeader />
            </div>
          </aside>
        )}

        {/* لیست دیدگاه‌ها */}
        <div className={showSideHeader ? "lg:col-span-8" : "lg:col-span-12"}>
          <div className="sticky top-16 z-20 bg-white py-2 border-b border-gray-100">
            <ReviewSort count={reviewData.length} />
          </div>

          <div className="space-y-4 mt-4">
            {reviewData.map((review, index) => {
              const reviewKey = review.id || index;
              return (
                <ReviewCard
                  key={reviewKey}
                  review={review}
                  index={reviewKey}
                  onLike={() => handleLike(reviewKey)}
                  onDislike={() => handleDislike(reviewKey)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
