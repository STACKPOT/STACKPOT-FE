import { FireIcon, PolygonIcon } from "@assets/svgs";
import { container, temperatureBase, temperatureRange, toolTip, textStyle, toolTipContainer } from "./TemperatureBar.style";

interface TemperatureProps {
  temperature: number;
}

const TemperatureBar: React.FC<TemperatureProps> = ({ temperature }) => {
  return (
    <>
      <div css={container}>
        <div css={toolTipContainer(0, temperature)}>
           <div css={toolTip}>
               <div css={textStyle}>
                  {temperature}℃
                  <FireIcon />
               </div>
            </div>
          <PolygonIcon />
        </div>
        <div css={temperatureBase}>
            <div css={temperatureRange(temperature)} />
        </div>
      </div>
    </>
  );
};

export default TemperatureBar;