import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { translateText } from "../../maincomponents/services/translateApi";

// Start
export default function ReadingCard({ article }) {
  const [titleFa, setTitleFa] = useState("");

  useEffect(() => {
    const translate = async () => {
      const result = await translateText(article.title);
      setTitleFa(result);
    };

    translate();
  }, [article.title]);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border-gray-300 border-1">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h3 className="text-sm font-bold">{titleFa}</h3>
        <p className="text-sm font-light text-gray-400 py-3">{article.description}</p>
      </div>
    </div>
  );
}
// FINISH
