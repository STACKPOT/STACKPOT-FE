import {
  elementContainer,
  elementContentStyle,
  elementTitleStyle,
  gridContainer,
} from "./PotInformation.style";

interface PotInformationProps {
  startDate: string;
  period: string;
  method: string;
  stacks: string;
  languages: string;
  recruitmentDeadline: string;
}

const PotInformation: React.FC<PotInformationProps> = ({
  startDate,
  period,
  method,
  stacks,
  languages,
  recruitmentDeadline,
}: PotInformationProps) => {
  const elementList: { title: string; content: string }[] = [
    { title: "모집 마감", content: recruitmentDeadline },
    { title: "시작 날짜", content: startDate },
    { title: "진행 방식", content: method },
    { title: "예상 기간", content: period },
    { title: "모집 파트", content: stacks },
    { title: "사용 언어", content: languages },
  ];

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
