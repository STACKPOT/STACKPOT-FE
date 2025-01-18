import { badgeStyle } from "./DdayBadge.style";

interface DdayBadgeProps {
    days:number;
}

const DdayBadge: React.FC<DdayBadgeProps> = ({ days }: DdayBadgeProps) => {
    return (
        <div css={badgeStyle}>D-{days}</div>
    )
}

export default DdayBadge;