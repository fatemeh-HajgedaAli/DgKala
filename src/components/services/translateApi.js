import axios from "axios";

export const translateText = async (text) => {
  try {
    const response = await axios.post(
      "https://libretranslate.com/translate",
      {
        q: text,
        source: "en",
        target: "fa",
      }
    );

    return response.data.translatedText;
  } catch (error) {
    console.log(error);
    return text;
  }
};