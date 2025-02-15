import { PotIcon } from "@assets/svgs";
import {
    buttonContainer,
    dividerStyle,
    formContainer,
    headButtonContainer,
    headContainer,
    iconStyle,
    inputStyle,
    labelStyle,
    languageInputStyle,
    partStyle,
    textareaStyle,
    titleContainer,
    titleStyle,
} from "./PotForm.style";
import { PotDetail, RecruitmentDetail } from "apis/types/pot";
import dayjs, { Dayjs } from "dayjs";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Participation } from "types/participation";
import { Button, CategoryButton, PartRecruitment, PotButton } from "@components/index";
import { participation, participationMap, period } from "@constants/categories";
import DatePicker from "./DatePicker/DatePicker";
import { useEffect } from "react";
import { Role } from "types/role";

interface PotFormProps {
    type: "create" | "edit";
    potId?: number;
    potData?: PotDetail;
    onCompleted: (data: PotFormData) => void;
    onDelete?: () => void;
}
export interface PotFormData {
    potName: string;
    potLan: string;
    potDuration: string;
    potModeOfOperation: Participation;
    potContent: string;
    potStartDate: string;
    recruitmentDeadline: string;
    recruitmentDetails: RecruitmentDetail[];
}

const PotForm: React.FC<PotFormProps> = ({ type, potData, onCompleted, onDelete }: PotFormProps) => {
    const methods = useForm<PotFormData>({
        mode: "onChange",
        defaultValues: {
            potName: "",
            potLan: "",
            potDuration: undefined,
            potModeOfOperation: undefined,
            potContent: "",
            potStartDate: undefined,
            recruitmentDeadline: undefined,
            recruitmentDetails: undefined,
        }
    })
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { isValid }
    } = methods;

    const [potDuration, potModeOfOperation, potStartDate, recruitmentDeadline] = watch([
        "potDuration",
        "potModeOfOperation",
        "potStartDate",
        "recruitmentDeadline",
    ])

    const handleStartDate = (day: Dayjs | null) => {
        if (day) {
            setValue("potStartDate", day.format('YYYY-MM-DD'))
        }
    }
    const handleDeadline = (day: Dayjs | null) => {
        if (day) {
            setValue("recruitmentDeadline", day.format('YYYY-MM-DD'))
        }
    }

    const onSubmit: SubmitHandler<PotFormData> = (data: PotFormData) => {
        if (potDuration && potModeOfOperation && potStartDate && recruitmentDeadline) {
            onCompleted(data)
        }
    }
    const handleDelete = () => {
        onDelete && onDelete();
    }

    useEffect(() => {
        if (potData) {
            setValue("potName", potData.potName)
            setValue("potLan", potData.potLan)
            setValue("potDuration", potData.potDuration)
            setValue("potModeOfOperation", participationMap[potData.potModeOfOperation])
            setValue("potContent", potData.potContent)
            setValue("potDuration", potData.potDuration)
            setValue("potStartDate", potData.potStartDate.split('. ').join('-'));
            setValue("recruitmentDeadline", potData.recruitmentDeadline.split('. ').join('-'));
            setValue(
                "recruitmentDetails",
                Object.entries(potData.recruitingMembers).map((part) =>
                ({
                    recruitmentRole: part[0] as Role,
                    recruitmentCount: part[1]
                })))
            methods.trigger();
        }
    }, [potData]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div css={headContainer}>
                    <div css={titleContainer}>
                        <h2 css={titleStyle}>{type === "create" ? "나의 팟 만들기" : "나의 팟 수정하기"}</h2>
                        <PotIcon css={iconStyle} />
                    </div>
                    {type === "create" ?
                        <Button variant="action" type="submit" disabled={!isValid}>
                            팟 만들기
                        </Button> :
                        <div css={headButtonContainer}>
                            <Button
                                type="submit"
                                variant="action"
                                actionType="edit"
                                disabled={!isValid}>수정 완료</Button>
                            <PotButton type="red" onClick={handleDelete}>삭제하기</PotButton>
                        </div>
                    }
                </div>
                <div css={formContainer}>
                    <label css={labelStyle}>
                        팟 네임
                        <input css={inputStyle} placeholder="메인 제목 작성" {...register("potName", { required: true })} />
                    </label>
                    <div css={dividerStyle} />
                    <div css={labelStyle}>
                        진행 방식
                        <div css={buttonContainer}>
                            {participation.map((participation) => (
                                <CategoryButton
                                    key={participation}
                                    style="pot"
                                    selected={watch("potModeOfOperation") === participationMap[participation]}
                                    onClick={() => setValue("potModeOfOperation", participationMap[participation])}
                                >
                                    {participation}
                                </CategoryButton>
                            ))}
                        </div>
                    </div>
                    <div css={labelStyle}>
                        시작 날짜
                        <DatePicker date={dayjs(potStartDate)} onChange={handleStartDate} />
                    </div>
                    <div css={labelStyle}>
                        마감 날짜
                        <DatePicker date={dayjs(recruitmentDeadline)} onChange={handleDeadline} />
                    </div>
                    <div css={labelStyle}>
                        예상 기간
                        <div css={buttonContainer}>
                            {period.map((period) => (
                                <CategoryButton
                                    key={period}
                                    style="pot"
                                    selected={watch("potDuration") === period}
                                    onClick={() => setValue("potDuration", period)}
                                >
                                    {period}
                                </CategoryButton>
                            ))}
                        </div>
                    </div>
                    <div css={partStyle}>
                        모집 파트
                        <PartRecruitment
                            initialRecruitment={potData?.recruitingMembers}
                            onChange={(recruitment) => setValue("recruitmentDetails", recruitment)} />
                    </div>
                    <label css={labelStyle}>
                        사용 언어
                        <input
                            css={[inputStyle, languageInputStyle]}
                            placeholder="사용 언어 작성"
                            {...register("potLan", { required: true })}
                        />
                    </label>
                    <textarea
                        css={textareaStyle}
                        placeholder="어떤 팟을 끓이고 싶으세요? 간단하게 소개해 보세요."
                        {...register("potContent", { required: true })}
                    />
                </div>
            </form>
        </FormProvider>
    )
}
export default PotForm;