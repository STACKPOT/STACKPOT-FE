import { FireIcon, Polygon } from "@assets/svgs";
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
        <Polygon />
        <div css={temperatureBase}>
            <div css={temperatureRange(temperature)}></div>
        </div>
      </div>
    </>
  );
};

export default TemperatureBar;