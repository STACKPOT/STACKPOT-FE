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
import { useEffect, useState } from "react";
import { participation, participationMap, partMap, period } from "@constants/categories";
import { DatePicker } from "./components";
import useCreatePot from "apis/hooks/pots/useCreatePot";
import { Dayjs } from "dayjs";
import { RecruitmentDetail } from "apis/types/pot";

const CreatePot = () => {
  const { mutate } = useCreatePot();

  const [potName, setPotName] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [selectedParticipation, setSelectedParticipation] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [partNumber, setPartNumber] = useState<{ [key: string]: number }>({});
  const [visibleInputs, setVisibleInputs] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    const partValues = Object.keys(partMap);
    setPartNumber(Object.fromEntries(partValues.map(key =>
      [key, 0])) as Record<typeof partValues[number], number>);
  }, []);


  const handleDate = (day: Dayjs | null) => {
    if (day) {
      setDate(day.format('YYYY-MM-DD'))
    }
  }
  const handlePartClick = (partName: string) => {
    setVisibleInputs((prev) => ({
      ...prev,
      [partName]: !prev[partName],
    }));
  };

  const handlePartNumber = (partName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setPartNumber(prev => ({
      ...prev,
      [partName]: Number(e.target.value),
    }));
  };

  const handleUploading = () => {
    let recruits: RecruitmentDetail[] = [];
    Object.entries(partNumber).forEach((part) => {
      if (visibleInputs[part[0]] && part[1] > 0) {
        recruits = [
          ...recruits,
          { recruitmentRole: partMap[part[0]], recruitmentCount: part[1] }]
      }
    })

    mutate({
      potName: potName,
      potStartDate: date,
      potDuration: selectedPeriod,
      potLan: language,
      potContent: content,
      potModeOfOperation: participationMap[selectedParticipation],
      recruitmentDetails: recruits,
    })
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
          <input css={inputStyle} placeholder="메인 제목 작성" onChange={(e) => setPotName(e.target.value)} value={potName} />
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
                onClick={() => setSelectedParticipation(participation)}
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
                onClick={() => setSelectedPeriod(period)}
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
                  selected={visibleInputs[partName]}
                  onClick={() => handlePartClick(partName)}
                >
                  {partName}
                </CategoryButton>
                <div css={inputContainer(visibleInputs[partName])}>
                  <input css={countInputStyle}
                    onChange={(e) => handlePartNumber(partName, e)} />
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
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          />
        </label>
        <textarea
          css={textareaStyle}
          placeholder="어떤 팟을 끓이고 싶으세요? 간단하게 소개해 보세요."
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </form>
    </main>
  );
};

export default CreatePot;
