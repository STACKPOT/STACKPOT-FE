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
import { roleDescription, roleToVeggie } from "@constants/profileRole";

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
          setNickname(nickname);
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
      subtitle={`가입 전, 닉네임을 만들어 주세요.
        STACKPOT은 네 가지의 재료 안에서 랜덤 닉네임을 부여받아요.`}
      buttonText="이렇게 할래요"
      onButtonClick={handleConfirm}
      onCancel={onModalCancel}
    >
      <div css={profileContainer}>
        <img css={profileStyle} src={profileImage} alt="profile" />
        <p css={contentStyle}>
          {roleDescription[role]} <br />
          나는 무슨 {roleToVeggie[role]}이 될까요?
        </p>
        <div css={inputContianer}>
          <input
            readOnly
            placeholder="닉네임 생성하기를 눌러 주세요"
            css={inputStyle}
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
