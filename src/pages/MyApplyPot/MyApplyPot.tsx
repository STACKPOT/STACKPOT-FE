import { containerStyle, contentStyle, dividerStyle, infoContainerStyle, infoContentStyle, infoElementContainerStyle, infoTitleStyle, leftButtonIconStyle, leftButtonStyle, nicknameStyle, profileContainerStyle, profileStyle, titleContainerStyle, titleContentConatinerStyle, titleStyle } from "./MyApplyPot.style";
import { MushRoomProfile } from "@assets/images";
import { LeftIcon } from "@assets/svgs";
import { DdayBadge } from "@components/index";

const MyApplyPot = () => {
    return (
        <main css={containerStyle}>
            <div css={titleContainerStyle}>
                <button css={leftButtonStyle}>
                    <LeftIcon css={leftButtonIconStyle} />
                </button>
                <div css={titleContentConatinerStyle}>
                    <h1 css={titleStyle}>AI 자동화 챗봇 어플 공부할 스터디원 모집</h1>
                </div>
            </div>
            <div css={profileContainerStyle}>
                <img css={profileStyle} src={MushRoomProfile} />
                <p css={nicknameStyle}>아아 마시는 버섯</p>
                <DdayBadge days={5} />
            </div>
            <div css={dividerStyle} />
            <div css={infoContainerStyle}>
                <div css={infoElementContainerStyle}>
                    <div css={infoElementContainerStyle}>
                        <p css={infoTitleStyle}>시작 날짜</p>
                        <p css={infoContentStyle}>2025.2.18</p>
                    </div>
                    <div css={infoElementContainerStyle}>
                        <p css={infoTitleStyle}>예상 기간</p>
                        <p css={infoContentStyle}>단기/3개월</p>
                    </div>
                    <div css={infoElementContainerStyle}>
                        <p css={infoTitleStyle}>진행 방식</p>
                        <p css={infoContentStyle}>온라인</p>
                    </div>
                </div>
                <div css={infoElementContainerStyle}>
                    <p css={infoTitleStyle}>모집 분야</p>
                    <p css={infoContentStyle}>프론트엔드(2), 디자이너(3)</p>
                </div>
                <div css={infoElementContainerStyle}>
                    <p css={infoTitleStyle}>사용 언어</p>
                    <p css={infoContentStyle}>React, Javascripts</p>
                </div>
            </div>
            <div css={dividerStyle} />
            <p css={contentStyle}>안녕하엣</p>
        </main>
    )
}

export default MyApplyPot;