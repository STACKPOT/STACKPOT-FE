import { useNavigate, useParams } from "react-router-dom";
import {
  contentContainer,
  introductionStyle,
  nicknameStyle,
  profileContainer,
  profileStyle,
} from "./UserPageProfile.style";
import TemperatureBar from "@components/commons/TemperatureBar/TemperatureBar";
import useGetUsersInfo from "apis/hooks/users/useGetUsersInfo";
import { roleImages } from "@constants/roleImage";
import routes from "@constants/routes";

const UserPageProfile: React.FC = () => {
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();

  if (!userId) {
    return <div>유효한 유저 ID가 필요합니다.</div>;
  }

  const UserId = Number(userId);

  const { data } = useGetUsersInfo({
    userId: UserId,
  });

  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  const nickname = data?.nickname || "사용자";
  const introduction = data?.userIntroduction || "소개가 없습니다.";
  const temperature = data?.userTemperature ?? 0;
  const role = data?.role || "FRONTEND";
  const profileImage = roleImages[role];

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
