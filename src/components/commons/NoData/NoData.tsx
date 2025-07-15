import { SerializedStyles } from "@emotion/react";
import Button from "../Button/Button";
import { noDataContainer, noDataTextStyle } from "./NoData.style";

interface NoDataProps {
  message: string;
  buttonText?: string;
  onClickButton?: () => void;
  containerStyle?: SerializedStyles;
}

const NoData: React.FC<NoDataProps> = ({
  message,
  buttonText,
  onClickButton,
  containerStyle,
}: NoDataProps) => {
  return (
    <div css={[noDataContainer, containerStyle]}>
      <p css={noDataTextStyle}>{message}</p>
      {buttonText && (
        <Button variant="cta" onClick={onClickButton}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default NoData;
