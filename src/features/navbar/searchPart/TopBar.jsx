import NavbarmenuBoxes from "../NavbarmenuBoxes";
import SearchInput from "./SearchInput";
import HeaderActions from "./HeaderActions";

export default function TopBar() {
  return (
    <div className="relative lg:px-8">
      <NavbarmenuBoxes />

      <div className="hidden lg:flex items-center justify-between h-[90px]">
        <SearchInput />
        <HeaderActions />
      </div>
    </div>
  );
}
