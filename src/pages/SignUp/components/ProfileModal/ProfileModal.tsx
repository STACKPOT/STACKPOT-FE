import { Button, ExplainModal } from "@components/index";
import {
  buttonStyle,
  contentStyle,
  inputContianer,
  inputStyle,
  profileContainer,
  profileStyle,
} from "./ProfileModal.style";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { useState } from "react";
import useGetNickname from "apis/hooks/users/useGetNickname";
import usePostNickname from "apis/hooks/users/usePostNickname";
import { useAuthStore } from "stores/useAuthStore";

interface ProfileModalProps {
  role: Role;
  onModalCancel: () => void;
}
const ProfileModal: React.FC<ProfileModalProps> = ({
  role,
  onModalCancel,
}: ProfileModalProps) => {
  const profileImage = roleImages[role];
  const [nickname, setNickname] = useState<string>("");

  const { mutate: getNickname, isPending } = useGetNickname();
  const { mutate: postNickname } = usePostNickname();

  const setRole = useAuthStore((state) => state.setRole);

  const handleClick = () => {
    getNickname(role, {
      onSuccess: (response) => {
        if (response.result?.nickname) {
          setNickname(response.result.nickname);
        }
      },
    });
  };

  const handleConfirm = () => {
    postNickname(nickname);
    if (role) {
      setRole(role);
    }
  };

  return (
    <ExplainModal
      subtitle={`시작하기 전 닉네임을 만들어 볼까요?`}
      buttonText="저장하기"
      onButtonClick={handleConfirm}
      onCancel={onModalCancel}
    >
      <div css={profileContainer}>
        <img css={profileStyle} src={profileImage} alt="profile" />
        <p css={contentStyle}>
          나는 무슨 새싹이 될까요?
        </p>
        <div css={inputContianer}>
          <input
            readOnly
            placeholder="닉네임 생성하기를 눌러 주세요"
            css={inputStyle(nickname.length > 0)}
            value={nickname}
          />
          <Button css={buttonStyle} onClick={handleClick} disabled={isPending}>
            {nickname.length < 1 ? "닉네임 생성하기" : "다시 생성하기"}
          </Button>
        </div>
      </div>
    </ExplainModal>
  );
};
export default ProfileModal;
