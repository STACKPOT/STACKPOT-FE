import { MyPotIcon } from "@assets/svgs";
import { container, contentContainer, myPotIconStyle, titleStyle } from "./OnGoingPotCard.style";
import { MemberGroup, PotButton } from "@components/index";

interface OnGoingPotCardProps {
    id: number;
    title: string;
    memberList: string[];
    onFinishPot: (id: number) => void;
    onClickCard: (id: number) => void;
}
const OnGoingPotCard: React.FC<OnGoingPotCardProps> = ({ id, title, memberList, onFinishPot, onClickCard }: OnGoingPotCardProps) => {
    return (
        <div css={container} onClick={() => onClickCard(id)}>
            <div css={contentContainer}>
                <MyPotIcon css={myPotIconStyle} />
                <p css={titleStyle}>{title}</p>
                <MemberGroup profileImageList={memberList} />
            </div>
            <PotButton onClick={() => onFinishPot(id)}>다 끓였어요</PotButton>
        </div>
    )
}
export default OnGoingPotCard;