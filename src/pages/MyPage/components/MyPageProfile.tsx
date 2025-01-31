import { SetUpIcon } from "@assets/svgs";
import { contentContainer, introductionStyle, nicknameContainer, nicknameStyle, profileContainer, profileStyle, setUpIconStyle, } from "./MyPageProfile.style";
import TemperatureBar from "@components/commons/TemperatureBar/TemperatureBar";

interface MyPageProfileProps {
    profileImage: string;
    nickname: string;
    introduction: string;
    temperature: number;
}
const MyPageProfile: React.FC<MyPageProfileProps> = ({ profileImage, nickname, introduction, temperature }: MyPageProfileProps) => {
    const handleSetUp = () => {
        // todo: 설정 페이지로 이동
    }

    return (
        <div css={profileContainer}>
            <img css={profileStyle} src={profileImage} />
            <div css={contentContainer}>
                <div css={nicknameContainer}>
                    <h1 css={nicknameStyle}>{nickname}</h1>
                    <SetUpIcon css={setUpIconStyle} onClick={handleSetUp} />
                </div>
                <p css={introductionStyle}>{introduction}</p>
                <TemperatureBar temperature={temperature} />
            </div>

        </div>
    )
}
export default MyPageProfile;