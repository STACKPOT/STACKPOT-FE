import { AddMemberButton } from "@assets/svgs";
import { addMemberButtonStyle, firstProfileStyle, groupContainer, restGroupConatiner, restProfileStyle } from "./MemberGroupPlus.style";

interface MemberGroupPlusProps {
    firstProfileImage: string,
    profileImageList: string[]
}

const MemberGroupPlus: React.FC<MemberGroupPlusProps> = ({ firstProfileImage, profileImageList }: MemberGroupPlusProps) => {
    return (
        <div css={groupContainer}>
            <div css={addMemberButtonStyle}>
                <AddMemberButton />
            </div>
            <div css={restGroupConatiner}>
                {profileImageList.map((image) =>
                    <img css={restProfileStyle} src={image} />
                )}
            </div>
            <img css={firstProfileStyle} src={firstProfileImage} />
        </div>
    )
}

export default MemberGroupPlus;