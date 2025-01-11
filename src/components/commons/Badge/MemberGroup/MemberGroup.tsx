import { firstProfileStyle, groupContainer, restGroupConatiner, restProfileStyle } from "./MemberGroup.style"

interface MemberGroupProps {
    firstProfileUrl: string,
    profileUrlList: string[]
}

const MemberGroup: React.FC<MemberGroupProps> = ({ firstProfileUrl, profileUrlList }: MemberGroupProps) => {
    return (
        <div css={groupContainer}>
            <div css={restGroupConatiner}>
                {profileUrlList.map((url) =>
                    <img css={restProfileStyle} src={url} />
                )}
            </div>
            <img css={firstProfileStyle} src={firstProfileUrl} />
        </div>
    )
}

export default MemberGroup;