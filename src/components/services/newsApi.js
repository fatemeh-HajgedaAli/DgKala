import { newsData } from "../../data/newsData";

export const getArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newsData);
    }, 1000);
  });
};
