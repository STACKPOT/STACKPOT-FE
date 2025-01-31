import { container, temperatureBase, temperatureRange } from "./TemperatureBar.style";

interface TemperatureProps {
  temperature: number;
}

const TemperatureBar: React.FC<TemperatureProps> = ({ temperature }) => {
  return (
    <>
      <div css={container}>
        <div css={temperatureBase}>
          <div css={temperatureRange(temperature)} />
        </div>
      </div>
    </>
  );
};

export default TemperatureBar;