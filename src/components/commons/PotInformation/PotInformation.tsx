import {
  elementContainer,
  elementContentStyle,
  elementTitleStyle,
  gridContainer,
} from "./PotInformation.style";

interface PotInformationProps {
  elementList: { title: string; content: string }[],
}

const PotInformation: React.FC<PotInformationProps> = ({
  elementList
}: PotInformationProps) => {
  return (
    <div css={gridContainer}>
      {elementList.map((element, index) => (
        <div
          css={[
            elementContainer,
            index === elementList.length - 1 ? { gridColumn: "span 2" } : null,
          ]}
          key={element.title}
        >
          <p css={elementTitleStyle}>{element.title}</p>
          <p css={elementContentStyle}>{element.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PotInformation;
