import { FireIcon, PolygonIcon } from "@assets/svgs";
import { container, temperatureBase, temperatureRange, toolTip, textStyle } from "./TemperatureBar.style";

interface TemperatureProps {
  temperature: number;
}

const TemperatureBar: React.FC<TemperatureProps> = ({ temperature }) => {
  return (
    <>
      <div css={container}>
        <div css={toolTip}>
            <div css={textStyle}>
                {temperature}℃
                <FireIcon />
            </div>
        </div>
        <PolygonIcon />
        <div css={temperatureBase}>
            <div css={temperatureRange(temperature)} />
        </div>
      </div>
    </>
  );
};

export default TemperatureBar;