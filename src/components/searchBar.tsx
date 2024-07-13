import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const SearchBar = ({
  keyword,
  setKeyword,
}: {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="w-full grid grid-cols-10 gap-x-4">
      <Input
        className="col-span-8"
        placeholder="search pokemon..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="col-span-2">SEARCH</Button>
    </div>
  );
};
