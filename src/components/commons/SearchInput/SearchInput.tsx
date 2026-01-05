import { SearchIcon } from "@assets/svgs";
import {
  inputStyle,
  buttonStyle,
  searchInputStyle,
  iconStyle,
} from "./SearchInput.style";

interface SearchInputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  onKeyDown: () => void;
}

const SearchInput = ({ query, setQuery, onSearch }: SearchInputProps) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div css={searchInputStyle}>
      <input
        css={inputStyle}
        placeholder="검색어 입력"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="button" css={buttonStyle} onClick={onSearch}>
        <SearchIcon css={iconStyle} />
      </button>
    </div>
  );
};

export default SearchInput;
