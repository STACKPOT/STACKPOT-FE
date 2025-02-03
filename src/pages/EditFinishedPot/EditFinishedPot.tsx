import { PotIcon } from "@assets/svgs";
import {
    buttonContainer, countInputStyle, dividerStyle, formContainer, headContainer, iconStyle, informationIconContainer, inputContainer, inputStyle, labelStyle, languageInputStyle, mainContainer, modalContentStyle, partButtonContainer, partContainer, partStyle, textareaStyle, titleContainer, titleStyle,
} from "./EditFinishedPot.style"
import { Button, CategoryButton, InformationPopper, Modal, PotButton, TextField } from "@components/index";
import { DatePicker } from "@pages/CreatePot/components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { partMap } from "@constants/categories";

const EditFinishedPot = () => {
    const navigate = useNavigate();
    const [potName, setPotName] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [introduction, setIntroduction] = useState<string>("");
    const [appeal, setAppeal] = useState<string>("");
    const [partNumber, setPartNumber] = useState<{ [key: string]: number }>({});
    const [visibleInputs, setVisibleInputs] = useState<{
        [key: string]: boolean;
    }>({});

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

    useEffect(() => {
        const partValues = Object.values(partMap);
        setPartNumber(Object.fromEntries(partValues.map(key =>
            [key, 0])) as Record<typeof partValues[number], number>);
    }, []);

    const handleDelete = () => {
        setShowDeleteModal(false);
        // todo: 삭제 api
    };

    const handlePartClick = (partName: string) => {
        setVisibleInputs((prev) => ({
            ...prev,
            [partName]: !prev[partName],
        }));
    };

    const handlePartNumber = (partName: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setPartNumber(prev => ({
            ...prev,
            [partMap[partName]]: Number(e.target.value),
        }));
    };

    const handleUploading = () => {
        // navigate("/");
    };

    return (
        <main css={mainContainer}>
            <div css={headContainer}>
                <div css={titleContainer}>
                    <h2 css={titleStyle}>끓인 팟 수정하기</h2>
                    <PotIcon css={iconStyle} />
                </div>
                <div css={buttonContainer}>
                    <PotButton onClick={() => setShowDeleteModal(true)} type="red">삭제하기</PotButton>
                    <Button variant="action" onClick={handleUploading}>
                        수정 완료
                    </Button>
                </div>
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
                    <div css={languageInputStyle}>
                        <TextField
                            placeholder="사용 언어 작성"
                            readonly={true}
                            warningMessage="팟 게시자만 편집 가능해요"
                            onTextChange={(text) => setLanguage(text)} >{language}</TextField>
                    </div>
                </label>
                <textarea
                    css={textareaStyle}
                    placeholder="어떤 팟을 끓이고 싶으세요? 간단하게 소개해 보세요."
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                />
                <div css={dividerStyle} />
                <label css={labelStyle}>
                    여기서 저는요
                    <div css={informationIconContainer}>
                        <InformationPopper marginBottom="0.65rem">{`팀장이 정리한 팟 소개와 별개로,\n여기서는 자신의 기여를 어필할 수 있어요.\n내가 한 일을 강조해 보세요!`}</InformationPopper>
                    </div>
                </label>
                <textarea
                    css={textareaStyle}
                    placeholder="내가 한 역할에 대해 어필해봐요. "
                    value={appeal}
                    onChange={(e) => setAppeal(e.target.value)}
                />
            </form>
            {showDeleteModal &&
                <Modal
                    title="끓인 팟을 삭제할까요?"
                    message={`이 콘텐츠는 회원님의 페이지에서 삭제되며,\n다른 팀원의 피드에는 여전히 남아있을 예정이에요.`}
                    onConfirm={handleDelete}
                    onCancel={() => setShowDeleteModal(false)} />}
        </main>
    )
}
export default EditFinishedPot;