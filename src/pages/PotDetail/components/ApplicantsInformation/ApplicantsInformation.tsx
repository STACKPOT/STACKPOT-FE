import { PotIcon } from "@assets/svgs";
import { container, descriptionStyle, titleBlueStyle, titleButtonContainer, titleContainer, titleIconStyle, titleStyle, headerContainer, listContainer, applicantContainer, profileStyle, nicknameStyle, dividerStyle } from "./ApplicantsInformation.style"
import { Button, CheckBox } from "@components/index";
import { useState } from "react";
import memberListData from "mocks/memberListData";
import ProfileModal from "../ProfileModal/ProfileModal";
import MemberKakaoIdModal from "../MemberKakaoIdModal/MemberKakaoIdModal";
import StartPotModal from "../StartPotModal/StartPotModal";


const ApplicantsInformation = () => {
    const [applicants, setApplicants] = useState<{ id: number; profileImage: string; nickname: string, stack: string, kakaoId: string }[]>(memberListData);
    const [selectedApplicants, setSelectedApplicants] = useState<typeof applicants>([]);
    const [showProfileMember, setShowProfileMember] = useState<{ id: number; profileImage: string; nickname: string } | null>(null);

    const [showStartModal, setShowStartModal] = useState<boolean>(false);
    const [showKakaoIdModal, setShowKakaoIdModal] = useState<boolean>(false);

    const handleStartPot = () => {
        if (selectedApplicants.length > 0) {
            setShowStartModal(true);
        }
    }
    const handleSelectApplicant = (applicant: typeof applicants[0]) => {
        if (selectedApplicants.includes(applicant)) {
            setSelectedApplicants((prev) => prev.filter((member) => member.id !== applicant.id))
        } else {
            setSelectedApplicants((prev) => [...prev, applicant])
        }
    }

    return (
        <>
            {applicants.length > 0 ?
                <div css={container}>
                    <div css={dividerStyle} />
                    <div css={headerContainer}>
                        <div css={titleButtonContainer}>
                            <div css={titleContainer}>
                                <h1 css={titleStyle}>나의 팟 지원자가 총 <span css={titleBlueStyle}>{applicants.length}</span>명 있어요</h1>
                                <PotIcon css={titleIconStyle} />
                            </div>
                            <Button variant="action" onClick={handleStartPot}>팟 시작하기</Button>
                        </div>
                        <p css={descriptionStyle}>함께하고 싶은 지원자를 체크하고, 팟 시작하기를 누르면 팟이 시작돼요. </p>
                    </div>
                    <div css={listContainer}>
                        {applicants.map((applicant) =>
                            <div css={applicantContainer} onClick={() => setShowProfileMember(applicant)}>
                                <CheckBox selected={selectedApplicants.includes(applicant)} onSelect={() => handleSelectApplicant(applicant)} />
                                <img css={profileStyle} src={applicant.profileImage} alt="profile" />
                                <p css={nicknameStyle}>{applicant.nickname}</p>
                            </div>
                        )}
                    </div>
                </div>
                : null}
            {showProfileMember &&
                <ProfileModal
                    type="member"
                    profileImage={showProfileMember.profileImage}
                    nickname={showProfileMember.nickname}
                    onCancelModal={() => setShowProfileMember(null)} />
            }
            {showStartModal &&
                <StartPotModal
                    selectedApplicants={selectedApplicants}
                    onStartPotSuccess={() => setShowKakaoIdModal(true)}
                    onCancelModal={() => setShowStartModal(false)} />
            }
            {showKakaoIdModal &&
                <MemberKakaoIdModal
                    members={selectedApplicants}
                    onModalCancel={() => setShowKakaoIdModal(false)} />
            }
        </>

    )
}
export default ApplicantsInformation;