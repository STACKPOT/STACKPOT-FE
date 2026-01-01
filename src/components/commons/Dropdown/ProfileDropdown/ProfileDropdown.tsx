import usePostLogout from "apis/hooks/users/userPostLogout";
import { dropdownStyle, itemStyle } from "./ProfileDropdown.style";
import { Link } from "react-router-dom";
import routes from "@constants/routes";
interface ProfileDropdownProps {
  onClose: () => void;
}
const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onClose }) => {
  const refreshToken = localStorage.getItem("refreshToken");

  const { mutate } = usePostLogout();

  const handleLogout = () => {
    if (refreshToken) {
      mutate(refreshToken);
    }
    onClose();
  };

  return (
    <div css={dropdownStyle}>
      <Link to={routes.myPage} css={itemStyle(true)} onClick={onClose}>
        마이페이지
      </Link>
      <Link to={routes.setting} css={itemStyle(true)} onClick={onClose}>
        설정
      </Link>
      <Link to={routes.setting} css={itemStyle(true)} onClick={onClose}>
        공감/저장
      </Link>
      <div onClick={handleLogout} css={itemStyle(false)}>
        로그아웃
      </div>
    </div>
  );
};

export default ProfileDropdown;
