import { PotIcon } from "@assets/svgs";
import {
  buttonContainer,
  countInputStyle,
  dividerStyle,
  formContainer,
  headContainer,
  iconStyle,
  inputContainer,
  inputStyle,
  labelStyle,
  languageInputStyle,
  mainContainer,
  partButtonContainer,
  partContainer,
  partStyle,
  textareaStyle,
  titleContainer,
  titleStyle,
} from "./CreatePot.style";
import { Button, CategoryButton } from "@components/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { participation, partMap, period } from "@constants/categories";
import { DatePicker } from "./components";
import useCreatePot from "apis/hooks/pots/useCreatePot";
import { Dayjs } from "dayjs";

const CreatePot = () => {
  const navigate = useNavigate();
  const { mutate } = useCreatePot();
  console.log("Mutation Object:", mutate);

  const [potName, setPotName] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [selectedParticipation, setSelectedParticipation] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [date, setDate] = useState<string>("");
  //const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedParts, setSelectedParts] = useState<string[]>([]);

  const [visibleInputs, setVisibleInputs] = useState<{
    [key: string]: boolean;
  }>({});



  /*const handleButtonClick = (category: string) => {
    setSelectedCategory(category);
  };*/
  const handleSelectPeriod = (selected: string) => {
    setSelectedPeriod(selected);
  }
  const handleSelectMethod = (selected: string) => {
    setSelectedParticipation(selected);
  }
  const handlePotName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPotName(e.target.value);
  }
  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }
  const handleLanguage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(e.target.value);
  }
  const handleDate = (day: Dayjs | null) => {
    if(day){
      setDate(day.format('YYYY-MM-DD'))
    }
  }
  const handlePartClick = (partName: string) => {
    setSelectedParts((prev) =>
      prev.includes(partName)
        ? prev.filter((item) => item !== partName)
        : [...prev, partName]
    );
    setVisibleInputs((prev) => ({
      ...prev,
      [partName]: !prev[partName],
    }));
  };

  const handleUploading = () => {
    /*console.log(potName);
    console.log(date);
    console.log(selectedPeriod);
    console.log(language);
    console.log(content);*/
    if (!mutate) {
      console.log("mutate is undefined! useCreatePot() is not returning it properly.");
      return;
  }
  console.log("Mutation function exists, executing mutate...");

    
    mutate({
      potName: potName,
      potStartDate: date,
      potDuration: selectedPeriod,
      potLan: language,
      potContent: content,
      potModeOfOperation: "ONLINE",
      recruitmentDetails: [
        {recruitmentRole:"BACKEND", recruitmentCount:2}
      ],
    })
    // navigate("/");
    console.log("Mutation function executed!");
  };

  return (
    <main css={mainContainer}>
      <div css={headContainer}>
        <div css={titleContainer}>
          <h2 css={titleStyle}>나의 팟 만들기</h2>
          <PotIcon css={iconStyle} />
        </div>
        <Button variant="action" onClick={handleUploading}>
          게시물 업로드
        </Button>
      </div>
      <form css={formContainer}>
        <label css={labelStyle}>
          팟 네임
          <input css={inputStyle} placeholder="메인 제목 작성" onChange={handlePotName} value={potName} />
        </label>
        <div css={dividerStyle} />
        <div css={labelStyle}>
          진행 방식
          <div css={buttonContainer}>
            {participation.map((participation) => (
              <CategoryButton
                key={participation}
                style="pot"
                selected={selectedParticipation === participation}
                onClick={handleSelectMethod}
              >
                {participation}
              </CategoryButton>
            ))}
          </div>
        </div>

        <div css={labelStyle}>
          시작 날짜
          <DatePicker onChange={handleDate} />
        </div>
        <div css={labelStyle}>
          예상 기간
          <div css={buttonContainer}>
            {period.map((period) => (
              <CategoryButton
                key={period}
                style="pot"
                selected={selectedPeriod === period}
                onClick={handleSelectPeriod}
              >
                {period}
              </CategoryButton>
            ))}
          </div>
        </div>
        <div css={partStyle}>
          모집 파트
          <div css={partContainer}>
            {Object.keys(partMap).map((partName) => (
              <div key={partName} css={partButtonContainer}>
                <CategoryButton
                  style={partMap[partName]}
                  selected={selectedParts.includes(partName)}
                  onClick={() => handlePartClick(partName)}
                >
                  {partName}
                </CategoryButton>
                <div css={inputContainer(visibleInputs[partName])}>
                  <input css={countInputStyle} />
                  <p>명</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <label css={labelStyle}>
          사용 언어
          <input
            css={[inputStyle, languageInputStyle]}
            placeholder="사용 언어 작성"
            onChange={handleLanguage}
            value={language}
          />
        </label>
        <textarea
          css={textareaStyle}
          placeholder="어떤 팟을 끓이고 싶으세요? 간단하게 소개해 보세요."
          onChange={handleContent}
          value={content}
        />
      </form>
    </main>
  );
};

export default CreatePot;
