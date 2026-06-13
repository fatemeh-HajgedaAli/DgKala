export default function StoryItem({ item }) {
  return (
    <a
      // href={item.url}
      // target="_blank"
      // rel="noreferrer"
      className="flex flex-col items-center w-[120px] shrink-0 "
    >
      <img
        src={item.image}
        className="w-20 h-20 rounded-full border-3 border-fuchsia-600 p-1"
      />
      <p className="text-sm text-center font-light text-slate-600">
        {item.title}
      </p>
    </a>
  );
}
