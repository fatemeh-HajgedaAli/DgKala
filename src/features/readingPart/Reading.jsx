import { useEffect, useState } from "react";
import { getArticles } from "../../components/services/newsApi";
import ReadingCard from "./ReadingCards";

export default function ReadingPart() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticles(data);``
    };

    fetchArticles();
  }, []);
  console.log(articles);
  return (
    <>
      <div className="flex mx-6 py-5">
        <p className="font-bold text-xl">خواندنی ها</p>
      </div>
      <div className="grid grid-cols-4 gap-5 mx-5">
        {articles.slice(0, 4).map((article, index) => (
          <ReadingCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
