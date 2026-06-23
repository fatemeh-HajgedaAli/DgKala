import { useEffect, useState } from "react";
import { getArticles } from "../../components/services/newsApi";
import ReadingCard from "./ReadingCards";

export default function ReadingPart() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <>
      {/* title */}
      <div className="flex mx-3 lg:mx-6 py-5">
        <p className="font-bold text-lg lg:text-xl">خواندنی‌ها</p>
      </div>

      {/* cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4
          mx-3
          lg:mx-5
        "
      >
        {articles.slice(0, 4).map((article) => (
          <ReadingCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
