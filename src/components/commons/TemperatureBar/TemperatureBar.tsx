import { container, fireIconStyle, popoverContainer, popoverContentStyle, popoverPinStyle, temperatureBarContainer, temperatureBase, temperatureInformationIconStyle, temperatureRange, titleContainer, titleStyle, valueContainer, valueStyle } from "./TemperatureBar.style";
import { FireIcon, InfoIcon, PinIcon } from "@assets/svgs";
import { Popper } from "@mui/material";
import { useState } from "react";

interface TemperatureProps {
  temperature: number;
}

const TemperatureBar: React.FC<TemperatureProps> = ({ temperature }) => {
  const [anchorEl, setAnchorEl] = useState<SVGSVGElement | null>(null);
  const openPopover = Boolean(anchorEl)
  const handleClickInformation = (e: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget)
  }

  return (
    <>
      <div css={container}>
        <div css={titleContainer}>
          <p css={titleStyle}>나의 온도</p>
          <InfoIcon type="button" css={temperatureInformationIconStyle} onClick={handleClickInformation} />
          <Popper
            open={openPopover}
            anchorEl={anchorEl}
            placement="top"
            modifiers={[
              {
                name: 'flip',
                enabled: false,
                options: {
                  altBoundary: true,
                  rootBoundary: 'document',
                  padding: 8,
                },
              },
            ]}>
            <div css={popoverContainer}>
              <p css={popoverContentStyle}>피드 작성, 프로젝트를 매칭, 완료하면 온도가 올라가요. 높은 온도를 유지해보세요!</p>
              <PinIcon css={popoverPinStyle} />
            </div>
          </Popper>
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