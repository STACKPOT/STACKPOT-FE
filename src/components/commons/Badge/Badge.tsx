import { badgeStyle } from "./Badge.style";

interface BadgeProps {
  content: string;
}

type variant = "red" | "green" | "blue" | "purple" | "pink";

const Badge: React.FC<BadgeProps> = ({ content }) => {
  const contentToVariantMap: Record<string, variant> = {
    프론트엔드: "blue",
    백엔드: "green",
    기획: "purple",
    디자인: "pink",
  };

  const variantColor = contentToVariantMap[content] ?? "red";

  return <div css={badgeStyle(variantColor)}>{content}</div>;
};

export default Badge;
