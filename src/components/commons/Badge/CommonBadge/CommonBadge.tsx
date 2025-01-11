import { badgeStyle } from "./CommonBadge.style"

interface CommonBadgeProps {
    content: string,
    textColor: string,
    backgroundColor: string
}

const CommonBadge: React.FC<CommonBadgeProps> = ({ content, textColor, backgroundColor }: CommonBadgeProps) => {
    return (
        <div css={badgeStyle(textColor, backgroundColor)}>{content}</div>
    )
}

export default CommonBadge;