import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PotIcon } from "@assets/svgs";
import {
  containerStyle,
  iconStyle,
  textContainerStyle,
  titleStyle,
  subtitleStyle,
} from "./Search.style";
import { SearchInput } from "@components/index";

const Search = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query) {
      navigate(`/search-result?query=${query}`);
    }
  };

  return (
    <main css={containerStyle}>
      <div css={textContainerStyle}>
        <h2 css={titleStyle}>찾고 싶은 내용이 있으신가요?</h2>
        <PotIcon css={iconStyle} />
      </div>
      <p css={subtitleStyle}>키워드를 입력하면 관련 내용을 찾아드릴게요.</p>
      <SearchInput
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
        onKeyDown={handleSearch}
      />
    </main>
  );
};

export default Search;
