import { AngularCloseIcon } from "@assets/svgs";
import { buttonContainer, buttonDividerStyle, buttonStyle, closeIconStyle, container, dividerStyle, nicknameStyle, profileContainer, profileStyle } from "./SideBarProfileModal.style";
import { MushroomImage } from "@assets/images";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

interface SideBarProfileModalProps {
    onClose: () => void;
}
const SideBarProfileModal: React.FC<SideBarProfileModalProps> = ({ onClose }: SideBarProfileModalProps) => {
    const navigate = useNavigate();
    const handleMyPage = () => {
        navigate(routes.myPage);
        onClose();
    }
    const handleLogout = () => {
        // todo: 로그아웃
        onClose();
    }

    return (
        <div css={container}>
            <AngularCloseIcon type='button' css={closeIconStyle} onClick={onClose} />
            <div css={profileContainer}>
                <img css={profileStyle} src={MushroomImage} />
                <p css={nicknameStyle}>아아 마시는 버섯</p>
            </div>
            <div css={dividerStyle} />
            <div css={buttonContainer}>
                <button css={buttonStyle("myPage")} onClick={handleMyPage}>마이페이지</button>
                <div css={buttonDividerStyle} />
                <button css={buttonStyle("logout")} onClick={handleLogout}>로그아웃</button>
            </div>
        </div>
    )
}
export default SideBarProfileModal;