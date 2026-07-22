import { newsData } from "../../data/componentData/newsData";

export const getArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newsData);
    }, 1000);
  });
};
