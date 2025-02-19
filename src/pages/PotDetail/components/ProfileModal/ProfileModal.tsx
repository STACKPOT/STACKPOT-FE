import { ExplainModal } from "@components/index";
import { container, profileStyle, nicknameStyle } from "./ProfileModal.style";
import { roleImages } from "@constants/roleImage";
import useApplyPot from "apis/hooks/pots/useApplyPot";
import { Role } from "types/role";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

interface ProfileModalProps {
    type: "apply" | "member"
    potRole: Role;
    nickname: string;
    potId?: number;
    userId?: number;
    onButtonClick?: () => void;
    onCancelModal: () => void;
}
const ProfileModal: React.FC<ProfileModalProps> = ({ type, potRole, nickname, potId, userId, onButtonClick, onCancelModal }: ProfileModalProps) => {
    const navigate = useNavigate();
    const { mutate, isPending } = useApplyPot();
    const handleApply = () => {
        if (potId) {
            mutate(
                { potId: potId, body: { potRole: potRole } },
                {
                    onSuccess: () => {
                        onButtonClick && onButtonClick();
                        onCancelModal();
                    }
                })

        }
    }
    const handleMemberProfile = () => {
        if (userId) {
            navigate(`${routes.userProfile}/${userId}`);
            onCancelModal();
        }
    }

    return (
        <ExplainModal
            type="profile"
            title={(type === "apply" && `이 팟에 지원할까요?\n팟 게시자가 회원님의 프로필을 확인할 수 있어요.`) || `나의 팟 지원자의 프로필이에요.\n지원자 마이페이지로 이동할까요?`}
            buttonText={(type === "apply" && "지원하기") || "지원자 활동 더보기"}
            disabled={isPending}
            onButtonClick={(type === "apply" && handleApply) || handleMemberProfile}
            onCancel={onCancelModal}>
            <div css={container}>
                <img css={profileStyle} src={roleImages[potRole]} alt="profile" />
                <p css={nicknameStyle}>{nickname}</p>
            </div>
        </ExplainModal>
    )
}
export default ProfileModal;