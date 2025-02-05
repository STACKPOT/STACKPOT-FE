import { AppealModal, MemberGroup, PotButton } from "@components/index";
import { container, elementContainer, elementContentStyle, elementTitleStyle, gridContainer, profileContainer, teamElementContainer, titleContainer, titleProfileContainer, titleStyle } from "./FinishedPotCard.style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface FinishedPotCardProps {
    id: number;
    title: string;
    myRole: string;
    startDate: string;
    endDate: string;
    stacks: string;
    languages: string;
    memberProfiles: string[];
    editButton: boolean;
    buttonType?: "edit" | "appeal";
}

const FinishedPotCard: React.FC<FinishedPotCardProps> = ({ id, title, myRole, startDate, endDate, stacks, languages, memberProfiles, editButton, buttonType }: FinishedPotCardProps) => {
    const navigate = useNavigate();

    const [appealModal, setAppealModal] = useState<number | null>(null);

    const elementList: { title: string, content: string }[] = [
        { title: "나의 역할", content: myRole },
        { title: "시작 날짜", content: startDate },
        { title: "사용 언어", content: languages },
        { title: "종료 날짜", content: endDate },
        { title: "팀 구성", content: stacks },
    ]

    const handleClickPot = (id: number) => {
        navigate(`/pot/${id}`);
    }
    const handleEditPot = (id: number) => {
        if (buttonType === "edit") {
            navigate(`/edit-finished-pot/${id}`);
        } else {
            setAppealModal(id)
        }
    }

    return (
        <>
            <div css={container} onClick={() => handleClickPot(id)}>
                <div css={titleProfileContainer}>
                    <div css={titleContainer}>
                        <h1 css={titleStyle}>{title}</h1>
                        {editButton && <PotButton onClick={() => handleEditPot(id)}>{buttonType === "edit" ? "팟 소개 수정" : "여기서 저는요"}</PotButton>}
                    </div>
                    <div css={profileContainer}>
                        <MemberGroup profileImageList={memberProfiles} />
                    </div>
                </div>
                <div css={gridContainer}>
                    {elementList.map((element) =>
                        <div css={element.title !== "팀 구성" ? elementContainer : teamElementContainer}
                            key={element.title}>
                            <p css={elementTitleStyle}>{element.title}</p>
                            <p css={elementContentStyle}>{element.content}</p>
                        </div>
                    )}
                </div>
            </div>
            {appealModal !== null &&
                <AppealModal potId={appealModal} onCancel={() => setAppealModal(null)} />}
        </>
    )
}
export default FinishedPotCard;