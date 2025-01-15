import { badgeStyle } from "./Badge.style"

interface BadgeProps {
    content: string,
    color: string
}

const Badge: React.FC<BadgeProps> = ({ content, color }: BadgeProps) => {
    return (
        <div css={badgeStyle(color)}>{content}</div>
    )
}

export default Badge;