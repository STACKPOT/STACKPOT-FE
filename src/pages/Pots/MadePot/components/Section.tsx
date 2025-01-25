import { PotIcon } from "@assets/svgs";
import { potIconStyle, potsContainer, sectionContainer, titleContainer, titleStyle } from "./Section.style";

interface SectionProps {
    children: React.ReactNode;
    title: string;
}
const Section: React.FC<SectionProps> = ({ children, title }: SectionProps) => {
    return (
        <div css={sectionContainer}>
            <div css={titleContainer}>
                <h1 css={titleStyle}>{title}</h1>
                <PotIcon css={potIconStyle} />
            </div>
            <div css={potsContainer}>
                {children}
            </div>
        </div>
    )
}
export default Section;