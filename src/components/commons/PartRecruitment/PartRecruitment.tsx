import { partMap } from "@constants/categories";
import { countInputStyle, inputContainer, partButtonContainer, partContainer } from "./PartRecruitment.style";
import CategoryButton from "../Button/CategoryButton/CategoryButton";
import { useEffect, useState } from "react";
import { RecruitmentDetail } from "apis/types/pot";
import { Role } from "types/role";

interface PartRecruitmentProps {
    initialRecruitment?: Record<Role, number>;
    onChange: (recruitmentData: RecruitmentDetail[]) => void;
}

const PartRecruitment: React.FC<PartRecruitmentProps> = ({ initialRecruitment, onChange }: PartRecruitmentProps) => {
    const [recruitment, setRecruitment] = useState<Record<Role, number>>({} as Record<Role, number>);
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
            [partMap[partName]]: Number(e.target.value),
        }));
    };

    useEffect(() => {
        const partValues = Object.values(partMap);
        setRecruitment(Object.fromEntries(partValues.map(key =>
            [key, initialRecruitment ? initialRecruitment[key] : 0])) as Record<Role, number>);

        if (initialRecruitment) {
            Object.entries(initialRecruitment).forEach(part => {
                if (part[1] > 0)
                    setVisibleInputs(prev => ({
                        ...prev,
                        [part[0]]: true
                    }))
            })
        }
    }, [initialRecruitment]);

    useEffect(() => {
        let recruitmentData: RecruitmentDetail[] = [];
        Object.entries(recruitment).forEach((part) => {
            if (visibleInputs[part[0]] && part[1] > 0) {
                recruitmentData = [...recruitmentData, { recruitmentRole: part[0] as Role, recruitmentCount: part[1] }]
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
                        selected={visibleInputs[partMap[partName]]}
                        onClick={() => handlePartClick(partMap[partName])}
                    >
                        {partName}
                    </CategoryButton>
                    <div css={inputContainer(visibleInputs[partMap[partName]])}>
                        <input
                            css={countInputStyle}
                            value={recruitment[partMap[partName]] > 0 ? recruitment[partMap[partName]] : ""}
                            onChange={(e) => handlePartNumber(partName, e)} />
                        <p>명</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default PartRecruitment;