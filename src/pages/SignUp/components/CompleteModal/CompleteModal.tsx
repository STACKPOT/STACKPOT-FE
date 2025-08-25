import { SproutImage } from "@assets/images";
import { ExplainModal } from "@components/index";
import {
  bodyContainer,
  imageStyle,
  modalStyle,
  nicknameStyle,
} from "./CompleteModal.style";
import { useAuthStore } from "stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

interface CompleteModalProps {
  onModalCancel: () => void;
}

function CompleteModal({ onModalCancel }: CompleteModalProps) {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate(routes.home);
  };
  const nickname = useAuthStore((s) => s.nickname);

  return (
    <ExplainModal
      type="normal"
      centerTitle={true}
      title={`가입이 완료되었어요! 완성된 나의 프로필이에요.`}
      buttonText="메인으로"
      onButtonClick={handleConfirm}
      onCancel={onModalCancel}
      customContainerStyle={modalStyle}
    >
      <div css={bodyContainer}>
        <img src={SproutImage} css={imageStyle} alt="sprout" />
        <p css={nicknameStyle}>{nickname}</p>
      </div>
    </ExplainModal>
  );
}

export default CompleteModal;
