import { useEffect, useRef, useState } from "react";

import { reviews } from "./productView/views.data";

import ReviewHeader from "./productView/ReviewHeader";
import ReviewSort from "./productView/ReviewSort";
import ReviewCard from "./productView/ReviewCard";
// start
export default function ProductUserView() {
  const [reviewData, setReviewData] = useState(reviews);
  const [showSideHeader, setShowSideHeader] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSideHeader(!entry.isIntersecting);
      },
      {
        rootMargin: "-100px 0px 0px 0px",
      },
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLike = (index) => {
    setReviewData((prev) =>
      prev.map((review, i) => {
        if (i !== index) return review;

        return {
          ...review,
          liked: !review.liked,
          likes: review.liked ? review.likes - 1 : review.likes + 1,
          disliked: false,
        };
      }),
    );
  };

  const handleDislike = (index) => {
    setReviewData((prev) =>
      prev.map((review, i) => {
        if (i !== index) return review;

        return {
          ...review,
          disliked: !review.disliked,
          dislikes: review.disliked ? review.dislikes - 1 : review.dislikes + 1,
          liked: false,
        };
      }),
    );
  };

  return (
    <section
      id="reviews"
      dir="rtl"
      className="
        border-t
        border-slate-200
        mt-12
      "
    >
      {/* Header */}

      <div ref={headerRef}>
        <ReviewHeader />
      </div>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-8
        "
      >
        {/* Left header after scroll */}

        <aside
          className={`
            lg:col-span-4
            ${showSideHeader ? "block" : "hidden"}
          `}
        >
          <div
            className="
              lg:sticky
              lg:top-28
            "
          >
            <ReviewHeader />
          </div>
        </aside>

        {/* Reviews */}

        <div
          className={`
            ${showSideHeader ? "lg:col-span-8" : "lg:col-span-12"}
          `}
        >
          <div
            className="
              sticky
              top-18
              z-20
              bg-white
            "
          >
            <ReviewSort count={reviewData.length} />
          </div>

          {reviewData.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
              index={index}
              onLike={handleLike}
              onDislike={handleDislike}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
