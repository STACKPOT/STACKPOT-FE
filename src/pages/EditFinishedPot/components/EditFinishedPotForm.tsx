import { useState } from "react";
import {
    appealIconStyle, dividerStyle, formContainer, headContainer, iconStyle, inputStyle, labelStyle, languageInputStyle, mainContainer, partStyle, summaryButtonContainer, textareaStyle, titleContainer, titleStyle,
} from "./EditFinishedPotForm.style"
import { Button, PartRecruitment, PotButton } from "@components/index";
import { AppealIcon, PotIcon } from "@assets/svgs";
import { DatePicker } from "@pages/CreatePot/components";
import { RecruitmentDetail } from "apis/types/pot";
import { Dayjs } from "dayjs";

interface EditFinishedPotFormProps {
    type: "create" | "edit";
    onSubmit: (data: { title: string, startDate: string, recruits: RecruitmentDetail[], language: string, content: string }) => void;
}

const EditFinishedPotForm: React.FC<EditFinishedPotFormProps> = ({ type, onSubmit }: EditFinishedPotFormProps) => {
    const [potName, setPotName] = useState<string>("");
    const [language, setLanguage] = useState<string>("");
    const [introduction, setIntroduction] = useState<string>("");
    const [recruitment, setRecruitment] = useState<RecruitmentDetail[]>([]);
    const [startDate, setStartDate] = useState<string>("");

    const handleSummary = () => {
        // todo: api 호출
        setIntroduction("ai 요약 내용");
    }

    const handleStartDate = (day: Dayjs | null) => {
        if (day) {
            setStartDate(day.format('YYYY-MM-DD'))
        }
    }
    const handleSubmit = () => {
        onSubmit({
            title: potName,
            startDate: startDate,
            recruits: recruitment,
            language: language,
            content: introduction
        })
    };

    return (
        <main css={mainContainer}>
            <div css={headContainer}>
                <div css={titleContainer}>
                    <h2 css={titleStyle}>{type === "create" ? "나의 팟 다 끓이기" : "끓인 팟 수정하기"}</h2>
                    <PotIcon css={iconStyle} />
                </div>
                <Button variant="action" onClick={handleSubmit}>
                    {type === "create" ? "다 끓였어요" : "수정 완료"}
                </Button>
            </div>
            <form css={formContainer} >
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
                    <DatePicker onChange={handleStartDate} />
                </div>
                <div css={partStyle}>
                    팀 구성
                    <PartRecruitment
                        initialRecruitment={recruitment}
                        onChange={setRecruitment} />
                </div>
                <label css={labelStyle}>
                    사용 언어
                    <input css={[inputStyle, languageInputStyle]}
                        placeholder="사용 언어 작성"
                        onChange={(e) => setLanguage(e.target.value)}
                        value={language} />
                </label>
                {type === "create" &&
                    <div css={summaryButtonContainer}>
                        <label css={labelStyle}>팟 소개하기</label>
                        <PotButton
                            onClick={handleSummary}>
                            <AppealIcon css={appealIconStyle} />
                            AI 요약 생성
                        </PotButton>
                    </div>
                }
                <textarea
                    css={textareaStyle}
                    placeholder={type === "create" ?
                        "완료된 프로젝트 소개가 고민된다면 AI요약 생성 버튼을 눌러 보세요. AI가 팟 공고를 요약해 소개글을 완성해 드려요."
                        : "어떤 팟을 끓이고 싶으세요? 간단하게 소개해 보세요."}
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                />
            </form>
        </main>
    )
}
export default EditFinishedPotForm;