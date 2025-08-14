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
import { roleImages } from "@constants/roleImage";
import { categoryText } from "@constants/categories";
import { Badge } from "@components/index";
import { Role } from "types/role";
import useGetProfile from "apis/hooks/users/useGetProfile";

type Props = { userId?: number, viewerIsOwner?: boolean };

const MyPageProfile: React.FC<Props> = ({ userId, viewerIsOwner }) => {
  const navigate = useNavigate();
  const { data } = useGetProfile(userId);

  const nickname = data?.nickname || "사용자";
  const userIntroduction = data?.userIntroduction || "소개가 없습니다.";
  const userTemperature = data?.userTemperature ?? 0;
  const role = data?.role || "FRONTEND";
  const profileImage = roleImages[role as Role];

  const handleSetUp = () => {
    navigate(routes.setting);
  };

  return (
    <div css={profileContainer}>
      <img css={profileStyle} src={profileImage} alt="프로필 이미지" />
      <div css={contentContainer}>
        <div css={nicknameContainer}>
          <h1 css={nicknameStyle}>{nickname} <Badge content={categoryText[role]} /></h1>
          {viewerIsOwner && (
            <SetUpIcon type="button" css={setUpIconStyle} onClick={handleSetUp} />
          )}
        </div>
        <div css={introductionStyle}>{userIntroduction}</div>
        <TemperatureBar temperature={userTemperature} />
      </div>
    </div>
  );
};

export default MyPageProfile;
