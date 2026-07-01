import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

export default function SearchPart() {
  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm">
      <TopBar />
      <BottomBar />
    </header>
  );
}
