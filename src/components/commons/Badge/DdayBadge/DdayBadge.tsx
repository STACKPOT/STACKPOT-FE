import { badgeStyle } from "./DdayBadge.style";

interface DdayBadgeProps {
  days: string;
}

const DdayBadge: React.FC<DdayBadgeProps> = ({ days }: DdayBadgeProps) => {
  return <div css={badgeStyle}>{days}</div>;
};

export default DdayBadge;
