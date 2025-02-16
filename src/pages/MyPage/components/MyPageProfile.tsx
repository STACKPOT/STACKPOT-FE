import { SetUpIcon } from "@assets/svgs";
import {
  contentContainer,
  introductionStyle,
  nicknameContainer,
  nicknameStyle,
  profileContainer,
  profileStyle,
  setUpIconStyle,
} from "./MyPageProfile.style";
import TemperatureBar from "@components/commons/TemperatureBar/TemperatureBar";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";
import useGetMyPage from "apis/hooks/users/useGetMyPage";
import { roleImages } from "@constants/roleImage";

const MyPageProfile: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useGetMyPage({ dataType: "pot" });

  const nickname = data?.nickname || "사용자";
  const userIntroduction = data?.userIntroduction || "소개가 없습니다.";
  const userTemperature = data?.userTemperature ?? 0;
  const role = data?.role || "FRONTEND";
  const profileImage = roleImages[role];

  const handleSetUp = () => {
    navigate(routes.setting);
  };

  return (
    <div css={profileContainer}>
      <img css={profileStyle} src={profileImage} alt="프로필 이미지" />
      <div css={contentContainer}>
        <div css={nicknameContainer}>
          <h1 css={nicknameStyle}>{nickname}</h1>
          <SetUpIcon type="button" css={setUpIconStyle} onClick={handleSetUp} />
        </div>
        <p css={introductionStyle}>{userIntroduction}</p>
        <TemperatureBar temperature={userTemperature} />
      </div>
    </div>
  );
};

export default MyPageProfile;
