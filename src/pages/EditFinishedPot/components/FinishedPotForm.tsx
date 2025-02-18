import { useEffect, useState } from "react";
import {
    appealIconStyle, dividerStyle, formContainer, headContainer, iconStyle, inputStyle, labelStyle, languageInputStyle, mainContainer, summaryButtonContainer, textareaStyle, titleContainer, titleStyle,
} from "./FinishedPotForm.style"
import { Button, Modal, PotButton } from "@components/index";
import { AppealIcon, PotIcon } from "@assets/svgs";
import { DatePicker } from "@pages/CreatePot/components";
import { PatchPotCompleteBody } from "apis/types/pot";
import dayjs, { Dayjs } from "dayjs";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import useGetPotDetail from "apis/hooks/pots/useGetPotDetail";
import useGetPotSummary from "apis/hooks/pots/useGetPotSummary";
import SummaryLoadingModal from "./SummaryLoadingModal";

interface FinishedPotFormProps {
    potId: number;
    type: "create" | "edit";
    onCompleted: (data: PatchPotCompleteBody) => void;
}

const FinishedPotForm: React.FC<FinishedPotFormProps> = ({ potId, type, onCompleted }: FinishedPotFormProps) => {
    const { data: potData } = useGetPotDetail(potId);
    const { data: summaryData, isFetching: isSummaryLoading, refetch: getSummary } = useGetPotSummary(potId);
    const [showSummaryModal, setShowSummaryModal] = useState<boolean>(false);
    const [submitData, setSubmitData] = useState<PatchPotCompleteBody | null>(null);

    const methods = useForm<PatchPotCompleteBody>({
        mode: "onChange",
        defaultValues: {
            potName: "",
            potStartDate: "",
            potLan: "",
            potSummary: "",
        }
    });

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { isValid },
    } = methods;

    const handleSummary = () => {
        setShowSummaryModal(true);
        getSummary();
    };

    const handleStartDate = (day: Dayjs | null) => {
        if (day) {
            setValue("potStartDate", day.format('YYYY-MM-DD'))
        }
    }

    const onSubmit: SubmitHandler<PatchPotCompleteBody> = (data) => {
        onCompleted(data);
    };

    const [potStartDate] = watch([
        "potStartDate",
    ])

    useEffect(() => {
        if (potData) {
            setValue("potName", potData.potDetail.potName);
            setValue("potStartDate", potData.potDetail.potStartDate.split('. ').join('-'));
            setValue("potLan", potData.potDetail.potLan);
        }
    }, [potData]);

    useEffect(() => {
        if (!isSummaryLoading && summaryData) {
            setValue("potSummary", summaryData?.summary);
            methods.trigger();
        }
    }, [summaryData]);

    return (
        <main css={mainContainer}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit((data) => setSubmitData(data))}>
                    <div css={headContainer}>
                        <div css={titleContainer}>
                            <h2 css={titleStyle}>{type === "create" ? "나의 팟 다 끓이기" : "끓인 팟 수정하기"}</h2>
                            <PotIcon css={iconStyle} />
                        </div>
                        <Button type="submit" variant="action" disabled={!isValid}>
                            {type === "create" ? "다 끓였어요" : "수정 완료"}
                        </Button>
                    </div>
                    <form css={formContainer} >
                        <label css={labelStyle}>
                            팟 네임
                            <input css={inputStyle}
                                placeholder="메인 제목 작성"
                                {...register("potName", { required: true })} />
                        </label>
                        <div css={dividerStyle} />
                        <div css={labelStyle}>
                            시작 날짜
                            <DatePicker date={dayjs(potStartDate)} onChange={handleStartDate} />
                        </div>
                        <label css={labelStyle}>
                            사용 언어
                            <input css={[inputStyle, languageInputStyle]}
                                placeholder="사용 언어 작성"
                                {...register("potLan", { required: true })} />
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
                            {...register("potSummary", { required: true })}
                        />
                    </form>
                </form>
            </FormProvider>
            {isSummaryLoading && showSummaryModal &&
                <SummaryLoadingModal onClose={() => setShowSummaryModal(false)} />}
            {submitData &&
                <Modal
                    title="팟을 다 끓일까요?"
                    message={`모든 참여자의 페이지에 이 내용이 기입될 예정이에요.\n이름과 설명은 팟 주인만 작성 가능하므로,\n모든 내용이 명확한지 꼼꼼히 확인해 주세요.`}
                    onConfirm={() => onSubmit(submitData)}
                    onCancel={() => setSubmitData(null)} />}
        </main>
    )
}
export default FinishedPotForm;