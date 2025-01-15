import { badgeStyle, emojiStyle, textStyle } from "./EvaluationBadge.style"

interface EvaluationBadgeProps {
    content: string,
    emoji: string
}

const EvaluationBadge: React.FC<EvaluationBadgeProps> = ({ content, emoji }: EvaluationBadgeProps) => {
    return (
        <div css={badgeStyle}>
            <p css={textStyle}>{content}</p>
            <img css={emojiStyle} src={emoji} />
        </div>
    )
}

export default EvaluationBadge;