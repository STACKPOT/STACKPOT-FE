import { partMap } from "@constants/categories";
import { countInputStyle, inputContainer, partButtonContainer, partContainer } from "./PartRecruitment.style";
import CategoryButton from "../Badge/CategoryButton/CategoryButton";
import { useEffect, useState } from "react";
import { RecruitmentDetail } from "apis/types/pot";

interface PartRecruitmentProps {
    initialRecruitment?: RecruitmentDetail[];
    onChange: (recruitmentData: RecruitmentDetail[]) => void;
}

const PartRecruitment: React.FC<PartRecruitmentProps> = ({ initialRecruitment, onChange }: PartRecruitmentProps) => {
    const [recruitment, setRecruitment] = useState<{ [key: string]: number }>({});
    const [visibleInputs, setVisibleInputs] = useState<{
        [key: string]: boolean;
    }>({});

    const handlePartClick = (partName: string) => {
        setVisibleInputs((prev) => ({
            ...prev,
            [partName]: !prev[partName],
        }));
    };

    const handlePartNumber = (partName: string, e: React.ChangeEvent<HTMLInputElement>) => {
        setRecruitment(prev => ({
            ...prev,
            [partName]: Number(e.target.value),
        }));
    };

    useEffect(() => {
        const partValues = Object.keys(partMap);
        setRecruitment(Object.fromEntries(partValues.map(key =>
            [key, 0])) as Record<typeof partValues[number], number>);
    }, []);

    useEffect(() => {
        initialRecruitment?.forEach(part =>
            setRecruitment((prev) => ({
                ...prev,
                [part.recruitmentRole]: part.recruitmentCount
            }))
        );
    }, [initialRecruitment]);

    useEffect(() => {
        let recruitmentData: RecruitmentDetail[] = [];
        Object.entries(recruitment).forEach((part) => {
            if (visibleInputs[part[0]] && part[1] > 0) {
                recruitmentData = [...recruitmentData, { recruitmentRole: partMap[part[0]], recruitmentCount: part[1] }]
            }
        });
        onChange(recruitmentData)
    }, [recruitment, visibleInputs]);

    return (
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
    )
}
export default PartRecruitment;