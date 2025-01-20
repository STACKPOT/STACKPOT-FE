import { applicantInfoContainer, applicantInfoDescriptionStyle, applicantInfoTitleButtonContainer, applicantInfoTitleContainer, applicantInfoTitleIconStyle, applicantInfoTitleStyle, applicantInfoTopContainer, applicantListContainerStyle, bodyContainerStyle, containerStyle, contentStyle, dividerStyle, infoContainerStyle, infoContentStyle, infoElementContainerStyle, infoTitleStyle, leftButtonIconStyle, leftButtonStyle, modalBackgroundStyle, nicknameStyle, profileContainerStyle, profileStyle, sectionContainerStyle, titleContainerStyle, titleContentContainerStyle, titleStyle, startPotButtonStyle, membersInfoContainer, shareLinkButtonStyle } from "./PotDetail.style";
import { MushRoomProfile } from "@assets/images";
import { LeftIcon, PotIcon } from "@assets/svgs";
import Modal from "@components/commons/Modal/Modal";
import { ApplicantCard, DdayBadge, PotButton, PotMemberCard, ProfileModal, StartPotModal } from "@components/index";
import memberListData from "mocks/memberListData";
import potMembersData from "mocks/potMembers";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PotDetail = () => {
    const [showCancelModal, setShowCancelModal] = useState<boolean>(false);
    const [showStartModal, setShowStartModal] = useState<boolean>(false);
    const [showProfileModal, setShowProfileModal] = useState<boolean>(false);
    const [showApplyModal, setShowApplyModal] = useState<boolean>(false);

    const [applied, setApplied] = useState<boolean>(false);
    const [myPot, setMyPot] = useState<boolean>(true);
    const [finished, setFinished] = useState<boolean>(false);
    const [applicants, setApplicants] = useState<{ id: number; profileImage: string; nickname: string, stack: string }[]>(memberListData);
    const [selectedApplicants, setSelectedApplicants] = useState<number[]>([]);
    const [showProfileMember, setShowProfileMember] = useState<{ id: number; profileImage: string; nickname: string, stack: string } | null>(null);
    const [potMembers, setPotMembers] = useState<{ id: number; profileImage: string, nickname: string, evaluation: string, evaluationEmoji: string }[]>(potMembersData)
    const navigate = useNavigate();
    const { potId } = useParams();

    const handleBack = () => {
        navigate(-1);
    }
    const handleCancelReservation = () => {
        setShowCancelModal(true);
    }
    const handleStartPot = () => {
        setShowStartModal(true);
    }
    const handleShowProfile = (member: { id: number; profileImage: string; nickname: string, stack: string }) => {
        setShowProfileMember(member);
        setShowProfileModal(true);
    }
    const handleApply = () => {
        setShowApplyModal(true);
    }
    const handleEdit = () => {
        // todo: 수정 페이지로 이동
    }
    const handleDelete = () => {
        // todo: 삭제
    }
    const handleSelect = (id: number) => {
        if (selectedApplicants.includes(id)) {
            setSelectedApplicants((prev) => prev.filter((memberId) => id !== memberId))
        }
        else {
            setSelectedApplicants((prev) => [...prev, id])
        }
    }
    const handleShareLink = () => {
        // todo: 링크 공유하기 로직
    }


    const handleCancelModalConfirm = () => {
        setApplied(false);
        setShowCancelModal(false);
    }
    const handleStartPotConfirm = () => {
        setShowStartModal(false);
    }
    const handleApplyConfirm = () => {
        setShowApplyModal(false)
        setApplied(true)
    }
    const handleShowProfileConfirm = () => {
        setShowProfileModal(false)
        // todo: 해당 이용자 페이지로 이동
    }

    return (
        <main css={containerStyle}>
            <div css={bodyContainerStyle}>
                <div css={sectionContainerStyle}>
                    <div css={titleContainerStyle}>
                        <div css={titleContentContainerStyle}>
                            <button css={leftButtonStyle} onClick={handleBack}>
                                <LeftIcon css={leftButtonIconStyle} />
                            </button>
                            <h1 css={titleStyle}>AI 자동화 챗봇 어플 공부할 스터디원 모집</h1>
                        </div>
                        {!myPot && applied && !finished && <PotButton onClick={handleCancelReservation}>지원 취소하기</PotButton>}
                        {!myPot && !applied && !finished && <PotButton onClick={handleApply}>이 팟에 지원하기</PotButton>}
                        {myPot && !finished && <PotButton onClick={handleEdit}>수정</PotButton>}
                        {finished && <PotButton onClick={handleEdit}>팟 소개 수정</PotButton>}
                    </div>
                    <div css={profileContainerStyle}>
                        <img css={profileStyle} src={MushRoomProfile} />
                        <p css={nicknameStyle}>아아 마시는 버섯</p>
                        <DdayBadge days={5} />
                    </div>
                    <div css={dividerStyle} />
                </div>
                <div css={sectionContainerStyle}>
                    <div css={infoContainerStyle}>
                        <div css={infoElementContainerStyle}>
                            <div css={infoElementContainerStyle}>
                                <p css={infoTitleStyle}>시작 날짜</p>
                                <p css={infoContentStyle}>2025.2.18</p>
                            </div>
                            <div css={infoElementContainerStyle}>
                                <p css={infoTitleStyle}>예상 기간</p>
                                <p css={infoContentStyle}>단기/3개월</p>
                            </div>
                            <div css={infoElementContainerStyle}>
                                <p css={infoTitleStyle}>진행 방식</p>
                                <p css={infoContentStyle}>온라인</p>
                            </div>
                        </div>
                        <div css={infoElementContainerStyle}>
                            <p css={infoTitleStyle}>모집 분야</p>
                            <p css={infoContentStyle}>프론트엔드(2), 디자이너(3)</p>
                        </div>
                        <div css={infoElementContainerStyle}>
                            <p css={infoTitleStyle}>사용 언어</p>
                            <p css={infoContentStyle}>React, Javascripts</p>
                        </div>
                    </div>
                    <div css={dividerStyle} />
                </div>
                <p css={contentStyle}>안녕하세요</p>
            </div>
            {((myPot && applicants.length > 0) || finished) && <div css={dividerStyle} />}
            {myPot && applicants.length > 0 && !finished &&
                <div css={applicantInfoContainer}>
                    <div css={applicantInfoTopContainer}>
                        <div css={applicantInfoTitleButtonContainer}>
                            <div css={applicantInfoTitleContainer}>
                                <h1 css={applicantInfoTitleStyle}>나의 팟 지원자가 총 3명 있어요</h1>
                                <PotIcon css={applicantInfoTitleIconStyle} />
                            </div>
                            <button css={startPotButtonStyle} disabled={selectedApplicants.length < 1} onClick={handleStartPot}>팟 시작하기</button>
                        </div>
                        <p css={applicantInfoDescriptionStyle}>함께하고 싶은 지원자를 체크하고, 팟 시작하기를 누르면 팟이 시작돼요. </p>
                    </div>
                    <div css={applicantListContainerStyle}>
                        {applicants.map((member) =>
                            <ApplicantCard
                                selected={selectedApplicants.includes(member.id)}
                                profileImage={member.profileImage}
                                nickname={member.nickname}
                                onClickMore={() => handleShowProfile(member)}
                                onSelect={() => handleSelect(member.id)} />)}
                    </div>
                </div>
            }
            {finished &&
                <div css={membersInfoContainer}>
                    <div css={applicantInfoTitleButtonContainer}>
                        <div css={applicantInfoTitleContainer}>
                            <h1 css={applicantInfoTitleStyle}>나와 함께한 팀원들</h1>
                            <PotIcon css={applicantInfoTitleIconStyle} />
                        </div>
                        <button css={shareLinkButtonStyle} onClick={handleShareLink}>링크 공유하기</button>
                    </div>
                    {potMembers.map((member) =>
                        <PotMemberCard
                            profileImage={member.profileImage}
                            nickname={member.nickname}
                            evaluation={member.evaluation}
                            evaluationEmoji={member.evaluationEmoji} />)}
                </div>
            }

            {showCancelModal &&
                <div css={modalBackgroundStyle}>
                    <Modal title="지원을 취소하시겠어요?"
                        message="팟 게시자는 지원자를 팟에 추가할 수 없게 됩니다."
                        onConfirm={handleCancelModalConfirm}
                        onCancel={() => setShowCancelModal(false)} />
                </div>}
            {showStartModal &&
                <div css={modalBackgroundStyle}>
                    <StartPotModal title="이 멤버들로 팟을 시작할까요?"
                        buttonContent="마이페이지로 이동하기"
                        memberList={applicants.filter((member) => selectedApplicants.includes(member.id))}
                        onCancel={() => setShowStartModal(false)}
                        onClick={handleStartPotConfirm} />
                </div>}
            {showProfileModal && showProfileMember &&
                <div css={modalBackgroundStyle}>
                    <ProfileModal
                        title={`나의 팟 지원자의 프로필이에요.\n지원자 마이페이지로 이동할까요?`}
                        profileImage={MushRoomProfile}
                        nickname={showProfileMember?.nickname}
                        buttonContent="마이페이지로 이동하기"
                        onClick={handleShowProfileConfirm}
                        onCancel={() => setShowProfileModal(false)} />
                </div>}
            {showApplyModal &&
                <div css={modalBackgroundStyle}>
                    <ProfileModal
                        title={`이 팟에 지원할까요?\n팟 게시자가 회원님의 프로필을 확인할 수 있어요.`}
                        profileImage={MushRoomProfile}
                        nickname="아아 마시는 버섯"
                        buttonContent="지원하기"
                        onClick={handleApplyConfirm}
                        onCancel={() => setShowApplyModal(false)} />
                </div>
            }
        </main>
    )
}

export default PotDetail;