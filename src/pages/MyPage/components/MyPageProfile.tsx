import { SetUpIcon } from "@assets/svgs";
import { contentContainer, introductionStyle, nicknameContainer, nicknameStyle, profileContainer, profileStyle, setUpIconStyle, } from "./MyPageProfile.style";
import TemperatureBar from "@components/commons/TemperatureBar/TemperatureBar";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

interface MyPageProfileProps {
    profileImage: string;
    nickname: string;
    introduction: string;
    temperature: number;
}
const MyPageProfile: React.FC<MyPageProfileProps> = ({ profileImage, nickname, introduction, temperature }: MyPageProfileProps) => {
    const navigate = useNavigate();

    const handleSetUp = () => {
        navigate(routes.setting)
    }

    return (
        <div css={profileContainer}>
            <img css={profileStyle} src={profileImage} />
            <div css={contentContainer}>
                <div css={nicknameContainer}>
                    <h1 css={nicknameStyle}>{nickname}</h1>
                    <SetUpIcon type={"button"} css={setUpIconStyle} onClick={handleSetUp} />
                </div>
                <p css={introductionStyle}>{introduction}</p>
                <TemperatureBar temperature={temperature} />
            </div>

        </div>
    )
}
export default MyPageProfile;