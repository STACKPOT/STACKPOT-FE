import { badgeStyle } from "./Badge.style"

interface BadgeProps {
    content: string,
    backgroundColor: string,
    textColor: string,
    borderColor: string
}

const Badge: React.FC<BadgeProps> = ({ content, backgroundColor, borderColor, textColor }: BadgeProps) => {
    return (
        <div css={badgeStyle(backgroundColor, borderColor, textColor)}>{content}</div>
    )
}

export default Badge;