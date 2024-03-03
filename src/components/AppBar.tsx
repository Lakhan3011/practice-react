import { SearchBar } from "./SearchBar";

export const AppBar = () => {
  return (
    <div className="flex justify-between pl-3 pr-3 pt-1">
      <div className="inline-flex pb-2">YouTube</div>
      <div>
        <SearchBar />
      </div>
      <div>Logout</div>
    </div>
  );
};
