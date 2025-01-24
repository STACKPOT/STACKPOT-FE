import { ArrowButton, Button } from "@components/index";
import { headerContainer, titleContainer, titleIconStyle, titleStyle, container, buttonStyle, listContainer, memberContainer, profileStyle, nicknameStyle, moreButtonWrapper } from "./MembersInformation.style"
import { PotIcon } from "@assets/svgs";

interface MemberInformationProps {
    potMembers: { id: number; profileImage: string, nickname: string }[];
    onClickMore: (member: { id: number; profileImage: string, nickname: string }) => void;
    onShareLink: () => void;
}
const MemberInformation: React.FC<MemberInformationProps> = ({ potMembers, onClickMore, onShareLink }: MemberInformationProps) => {
    return (
        <div css={container}>
            <div css={headerContainer}>
                <div css={titleContainer}>
                    <h1 css={titleStyle}>나와 함께한 팀원들</h1>
                    <PotIcon css={titleIconStyle} />
                </div>
                <Button style="action" onClick={onShareLink}>링크 공유하기</Button>
            </div>
            <div css={listContainer}>
                {potMembers.map((member) =>
                    <div css={memberContainer}>
                        <img css={profileStyle} src={member.profileImage} />
                        <p css={nicknameStyle}>{member.nickname}</p>
                        <div css={moreButtonWrapper}>
                            <ArrowButton direction="right" onClick={() => onClickMore(member)} />
                        </div>
                    </div>

                )}
            </div>

        </div>
    )
}
export default MemberInformation;