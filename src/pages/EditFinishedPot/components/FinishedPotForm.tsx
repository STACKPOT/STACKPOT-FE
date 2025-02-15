import { useEffect } from "react";
import {
    appealIconStyle, dividerStyle, formContainer, headContainer, iconStyle, inputStyle, labelStyle, languageInputStyle, mainContainer, partStyle, summaryButtonContainer, textareaStyle, titleContainer, titleStyle,
} from "./FinishedPotForm.style"
import { Button, PartRecruitment, PotButton } from "@components/index";
import { AppealIcon, PotIcon } from "@assets/svgs";
import { DatePicker } from "@pages/CreatePot/components";
import { PostPotParams } from "apis/types/pot";
import dayjs, { Dayjs } from "dayjs";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import useGetPotDetail from "apis/hooks/pots/useGetPotDetail";
import { Role } from "types/role";

interface FinishedPotFormProps {
    potId: number;
    type: "create" | "edit";
    onCompleted: (data: PostPotParams) => void;
}

const FinishedPotForm: React.FC<FinishedPotFormProps> = ({ potId, type, onCompleted }: FinishedPotFormProps) => {
    const { data: potData } = useGetPotDetail(potId);

    const methods = useForm<PostPotParams>({
        mode: "onChange",
        defaultValues: {
            potName: "",
            potStartDate: "",
            potDuration: "",
            potLan: "",
            potContent: "",
            potModeOfOperation: undefined,
            potSummary: "",
            recruitmentDeadline: "",
            recruitmentDetails: [],
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
        // todo: api 호출
        setValue("potSummary", "ai 요약 내용");
    }

    const handleStartDate = (day: Dayjs | null) => {
        if (day) {
            setValue("potStartDate", day.format('YYYY-MM-DD'))
        }
    }

    const onSubmit: SubmitHandler<PostPotParams> = (data) => {
        onCompleted(data);
    };

    const [potStartDate] = watch([
        "potStartDate",
    ])

    useEffect(() => {
        if (potData) {
            setValue("potName", potData.potDetail.potName);
            setValue("potStartDate", potData.potDetail.potStartDate.split('. ').join('-'));
            setValue("potDuration", potData.potDetail.potDuration);
            setValue("potLan", potData.potDetail.potLan);
            setValue("potContent", potData.potDetail.potContent);
            setValue("potModeOfOperation", potData.potDetail.potModeOfOperation);
            setValue("recruitmentDeadline", potData.potDetail.recruitmentDeadline.split('. ').join('-'));
            setValue("recruitmentDetails",
                Object.entries(potData.potDetail.recruitingMembers).map((part) =>
                ({
                    recruitmentRole: part[0] as Role,
                    recruitmentCount: part[1]
                })));
        }
    }, [potData]);

    return (
        <main css={mainContainer}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        <div css={partStyle}>
                            팀 구성
                            <PartRecruitment
                                initialRecruitment={potData?.potDetail.recruitingMembers}
                                onChange={(data) => setValue("recruitmentDetails", data)} />
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
        </main>
    )
}
export default FinishedPotForm;