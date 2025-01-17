import { badgeStyle } from "./Badge.style"

interface BadgeProps {
    content: string;
}

const Badge: React.FC<BadgeProps> = ({ content }: BadgeProps) => {
    return (
        <div css={badgeStyle}>{content}</div>
    )
}

export default Badge;