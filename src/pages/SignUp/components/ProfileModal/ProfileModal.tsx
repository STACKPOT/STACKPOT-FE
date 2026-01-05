import { Button, ExplainModal } from "@components/index";
import {
  buttonStyle,
  contentStyle,
  imageStyle,
  inputContainer,
  inputStyle,
  modalStyle,
  nicknameInputContainer,
  profileContainer,
  supportingTextStyle,
} from "./ProfileModal.style";
import { useState } from "react";
import useGetNickname from "apis/hooks/users/useGetNickname";
import { useAuthStore } from "stores/useAuthStore";
import usePostNickname from "apis/hooks/users/usePostNickname";
import { SproutImage } from "@assets/images";
interface ProfileModalProps {
  onModalCancel: () => void;
  onConfirm: () => void;
}
const ProfileModal: React.FC<ProfileModalProps> = ({
  onModalCancel,
  onConfirm,
}: ProfileModalProps) => {
  const { mutate: getNickname, isPending } = useGetNickname();
  const { mutate: postNickname } = usePostNickname();

  const setNicknameStore = useAuthStore((s) => s.setNickname);
  const nickname = useAuthStore((s) => s.nickname);

  const [showEditWarning, setShowEditWarning] = useState(false);

  const handleClick = () => {
    getNickname(undefined, {
      onSuccess: (response) => {
        if (response.result?.nickname) {
          setNicknameStore(response.result.nickname);
          setShowEditWarning(false);
        }
      },
    });
  };

  const handleConfirm = () => {
    if (nickname) {
      postNickname(nickname, {
        onSuccess: () => {
          onConfirm();
        },
      });
    }
  };

  return (
    <ExplainModal
      type="normal"
      centerTitle={true}
      title={`시작하기 전 닉네임을 만들어 볼까요?`}
      buttonText="저장하기"
      onButtonClick={handleConfirm}
      onCancel={onModalCancel}
      customContainerStyle={modalStyle}
    >
      <div css={profileContainer}>
        <img src={SproutImage} css={imageStyle} alt="sprout" />
        <p css={contentStyle}>나는 무슨 새싹이 될까요?</p>
        <div css={nicknameInputContainer}>
          <div css={inputContainer}>
            <input
              readOnly
              placeholder="닉네임 생성하기를 눌러 주세요"
              css={inputStyle(nickname.length > 0)}
              value={nickname}
              onClick={() => {
                setShowEditWarning(true);
              }}
            />

            <Button
              css={buttonStyle}
              onClick={handleClick}
              disabled={isPending}
            >
              {nickname.length < 1 ? "닉네임 생성하기" : "다시 생성하기"}
            </Button>
          </div>
          {showEditWarning ? (
            <p css={supportingTextStyle("error")}>닉네임은 편집할 수 없어요</p>
          ) : (
            nickname && <p css={supportingTextStyle("complete")}>생성 완료!</p>
          )}
        </div>
      </div>
    </ExplainModal>
  );
};
export default ProfileModal;
