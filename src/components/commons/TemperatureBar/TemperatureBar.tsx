import { container, fireIconStyle, temperatureBarContainer, temperatureBase, temperatureRange, titleContainer, titleStyle, valueContainer, valueStyle } from "./TemperatureBar.style";
import { FireIcon } from "@assets/svgs";
import InformationPopper from "../InformationPopper/InformationPopper";

interface TemperatureProps {
  temperature: number;
}

const TemperatureBar: React.FC<TemperatureProps> = ({ temperature }) => {
  return (
    <>
      <div css={container}>
        <div css={titleContainer}>
          <p css={titleStyle}>나의 온도</p>
          <InformationPopper marginBottom="1.75rem">피드 작성, 프로젝트를 매칭, 완료하면 온도가 올라가요. 높은 온도를 유지해보세요!</InformationPopper>
        </div>
        <div css={temperatureBarContainer}>
          <div css={temperatureBase}>
            <div css={temperatureRange(temperature)} />
          </div>
        </div>
        <div css={valueContainer}>
          <p css={valueStyle}>{`${temperature}°C`}</p>
          <FireIcon css={fireIconStyle} />
        </div>
      </div>

    </>
  );
};

export default TemperatureBar;