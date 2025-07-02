import { PotIcon } from "@assets/svgs";
import {
  container,
  descriptionStyle,
  titleBlueStyle,
  titleContainer,
  titleIconStyle,
  titleStyle,
  headerContainer,
  listContainer,
  startPotButtonStyle,
} from "./ApplicantsInformation.style";
import { Button, ExplainModal, MemberCard } from "@components/index";
import { useState } from "react";
import MemberKakaoIdModal from "../MemberKakaoIdModal/MemberKakaoIdModal";
import StartPotModal from "../StartPotModal/StartPotModal";
import useGetPotApplicants from "apis/hooks/pots/useGetPotApplicants";
import { GetPotApplicationResponse } from "apis/types/pot";
import { useSnackbar } from "providers";
import applicantsListData from "mocks/applicantsData";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

interface ApplicantsInformationProps {
  potId: number;
}

const ApplicantsInformation = ({ potId }: ApplicantsInformationProps) => {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

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

  const handleMemberProfile = () => {
    if (showProfileMember) {
      navigate(`${routes.userProfile}/${showProfileMember.userId}`);
    }
  };

  //const { data: applicants } = useGetPotApplicants(potId);
  const applicants = applicantsListData;

  return (
    <>
      {applicants && applicants.length > 0 ? (
        <div css={container}>
          <div css={headerContainer}>
            <div css={titleContainer}>
              <h1 css={titleStyle}>
                나의 팟 지원자가 총{" "}
                <span css={titleBlueStyle}>{applicants.length}</span>명 있어요
              </h1>
              <PotIcon css={titleIconStyle} />
            </div>
            <p css={descriptionStyle}>
              {
                "함께하고 싶은 지원자를 체크하고, 팟 시작하기를 누르면 팟이 시작돼요.\n프로필 사진을 누르면 지원자 프로필을 확인할 수 있어요."
              }
            </p>
          </div>
          <div css={listContainer}>
            {applicants.map((applicant) => (
              <MemberCard
                userId={applicant.userId}
                nickname={applicant.userNickname}
                role={applicant.potRole}
                type="selection"
                selected={selectedApplicants.includes(applicant)}
                onClick={() => handleSelectApplicant(applicant)}
                onProfileClick={() => setShowProfileMember(applicant)}
              />
            ))}
          </div>
          <Button
            variant="full"
            customStyle={startPotButtonStyle}
            onClick={handleStartPot}
          >
            팟 시작하기
          </Button>
        </div>
      ) : null}
      {showProfileMember && (
        <ExplainModal
          type="profile"
          title={`지원자의 프로필을 살펴보세요!${"\n"}다양한 활동이 궁금하신가요?`}
          buttonText="지원자 활동 더보기"
          role={showProfileMember.potRole}
          nickname={showProfileMember.userNickname}
          onButtonClick={handleMemberProfile}
          onCancel={() => setShowProfileMember(null)}
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
      {showKakaoIdModal && <MemberKakaoIdModal potId={potId} />}
    </>
  );
};
export default ApplicantsInformation;
