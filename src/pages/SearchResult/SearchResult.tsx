import { CategoryButton, PotCard, SearchInput } from "@components/index";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  buttonContainer,
  gridContainer,
  mainContainer,
  pointStyle,
  textStyle,
  topContainer,
} from "./SearchResult.style";
import { categoryOptions } from "@constants/categories";
import useGetSearch from "apis/hooks/searches/useGetSearch";

const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>("팟");
  const { data } = useGetSearch({
    type: "pot",
    keyword: query,
    page: 1,
    size: 6,
  });

  useEffect(() => {
    const updatedQuery = queryParams.get("query") || "";
    setQuery(updatedQuery);
  }, [location]);

  const handleSearch = () => {
    if (query) {
      navigate(`/search-result?query=${query}`);
    }
  };

  const handleClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <main css={mainContainer}>
      <div css={topContainer}>
        <SearchInput
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
        />
        <p css={textStyle}>
          <span css={pointStyle}>‘프론트엔드'</span>에 대한 총{` `}
          <span css={pointStyle}>57</span>
          개의 피드와 팟 검색 결과가 발견되었어요.
        </p>
        <div css={buttonContainer}>
          {categoryOptions.map((category) => (
            <CategoryButton
              key={category}
              style="pot"
              selected={selectedCategory === category}
              onClick={() => handleClick(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </div>
      </div>
      <div css={gridContainer}>
        {data?.content?.map((pot) => (
          <PotCard
            key={pot.userId}
            id={pot.userId}
            role={pot.userRole}
            nickname={pot.userNickname}
            dday={pot.dday}
            title={pot.potName}
            content={pot.potContent}
            categories={pot.recruitmentRoles}
          />
        ))}
      </div>
    </main>
  );
};

export default SearchResult;
