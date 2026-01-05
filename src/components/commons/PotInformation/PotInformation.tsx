import {
  ComputerIcon,
  DateRangeIcon,
  FlagIcon,
  SupervisedUserCircle,
  WebTrafficIcon,
} from "@assets/svgs";
import {
  container,
  dividerStyle,
  elementContainer,
  elementContentStyle,
  elementTitleStyle,
  gridContainer,
} from "./PotInformation.style";

interface PotInformationProps {
  potStartDate: string;
  potEndDate: string;
  deadline: string;
  potModeOfOperation: string;
  recruitmentDetails: string;
  potLan: string;
}

const PotInformation: React.FC<PotInformationProps> = ({
  potStartDate,
  potEndDate,
  deadline,
  potModeOfOperation,
  recruitmentDetails,
  potLan,
}: PotInformationProps) => {
  const elementLabels = [
    {
      icon: FlagIcon,
      label: "시작 날짜",
      content: deadline.split("-").join("."),
    },
    { icon: WebTrafficIcon, label: "진행 방식", content: potModeOfOperation },
    {
      icon: SupervisedUserCircle,
      label: "모집 파트",
      content: recruitmentDetails,
    },
    {
      icon: DateRangeIcon,
      label: "예상 기간",
      content: `${potStartDate} - ${potEndDate}`,
    },
  ];

  return (
    <div css={container}>
      <div css={dividerStyle} />
      <div css={gridContainer}>
        {elementLabels.map((element) => {
          const LabelIcon = element.icon;
          return (
            <div css={elementContainer} key={element.label}>
              <LabelIcon />
              <p css={elementTitleStyle}>{element.label}</p>
              <p css={elementContentStyle}>{element.content}</p>
            </div>
          );
        })}
      </div>
      <div css={elementContainer}>
        <ComputerIcon />
        <p css={elementTitleStyle}>사용 언어</p>
        <p css={elementContentStyle}>{potLan}</p>
      </div>
      <div css={dividerStyle} />
    </div>
  );
};

export default PotInformation;
