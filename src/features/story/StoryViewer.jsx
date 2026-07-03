import { useStory } from "../../context/StoryProvider";
import { storyData } from "../../data/componentData/story.data";

export default function StoryViewer() {
  const { currentStoryIndex, closeStory, nextStory, prevStory } = useStory();

  if (currentStoryIndex === null) return null;

  const story = storyData[currentStoryIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* CLOSE */}
      <button
        onClick={closeStory}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        ✕
      </button>

      {/* PREV */}
      <div
        onClick={prevStory}
        className="absolute left-0 w-1/3 h-full"
      />

      {/* NEXT */}
      <div
        onClick={nextStory}
        className="absolute right-0 w-1/3 h-full"
      />

      {/* IMAGE */}
      <img
        src={story.image}
        className="max-h-full max-w-full object-contain"
      />

      {/* TITLE */}
      <div className="absolute bottom-6 text-white text-sm">
        {story.title}
      </div>
    </div>
  );
}