// makes map for items
import StoryItem from "./StoryItem";
import { storyData } from "../../data/componentData/story.data";

export default function StorySlider({ sliderRef }) {
  return (
    <div
      ref={sliderRef}
      className="flex gap-1 overflow-x-hidden scroll-smooth no-scrollbar"
    >
      {storyData.map((item) => (
        <StoryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
