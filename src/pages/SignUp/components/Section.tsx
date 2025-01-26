import { PotIcon } from "@assets/svgs"
import { bodyContainer, titleStyle, potIconStyle, container, descriptionStyle, titleContainer } from "./Section.style"

interface SectionProps {
    children: React.ReactNode,
    title: string,
    description: string,
}

const Section: React.FC<SectionProps> = ({ children, title, description }: SectionProps) => {
    return (
        <div css={container}>
            <div css={titleContainer}>
                <h1 css={titleStyle}>{title}</h1>
                <PotIcon css={potIconStyle} />
            </div>
            <div css={bodyContainer}>
                <p css={descriptionStyle}>{description} </p>
                {children}
            </div>
        </div>
    )
}
export default Section;