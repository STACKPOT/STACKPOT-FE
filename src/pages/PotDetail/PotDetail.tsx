import { bodyContainerStyle, containerStyle, contentStyle, dividerStyle, sectionContainerStyle } from "./PotDetail.style";
import { MushroomImage } from "@assets/images";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ApplicantsInformation, PotHeader, PotInformation, ProfileInformation } from "./components";

const PotDetail = () => {
    const [isApplied, setIsApplied] = useState<boolean>(false);
    const [isMyPot, setIsMyPot] = useState<boolean>(false);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const { potId } = useParams();
    const potIdNumber = Number(potId);

    return (
        <main css={containerStyle}>
            <div css={bodyContainerStyle}>
                <div css={sectionContainerStyle}>
                    <PotHeader
                        title="제목을 길게 작성할 경우에는 이렇게 돼요 두줄은 이렇게 보여요"
                        isMyPot={isMyPot}
                        isApplied={isApplied}
                        isFinished={isFinished}
                        onApplySuccess={() => setIsApplied(true)}
                        onCancelApplySuccess={() => setIsApplied(false)} />
                    <ProfileInformation
                        nickname="아아 마시는 버섯"
                        profileImage={MushroomImage}
                        dday={5} />
                    <div css={dividerStyle} />
                </div>
                <div css={sectionContainerStyle}>
                    <PotInformation
                        startDate="2025.2.18"
                        period="단기/3개월"
                        method="온라인"
                        stacks="프론트엔드(2), 디자이너(3)"
                        languages="React, Javascripts" />
                    <div css={dividerStyle} />
                </div>
                <p css={contentStyle}>{`본문 내용입니다\n본문 내용입니다\n본문 내용입니다`}</p>
            </div>
            {isMyPot && !isFinished &&
                <ApplicantsInformation />
            }
        </main>
    )
}

export default PotDetail;