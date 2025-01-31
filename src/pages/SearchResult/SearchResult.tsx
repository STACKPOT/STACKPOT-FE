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
import { MushroomImage } from "@assets/images";

const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  useEffect(() => {
    const updatedQuery = queryParams.get("query") || "";
    setQuery(updatedQuery);
  }, [location]);

  const handleSearch = () => {
    if (query) {
      navigate(`/search-result?query=${query}`);
    }
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
          <CategoryButton content="팟" selected={false} />
          <CategoryButton content="피드" selected={false} />
        </div>
      </div>
      <div css={gridContainer}>
        <PotCard
          dday={5}
          profileImage={MushroomImage}
          nickname="아아 마시는 버섯"
          title="AI 자동화 챗봇 어플 공부할 스터디원"
          content="스터디의 자세한 내용은 여기에 보입니다. 최대 두 줄만 보이는 것이 좋을 것 같습니다."
          saveCount={8}
        />
        <PotCard
          dday={5}
          profileImage={MushroomImage}
          nickname="아아 마시는 버섯"
          title="AI 자동화 챗봇 어플 공부할 스터디원"
          content="스터디의 자세한 내용은 여기에 보입니다. 최대 두 줄만 보이는 것이 좋을 것 같습니다."
          saveCount={8}
        />
        <PotCard
          dday={5}
          profileImage={MushroomImage}
          nickname="아아 마시는 버섯"
          title="AI 자동화 챗봇 어플 공부할 스터디원"
          content="스터디의 자세한 내용은 여기에 보입니다. 최대 두 줄만 보이는 것이 좋을 것 같습니다."
          saveCount={8}
        />
        <PotCard
          dday={5}
          profileImage={MushroomImage}
          nickname="아아 마시는 버섯"
          title="AI 자동화 챗봇 어플 공부할 스터디원"
          content="스터디의 자세한 내용은 여기에 보입니다. 최대 두 줄만 보이는 것이 좋을 것 같습니다."
          saveCount={8}
        />
      </div>
    </main>
  );
};

export default SearchResult;
