import { PotIcon } from "@assets/svgs";
import { container, descriptionStyle, titleBlueStyle, titleButtonContainer, titleContainer, titleIconStyle, titleStyle, headerContainer, listContainer, buttonStyle, applicantContainer, profileStyle, nicknameStyle } from "./ApplicantsInformation.style"
import { CheckBox } from "@components/index";

interface ApplicantsInformationProps {
    applicants: { id: number; profileImage: string; nickname: string, stack: string, kakaoId: string }[];
    selectedApplicants: { id: number; profileImage: string; nickname: string, stack: string, kakaoId: string }[];
    onClickApplicantMore: (applicant: { id: number; profileImage: string; nickname: string, stack: string }) => void;
    onSelectApplicant: (applicant: { id: number; profileImage: string; nickname: string, stack: string, kakaoId: string }) => void;
    onStartPot: () => void;
}
const ApplicantsInformation: React.FC<ApplicantsInformationProps> = ({ applicants, selectedApplicants, onClickApplicantMore, onSelectApplicant, onStartPot }: ApplicantsInformationProps) => {
    return (
        <div css={container}>
            <div css={headerContainer}>
                <div css={titleButtonContainer}>
                    <div css={titleContainer}>
                        <h1 css={titleStyle}>나의 팟 지원자가 총 <span css={titleBlueStyle}>{applicants.length}</span>명 있어요</h1>
                        <PotIcon css={titleIconStyle} />
                    </div>
                    <button css={buttonStyle} disabled={selectedApplicants.length < 1} onClick={onStartPot}>팟 시작하기</button>
                </div>
                <p css={descriptionStyle}>함께하고 싶은 지원자를 체크하고, 팟 시작하기를 누르면 팟이 시작돼요. </p>
            </div>
            <div css={listContainer}>
                {applicants.map((applicant) =>
                    <div css={applicantContainer}>
                        <CheckBox selected={selectedApplicants.includes(applicant)} onSelect={() => onSelectApplicant(applicant)} />
                        <img css={profileStyle} src={applicant.profileImage} />
                        <p css={nicknameStyle}>{applicant.nickname}</p>
                    </div>
                )}
            </div>
        </div>
    )
}
export default ApplicantsInformation;