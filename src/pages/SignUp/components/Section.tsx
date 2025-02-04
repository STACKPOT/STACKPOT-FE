import { PotIcon } from "@assets/svgs";
import {
  titleStyle,
  potIconStyle,
  container,
  descriptionStyle,
  titleContainer,
} from "./Section.style";

interface SectionProps {
  title: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
}: SectionProps) => {
  return (
    <div css={container}>
      <div css={titleContainer}>
        <h1 css={titleStyle}>{title}</h1>
        <PotIcon css={potIconStyle} />
      </div>
      <p css={descriptionStyle}>{description} </p>
    </div>
  );
};
export default Section;
