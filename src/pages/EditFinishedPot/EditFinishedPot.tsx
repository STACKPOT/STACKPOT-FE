import { PotIcon } from "@assets/svgs";
import {
    countInputStyle, dividerStyle, formContainer, headContainer, iconStyle, inputContainer, inputStyle, labelStyle, languageInputStyle, mainContainer, partButtonContainer, partContainer, partStyle, textareaStyle, titleContainer, titleStyle,
} from "./EditFinishedPot.style"
import { Button, CategoryButton } from "@components/index";
import { DatePicker } from "@pages/CreatePot/components";
import { useEffect, useState } from "react";
import { partMap } from "@constants/categories";

const EditFinishedPot = () => {
    const [potName, setPotName] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [introduction, setIntroduction] = useState<string>("");
    const [partNumber, setPartNumber] = useState<{ [key: string]: number }>({});
    const [visibleInputs, setVisibleInputs] = useState<{
        [key: string]: boolean;
    }>({});

    useEffect(() => {
        const partValues = Object.keys(partMap);
        setPartNumber(Object.fromEntries(partValues.map(key =>
            [key, 0])) as Record<typeof partValues[number], number>);
    }, []);

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
        let recruits: { roleName: string, roleNumber: number }[] = [];
        Object.entries(partNumber).forEach((part) => {
            if (visibleInputs[part[0]] && part[1] > 0) {
                recruits = [...recruits, { roleName: partMap[part[0]], roleNumber: part[1] }]
            }
        });
        // navigate("/");
    };

    return (
        <main css={mainContainer}>
            <div css={headContainer}>
                <div css={titleContainer}>
                    <h2 css={titleStyle}>끓인 팟 수정하기</h2>
                    <PotIcon css={iconStyle} />
                </div>
                <Button variant="action" onClick={handleUploading}>
                    수정 완료
                </Button>
            </div>
            <form css={formContainer}>
                <label css={labelStyle}>
                    팟 네임
                    <input css={inputStyle}
                        placeholder="메인 제목 작성"
                        value={potName}
                        onChange={(e) => setPotName(e.target.value)} />
                </label>
                <div css={dividerStyle} />
                <div css={labelStyle}>
                    시작 날짜
                    <DatePicker />
                </div>
                <div css={partStyle}>
                    팀 구성
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
                                    <input
                                        css={countInputStyle}
                                        onChange={(e) => handlePartNumber(partName, e)} />
                                    <p>명</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <label css={partStyle}>
                    사용 언어
                    <input css={[inputStyle, languageInputStyle]}
                        placeholder="사용 언어 작성"
                        onChange={(e) => setLanguage(e.target.value)}
                        value={language} />
                </label>
                <textarea
                    css={textareaStyle}
                    placeholder="어떤 팟을 끓이고 싶으세요? 간단하게 소개해 보세요."
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                />
            </form>
        </main>
    )
}
export default EditFinishedPot;