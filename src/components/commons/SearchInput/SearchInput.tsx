import { SearchIcon } from "@assets/svgs";
import { inputStyle, buttonStyle, searchInputStyle, iconStyle } from "./SearchInput.style";

interface SearchInputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
}

const SearchInput = ({ query, setQuery, onSearch }: SearchInputProps) => {
  return (
    <div css={searchInputStyle}>
      <input
        css={inputStyle}
        placeholder="무엇이든 검색해 보세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="button" css={buttonStyle} onClick={onSearch}>
        <SearchIcon css={iconStyle} />
      </button>
    </div>
  );
};

export default SearchInput;
