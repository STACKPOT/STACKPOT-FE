import { LeftIcon } from "@assets/svgs";
import { backButtonIconStyle, backButtonStyle, container, titleContainer, titleStyle } from "./PotHeader.style";
import { Modal, PotButton } from "@components/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApplyStackModal from "../ApplyStackModal/ApplyStackModal";
import ProfileModal from "../ProfileModal/ProfileModal";
import { MushRoomProfile } from "@assets/images";

interface PotHeaderProps {
    title: string;
    isMyPot: boolean;
    isApplied: boolean;
    isFinished: boolean;
    onApplySuccess: () => void;
    onCancelApplySuccess: () => void;
}
const PotHeader: React.FC<PotHeaderProps> = ({ title, isMyPot, isApplied, isFinished, onApplySuccess, onCancelApplySuccess }: PotHeaderProps) => {
    const navigate = useNavigate();

    const [showCancelApplyModal, setShowCancelApplyModal] = useState<boolean>(false);
    const [showApplyStackModal, setShowApplyStackModal] = useState<boolean>(false);
    const [showApplyModal, setShowApplyModal] = useState<boolean>(false);

    const [selectedApplyStack, setSelectedApplyStack] = useState<string | null>(null);

    const handleEdit = () => {
        // todo: 팟 수정 페이지로 이동
    }
    const handleCancelApplyModalConfirm = () => {
        // todo: 지원 취소하기 api
        setShowCancelApplyModal(false);
        onCancelApplySuccess();
    }
    const handleApplyNext = (stack: string) => {
        setSelectedApplyStack(stack);
        setShowApplyModal(true);
    }
    const handleApplyConfirm = () => {
        setSelectedApplyStack(null);
        onApplySuccess();
    }

    return (
        <>
            <div css={container}>
                <div css={titleContainer}>
                    <button css={backButtonStyle} onClick={() => navigate(-1)}>
                        <LeftIcon css={backButtonIconStyle} />
                    </button>
                    <h1 css={titleStyle}>{title}</h1>
                </div>
                <PotButton
                    onClick={(isFinished && handleEdit) ||
                        (isMyPot && handleEdit) ||
                        (isApplied && (() => setShowCancelApplyModal(true))) ||
                        (() => setShowApplyStackModal(true))}>
                    {(isFinished && "팟 소개 수정") ||
                        (isMyPot && "수정") ||
                        (isApplied && "지원 취소하기") ||
                        "이 팟에 지원하기"
                    }</PotButton>
            </div>
            {showCancelApplyModal &&
                <Modal title="지원을 취소하시겠어요?"
                    message="팟 게시자는 지원자를 팟에 추가할 수 없게 됩니다."
                    onConfirm={handleCancelApplyModalConfirm}
                    onCancel={() => setShowCancelApplyModal(false)} />
            }
            {showApplyStackModal &&
                <ApplyStackModal
                    onClickNext={(stack) => handleApplyNext(stack)}
                    onModalCancel={() => setShowApplyStackModal(false)} />
            }
            {showApplyModal && selectedApplyStack &&
                <ProfileModal
                    type="apply"
                    profileImage={MushRoomProfile}
                    nickname="아아 마시는 버섯"
                    onButtonClick={handleApplyConfirm}
                    onCancelModal={() => setShowApplyModal(false)} />
            }
        </>
    )
}
export default PotHeader;