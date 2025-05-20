import usePostLogout from 'apis/hooks/users/userPostLogout';
import { containerStyle, dropdownStyle } from './ProfileDropdown.style';
import { Link } from 'react-router-dom';
import routes from '@constants/routes';
interface ProfileDropdownProps {
	onClose: () => void;
}
const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onClose }) => {
	const refreshToken = localStorage.getItem('refreshToken');

	const { mutate } = usePostLogout();

	const handleLogout = () => {
		if (refreshToken) {
			mutate(refreshToken);
		}
		onClose();
	};

	return (
		<div css={dropdownStyle}>
			<Link to={routes.myPage} css={containerStyle(true)} onClick={onClose}>
				마이페이지
			</Link>
			<Link to={routes.setting} css={containerStyle(true)} onClick={onClose}>
				설정
			</Link>
			<div onClick={handleLogout} css={containerStyle(false)}>
				로그아웃
			</div>
		</div>
	);
};

export default ProfileDropdown;
