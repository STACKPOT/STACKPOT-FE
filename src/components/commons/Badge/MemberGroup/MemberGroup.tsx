import { firstProfileStyle, groupContainer, restGroupConatiner, restProfileStyle } from "./MemberGroup.style"

interface MemberGroupProps {
    firstProfileImage: string,
    profileImageList: string[]
}

const MemberGroup: React.FC<MemberGroupProps> = ({ firstProfileImage, profileImageList }: MemberGroupProps) => {
    return (
        <div css={groupContainer}>
            <div css={restGroupConatiner}>
                {profileImageList.map((image) =>
                    <img css={restProfileStyle} src={image} />
                )}
            </div>
            <img css={firstProfileStyle} src={firstProfileImage} />
        </div>
    )
}

export default MemberGroup;