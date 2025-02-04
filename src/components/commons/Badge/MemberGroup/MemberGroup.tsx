import { groupContainer, profilePlusStyle, profileStyle } from "./MemberGroup.style"

interface MemberGroupProps {
    profileImageList: string[]
}

const MemberGroup: React.FC<MemberGroupProps> = ({ profileImageList }: MemberGroupProps) => {
    return (
        <div css={groupContainer}>
            {profileImageList.length > 4 && <div css={profilePlusStyle}>+{profileImageList.length - 4}</div>}
            {profileImageList.slice(0, 4).map((image, index) =>
                <img key={index} css={profileStyle} src={image} />
            )}
        </div>
    )
}

export default MemberGroup;