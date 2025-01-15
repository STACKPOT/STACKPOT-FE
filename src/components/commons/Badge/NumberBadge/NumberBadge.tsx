import { badgeStyle } from "./NumberBadge.style";

interface NumberBadgeProps {
    content: string
}

const NumberBadge: React.FC<NumberBadgeProps> = ({ content }: NumberBadgeProps) => {
    return (
        <div css={badgeStyle}>{content}</div>
    )
}

export default NumberBadge;