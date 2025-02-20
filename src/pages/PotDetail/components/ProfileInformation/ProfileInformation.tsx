import { DdayBadge } from "@components/index";
import { container, profileStyle } from "./ProfileInformation.style";
import { nicknameStyle } from "../ProfileModal/ProfileModal.style";
import { useNavigate, useParams } from "react-router-dom";
import useGetPotDetail from "apis/hooks/pots/useGetPotDetail";
import routes from "@constants/routes";

interface ProfileInformationProps {
  nickname: string;
  profileImage: string;
  dday: string;
}
const ProfileInformation: React.FC<ProfileInformationProps> = ({
  nickname,
  profileImage,
  dday,
}: ProfileInformationProps) => {
  const { potId } = useParams();
  const potIdNumber = Number(potId);

  const navigate = useNavigate();

  const { data } = useGetPotDetail(potIdNumber);
  const handleUserClick = () => {
    const userId = data?.potDetail.userId;
    navigate(`${routes.userProfile}/${userId}`);
  };

  return (
    <div css={container}>
      <img
        css={profileStyle}
        src={profileImage}
        alt="profile"
        onClick={handleUserClick}
      />
      <p css={nicknameStyle} onClick={handleUserClick}>
        {nickname}
      </p>
      <DdayBadge days={dday} />
    </div>
  );
};
export default ProfileInformation;
