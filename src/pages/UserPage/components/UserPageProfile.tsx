import {
  contentContainer,
  introductionStyle,
  nicknameStyle,
  profileContainer,
  profileStyle,
} from "./UserPageProfile.style";
import TemperatureBar from "@components/commons/TemperatureBar/TemperatureBar";

interface UserPageProfileProps {
  profileImage: string;
  nickname: string;
  introduction: string;
  temperature: number;
}
const UserPageProfile: React.FC<UserPageProfileProps> = ({
  profileImage,
  nickname,
  introduction,
  temperature,
}: UserPageProfileProps) => {
  return (
    <div css={profileContainer}>
      <img css={profileStyle} src={profileImage} alt="profileImage" />
      <div css={contentContainer}>
        <h1 css={nicknameStyle}>{nickname}</h1>
        <p css={introductionStyle}>{introduction}</p>
        <TemperatureBar temperature={temperature} />
      </div>
    </div>
  );
};
export default UserPageProfile;
