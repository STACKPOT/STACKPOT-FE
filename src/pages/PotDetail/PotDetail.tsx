import { bodyContainerStyle, containerStyle, contentStyle, dividerStyle, modalBackgroundStyle, sectionContainerStyle } from "./PotDetail.style";
import { MushRoomProfile } from "@assets/images";
import Modal from "@components/commons/Modal/Modal";
import memberListData from "mocks/memberListData";
import potMembersData from "mocks/potMembers";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PotInformation from "./components/PotInformation/PotInformation";
import ApplicantsInformation from "./components/ApplicantInformation/ApplicantsInformation";
import MemberInformation from "./components/MembersInformation/MembersInformation";
import StartPotModal from "./components/StartPotModal/StartPotModal";
import ProfileModal from "./components/ProfileModal/ProfileModal";
import PotHeader from "./components/PotHeader/PotHeader";
import ProfileInformation from "./components/ProfileInformation/ProfileInformation";
import MemberKakaoIdModal from "./components/MemberKakaoIdModal/MemberKakaoIdModal";
import ApplyStackModal from "./components/ApplyStackModal/ApplyStackModal";

const PotDetail = () => {
    const navigate = useNavigate();

    const [showStartModal, setShowStartModal] = useState<boolean>(false);
    const [showApplyStackModal, setShowApplyStackModal] = useState<boolean>(false);
    const [showApplyModal, setShowApplyModal] = useState<boolean>(false);
    const [showCancelApplyModal, setShowCancelApplyModal] = useState<boolean>(false);
    const [showKakaoIdModal, setShowKakaoIdModal] = useState<boolean>(false);

    const [isApplied, setIsApplied] = useState<boolean>(false);
    const [isMyPot, setIsMyPot] = useState<boolean>(true);
    const [isFinished, setIsFinished] = useState<boolean>(false);

    const [applicants, setApplicants] = useState<{ id: number; profileImage: string; nickname: string, stack: string, kakaoId: string }[]>(memberListData);
    const [selectedApplicants, setSelectedApplicants] = useState<typeof applicants[0][]>([]);
    const [selectedApplyStack, setSelectedApplyStack] = useState<string | null>(null);
    const [showProfileMember, setShowProfileMember] = useState<{ id: number; profileImage: string; nickname: string } | null>(null);
    const [potMembers, setPotMembers] = useState<{ id: number; profileImage: string, nickname: string }[]>(potMembersData);
    const { potId } = useParams();

    const handleShowProfile = (member: typeof showProfileMember) => {
        setShowProfileMember(member);
    }
    const handleEdit = () => {
        // todo: 수정 페이지로 이동
    }
    const handleSelect = (applicant: typeof applicants[0]) => {
        if (selectedApplicants.includes(applicant)) {
            setSelectedApplicants((prev) => prev.filter((member) => member.id !== applicant.id))
        }
        else {
            setSelectedApplicants((prev) => [...prev, applicant])
        }
    }
    const handleShareLink = () => {
        // todo: 링크 공유하기 로직
    }

    const handleApplyNext = () => {
        if (selectedApplyStack) {
            setShowApplyStackModal(false);
            setShowApplyModal(true);
        }
    }
    const handleApplyConfirm = () => {
        // todo: 지원하기 api
        setShowApplyModal(false)
        setIsApplied(true)
    }
    const handleCancelApplyModalConfirm = () => {
        // todo: 지원 취소하기 api
        setIsApplied(false);
        setShowCancelApplyModal(false);
    }
    const handleStartPotConfirm = () => {
        // todo: 팟 시작 api
        setShowStartModal(false);
        setShowKakaoIdModal(true);
    }
    const handleShowProfileConfirm = () => {
        setShowProfileMember(null)
        // todo: 해당 이용자 페이지로 이동
    }

    return (
        <main css={containerStyle}>
            <div css={bodyContainerStyle}>
                <div css={sectionContainerStyle}>
                    <PotHeader
                        title="제목을 길게 작성할 경우에는 이렇게 돼요 두줄은 이렇게 보여요"
                        isMyPot={isMyPot}
                        isApplied={isApplied}
                        isFinished={isFinished}
                        onClickBack={() => navigate(-1)}
                        onApply={() => setShowApplyStackModal(true)}
                        onCancelApply={() => setShowCancelApplyModal(true)}
                        onEdit={handleEdit} />
                    <ProfileInformation
                        nickname="아아 마시는 버섯"
                        profileImage={MushRoomProfile}
                        dday={5} />
                    <div css={dividerStyle} />
                </div>
                <div css={sectionContainerStyle}>
                    <PotInformation
                        startDate="2025.2.18"
                        period="단기/3개월"
                        method="온라인"
                        stacks="프론트엔드(2), 디자이너(3)"
                        languages="React, Javascripts" />
                    <div css={dividerStyle} />
                </div>
                <p css={contentStyle}>{`본문 내용입니다\n본문 내용입니다\n본문 내용입니다`}</p>
            </div>

            {((isMyPot && applicants.length > 0) || isFinished) && <div css={dividerStyle} />}
            {isMyPot && applicants.length > 0 && !isFinished &&
                <ApplicantsInformation
                    applicants={applicants}
                    selectedApplicants={selectedApplicants}
                    onClickApplicantMore={(member) => handleShowProfile(member)}
                    onSelectApplicant={(member) => handleSelect(member)}
                    onStartPot={() => setShowStartModal(true)} />
            }
            {isFinished &&
                <MemberInformation
                    potMembers={potMembers}
                    onClickMore={(member) => handleShowProfile(member)}
                    onShareLink={handleShareLink} />
            }

            {showCancelApplyModal &&
                <div css={modalBackgroundStyle}>
                    <Modal title="지원을 취소하시겠어요?"
                        message="팟 게시자는 지원자를 팟에 추가할 수 없게 됩니다."
                        onConfirm={handleCancelApplyModalConfirm}
                        onCancel={() => setShowCancelApplyModal(false)} />
                </div>}
            {showStartModal &&
                <StartPotModal
                    selectedApplicants={selectedApplicants}
                    onStart={handleStartPotConfirm}
                    onCancelModal={() => setShowStartModal(false)} />
            }
            {showProfileMember &&
                <ProfileModal
                    type="member"
                    profileImage={showProfileMember.profileImage}
                    nickname={showProfileMember.nickname}
                    onButtonClick={handleShowProfileConfirm}
                    onCancelModal={() => setShowProfileMember(null)} />
            }
            {showApplyStackModal &&
                <ApplyStackModal
                    selectedStack={selectedApplyStack}
                    onSelectStack={(stack) => setSelectedApplyStack(stack)}
                    onClickNext={handleApplyNext}
                    onModalCancel={() => setShowApplyStackModal(false)} />
            }
            {showApplyModal &&
                <ProfileModal
                    type="apply"
                    profileImage={MushRoomProfile}
                    nickname="아아 마시는 버섯"
                    onButtonClick={handleApplyConfirm}
                    onCancelModal={() => setShowApplyModal(false)} />
            }
            {showKakaoIdModal &&
                <MemberKakaoIdModal
                    members={selectedApplicants}
                    onModalCancel={() => setShowKakaoIdModal(false)} />}
        </main>
    )
}

export default PotDetail;