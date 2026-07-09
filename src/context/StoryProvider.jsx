import { createContext, useContext, useState } from "react";

const StoryContext = createContext();

export function StoryProvider({ children }) {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(null);

  const openStory = (index) => setCurrentStoryIndex(index);
  const closeStory = () => setCurrentStoryIndex(null);

  const nextStory = () => {
    setCurrentStoryIndex((prev) =>
      prev + 1 < storyData.length ? prev + 1 : null,
    );
  };

  return (
    <StoryContext.Provider
      value={{
        currentStoryIndex,
        openStory,
        closeStory,
        nextStory,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
}

export const useStory = () => useContext(StoryContext);
