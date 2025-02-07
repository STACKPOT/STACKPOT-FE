import { partMap } from "@constants/categories";
import { countInputStyle, inputContainer, partButtonContainer, partContainer } from "./PartRecruitment.style";
import CategoryButton from "../Badge/CategoryButton/CategoryButton";
import { useEffect, useState } from "react";

interface PartRecruitmentProps {
    initialRecruitment?: { roleName: string, roleNumber: number }[];
    onChange: (recruitmentData: { roleName: string, roleNumber: number }[]) => void;
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
                [part.roleName]: part.roleNumber
            }))
        );
    }, [initialRecruitment]);

    useEffect(() => {
        let recruitmentData: { roleName: string, roleNumber: number }[] = [];
        Object.entries(recruitment).forEach((part) => {
            if (visibleInputs[part[0]] && part[1] > 0) {
                recruitmentData = [...recruitmentData, { roleName: partMap[part[0]], roleNumber: part[1] }]
            }
        });
        onChange(recruitmentData)
    }, [recruitment]);

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