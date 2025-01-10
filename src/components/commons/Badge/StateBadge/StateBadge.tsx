import { badgeStyle } from "./StateBadge.style";

interface StateBadgeProps {
    content: string,
    color: string
}

const StateBadge: React.FC<StateBadgeProps> = ({ content, color }: StateBadgeProps) => {
    return (
        <div css={badgeStyle(color)}>{content}</div>
    )
}

export default StateBadge;