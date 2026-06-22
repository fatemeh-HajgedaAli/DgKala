import { useLocation } from "react-router-dom";

export default function NewsDetail() {
  const { state } = useLocation();

  const article = state?.article;

  if (!article) return <p>خبر پیدا نشد</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={article.urlToImage} className="w-full rounded-xl" />

      <h1 className="text-2xl font-bold mt-4">{article.title}</h1>

      <p>{article.description}</p>

      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-4 block"
      >
        مطالعه کامل خبر
      </a>
    </div>
  );
}
