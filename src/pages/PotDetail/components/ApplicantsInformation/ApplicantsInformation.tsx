import { PotIcon } from "@assets/svgs";
import {
  container,
  descriptionStyle,
  titleBlueStyle,
  titleButtonContainer,
  titleContainer,
  titleIconStyle,
  titleStyle,
  headerContainer,
  listContainer,
  applicantContainer,
  profileStyle,
  nicknameStyle,
  dividerStyle,
} from "./ApplicantsInformation.style";
import { Button, CheckBox } from "@components/index";
import { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import MemberKakaoIdModal from "../MemberKakaoIdModal/MemberKakaoIdModal";
import StartPotModal from "../StartPotModal/StartPotModal";
import useGetPotApplicants from "apis/hooks/pots/useGetPotApplicants";
import { roleImages } from "@constants/roleImage";
import { GetPotApplicationResponse } from "apis/types/pot";
import { useSnackbar } from "providers";

interface ApplicantsInformationProps {
  potId: number;
}

const ApplicantsInformation = ({ potId }: ApplicantsInformationProps) => {
  const { showSnackbar } = useSnackbar();

  const [selectedApplicants, setSelectedApplicants] = useState<
    GetPotApplicationResponse[]
  >([]);
  const [showProfileMember, setShowProfileMember] =
    useState<GetPotApplicationResponse | null>(null);

  const [showStartModal, setShowStartModal] = useState<boolean>(false);
  const [showKakaoIdModal, setShowKakaoIdModal] = useState<boolean>(false);

  const handleStartPot = () => {
    if (selectedApplicants.length > 0) {
      setShowStartModal(true);
    } else {
      showSnackbar({
        message: "함께 진행할 사람을 선택해주세요.",
        severity: "warning",
      });
    }
  };
  const handleSelectApplicant = (applicant: GetPotApplicationResponse) => {
    if (selectedApplicants.includes(applicant)) {
      setSelectedApplicants((prev) =>
        prev.filter((member) => member.userId !== applicant.userId)
      );
    } else {
      setSelectedApplicants((prev) => [...prev, applicant]);
    }
  };

  const { data: applicants } = useGetPotApplicants(potId);

  return (
    <>
      {applicants && applicants.length > 0 ? (
        <div css={container}>
          <div css={dividerStyle} />
          <div css={headerContainer}>
            <div css={titleButtonContainer}>
              <div css={titleContainer}>
                <h1 css={titleStyle}>
                  나의 팟 지원자가 총{" "}
                  <span css={titleBlueStyle}>{applicants.length}</span>명 있어요
                </h1>
                <PotIcon css={titleIconStyle} />
              </div>
              <Button variant="action" onClick={handleStartPot}>
                팟 시작하기
              </Button>
            </div>
            <p css={descriptionStyle}>
              함께하고 싶은 지원자를 체크하고, 팟 시작하기를 누르면 팟이
              시작돼요.{" "}
            </p>
          </div>
          <div css={listContainer}>
            {applicants.map((applicant) => (
              <div key={applicant.userId} css={applicantContainer}>
                <CheckBox
                  selected={selectedApplicants.includes(applicant)}
                  onSelect={() => handleSelectApplicant(applicant)}
                />
                <img
                  css={profileStyle}
                  src={roleImages[applicant.potRole]}
                  onClick={() => setShowProfileMember(applicant)}
                  alt="profile"
                />
                <p
                  css={nicknameStyle}
                  onClick={() => setShowProfileMember(applicant)}
                >
                  {applicant.userNickname}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {showProfileMember && (
        <ProfileModal
          type="member"
          potRole={showProfileMember.potRole}
          nickname={showProfileMember.userNickname}
          userId={showProfileMember.userId}
          onCancelModal={() => setShowProfileMember(null)}
        />
      )}
      {showStartModal && (
        <StartPotModal
          potId={potId}
          selectedApplicants={selectedApplicants}
          onStartPotSuccess={() => setShowKakaoIdModal(true)}
          onCancelModal={() => setShowStartModal(false)}
        />
      )}
      {showKakaoIdModal && (
        <MemberKakaoIdModal
          potId={potId}
          onModalCancel={() => setShowKakaoIdModal(false)}
        />
      )}
    </>
  );
};
export default ApplicantsInformation;
