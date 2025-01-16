import { SearchIcon } from "@assets/svgs";
import { inputStyle, buttonStyle, searchInputStyle } from "./SearchInput.style";

const SearchInput = () => {
  return (
    <div css={searchInputStyle}>
      <input css={inputStyle} placeholder="무엇이든 검색해 보세요" />
      <button type="button" css={buttonStyle}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchInput;
