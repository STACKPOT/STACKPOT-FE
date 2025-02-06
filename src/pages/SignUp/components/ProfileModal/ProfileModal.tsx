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

interface ProfileModalProps {
  role: Role | undefined;
  onModalCancel: () => void;
}
const ProfileModal: React.FC<ProfileModalProps> = ({
  role,
  onModalCancel,
}: ProfileModalProps) => {
  const profileImage = roleImages[role];
  const [nickname, setNickname] = useState<string>("");

  const { mutate: getNickname, isPending } = useGetNickname(role);
  const { mutate: postNickname } = usePostNickname();

  const handleClick = () => {
    getNickname(role, {
      onSuccess: (response) => {
        setNickname(response.result);
      },
    });
  };

  const handleConfirm = () => {
    postNickname(nickname);
  };

  const roleDescription = {
    FRONTEND: "프론트엔드는 최상단에 보이는 강한 풍미를 지닌 버섯!",
    BACKEND: "백엔드는 껍질 속의 깊은 구조를 이해하는 양파!",
    PLANNING: "프로덕트 전반을 이해하는 기획자인 나는, 뿌리 채소인 당근!",
    DESIGN: "브로콜리는 풍성한 머리로 창의력을 발산하는 디자이너!",
  };

  const roleToVeggie = {
    FRONTEND: "버섯",
    BACKEND: "양파",
    PLANNING: "당근",
    DESIGN: "브로콜리",
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
