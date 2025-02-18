import { Role } from "types/role";
import { closeButtonStyle, containerStyle, modalBackgroundStyle, nicknameStyle, profileContainer, profileStyle, titleStyle } from "./ApplyProfileModal.style";
import { CloseIcon } from "@assets/svgs";
import { roleImages } from "@constants/roleImage";

interface ApplyProfileModalProps {
  potRole: Role;
  useNickname: string;
  onCancel: () => void;
}
const ApplyProfileModal = ({ potRole, useNickname, onCancel }: ApplyProfileModalProps) => {
  return (
    <div css={modalBackgroundStyle}>
      <div css={containerStyle}>
        <CloseIcon css={closeButtonStyle} type="button" onClick={onCancel} />
        <p css={titleStyle}>{`지원이 완료되었습니다.\n팟 게시자가 회원님의 프로필을 확인할 수 있어요.`}</p>
        <div css={profileContainer}>
          <img css={profileStyle} src={roleImages[potRole]} />
          <p css={nicknameStyle}>{useNickname}</p>
        </div>
      </div>
    </div>
  )
}

export default ApplyProfileModal;