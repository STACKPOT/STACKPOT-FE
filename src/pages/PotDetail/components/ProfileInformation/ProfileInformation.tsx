import { DdayBadge } from "@components/index";
import { container, profileStyle } from "./ProfileInformation.style";
import { nicknameStyle } from "../ProfileModal/ProfileModal.style";

interface ProfileInformationProps {
    nickname: string;
    profileImage: string;
    dday: number;
}
const ProfileInformation: React.FC<ProfileInformationProps> = ({ nickname, profileImage, dday }: ProfileInformationProps) => {
    return (
        <div css={container}>
            <img css={profileStyle} src={profileImage} alt="profile"/>
            <p css={nicknameStyle}>{nickname}</p>
            <DdayBadge days={dday} />
        </div>
    )
}
export default ProfileInformation;