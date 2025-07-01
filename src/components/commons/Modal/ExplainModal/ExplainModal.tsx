import { CloseIcon } from "@assets/svgs";
import {
  buttonStyle,
  closeButtonStyle,
  containerStyle,
  contentContainer,
  modalBackgroundStyle,
  profileContentStyle,
  profileContainerStyle,
  profileNicknameStyle,
  profileStyle,
  titleContentContainerStyle,
  titleStyle,
} from "./ExplainModal.style";
import Button from "@components/commons/Button/Button";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { SerializedStyles } from "@emotion/react";

interface ExplainModalProps {
  type?: "normal" | "profile" | "custom";
  title?: string;
  children?: React.ReactNode;
  buttonText: string;
  disabled?: boolean;
  role?: Role;
  nickname?: string;
  customContainerStyle?: SerializedStyles;
  onButtonClick: () => void;
  onCancel: () => void;
}

const ExplainModal: React.FC<ExplainModalProps> = ({
  type = "normal",
  title,
  children,
  buttonText,
  disabled,
  role,
  nickname,
  customContainerStyle,
  onButtonClick,
  onCancel,
}: ExplainModalProps) => {
  return (
    <div css={modalBackgroundStyle}>
      <div
        css={containerStyle(
          type === "profile" ? profileContainerStyle : customContainerStyle
        )}
      >
        <CloseIcon type="button" css={closeButtonStyle} onClick={onCancel} />
        {type === "custom" ? (
          children
        ) : (
          <div css={titleContentContainerStyle(type)}>
            {title && <p css={titleStyle}>{title}</p>}
            <div css={contentContainer(customContainerStyle !== undefined)}>
              {type === "normal" ? (
                children
              ) : (
                <div css={profileContentStyle}>
                  <img
                    css={profileStyle}
                    src={role ? roleImages[role] : undefined}
                    alt={role}
                  />
                  <p css={profileNicknameStyle}>{nickname}</p>
                </div>
              )}
            </div>
          </div>
        )}
        <Button
          variant="action"
          customStyle={buttonStyle}
          onClick={onButtonClick}
          disabled={disabled}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
export default ExplainModal;
