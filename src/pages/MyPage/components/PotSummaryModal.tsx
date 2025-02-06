import { AppealIcon, BookIcon, CloseIcon, CreateIcon } from "@assets/svgs";
import { backgroundStyle, bodyContainer, bodyTitleContainer, bodyTitleStyle, closeIconStyle, dateContainer, dateStyle, dividerStyle, contentStyle, modalStyle, titleContainer, titleStyle, appealContentStyle } from "./PotSummaryModal.style";
import { useEffect, useState } from "react";

interface PotSummaryModalProps {
    potId: number;
    onCancel: () => void;
}

const PotSummaryModal: React.FC<PotSummaryModalProps> = ({ potId, onCancel }: PotSummaryModalProps) => {
    const [potName, setPotName] = useState<string>("Stackpot");
    const [role, setRole] = useState<string>("프론트엔드");
    const [startDate, setStartDate] = useState<string>("2025.2.16");
    const [endDate, setEndDate] = useState<string>("2025.2.30");
    const [introduction, setIntroduction] = useState<string>("[STACKPOT] 팟의 노력파와 실력파가 이루어낸 환상적인 조합! 그들의 열정과 실력이 돋보이는 멋진 결과를 보여주었습니다. 이들의 서비스 컨셉은 언제 어디서나 한 곳에서 프로젝트를 진행과 동시에 회고, 피드에 글을 올리며 업무와 공부를 긍정적으로 돕는 것입니다. 프론트엔드 4명, 백앤드 3명, 기획자 1명, 디자이너 1명으로 구성된 이 팀은 업무를 성실하게 진행하며 미루지 않고 효율적으로 프로젝트를 진행했습니다. [STACKPOT] 팟의 노력파와 실력파가 이루어낸 환상적인 조합! 그들의 열정과 실력이 돋보이는 멋진 결과를 보여주었습니다. 이들의 서비스 컨셉은 언제 어디서나 한 곳에서 프로젝트를 진행과 동시에 회고, 피드에 글을 올리며 업무와 공부를 긍정적으로 돕는 것입니다. 프론트엔드 4명, 백앤드 3명, 기획자 1명, 디자이너 1명으로 구성된 이 팀은 업무를 성실하게 진행하며 미루지 않고 효율적으로 프로젝트를 진행했습니다. ");
    const [appeal, setAppeal] = useState<string>("[STACKPOT] 팟의 노력파와 실력파가 이루어낸 환상적인 조합! 그들의 열정과 실력이 돋보이는 멋진 결과를 보여주었습니다. 이들의 서비스 컨셉은 언제 어디서나 한 곳에서 프로젝트를 진행과 동시에 회고, 피드에 글을 올리며 업무와 공부를 긍정적으로 돕는 것입니다. 프론트엔드 4명, 백앤드 3명, 기획자 1명, 디자이너 1명으로 구성된 이 팀은 업무를 성실하게 진행하며 미루지 않고 효율적으로 프로젝트를 진행했습니다. [STACKPOT] 팟의 노력파와 실력파가 이루어낸 환상적인 조합! 그들의 열정과 실력이 돋보이는 멋진 결과를 보여주었습니다. 이들의 서비스 컨셉은 언제 어디서나 한 곳에서 프로젝트를 진행과 동시에 회고, 피드에 글을 올리며 업무와 공부를 긍정적으로 돕는 것입니다. 프론트엔드 4명, 백앤드 3명, 기획자 1명, 디자이너 1명으로 구성된 이 팀은 업무를 성실하게 진행하며 미루지 않고 효율적으로 프로젝트를 진행했습니다. ")

    useEffect(() => {
        // 모달 외부 스크롤 방지
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    return (
        <div css={backgroundStyle}>
            <div css={modalStyle}>
                <CloseIcon css={closeIconStyle} onClick={onCancel} />
                <div css={bodyContainer}>
                    <div css={titleContainer}>
                        <AppealIcon />
                        <h1 css={titleStyle}>{`${potName} ${role} 역할`}</h1>
                    </div>
                    < div css={dateContainer}>
                        <p css={dateStyle}>{startDate}</p>
                        <p css={dateStyle}>~</p>
                        <p css={dateStyle}>{endDate}</p>
                    </div>
                    <div css={dividerStyle} />
                    <div css={bodyTitleContainer}>
                        <BookIcon />
                        <p css={bodyTitleStyle}>소개</p>
                    </div>
                    <p css={contentStyle}>{introduction}</p>
                    <div css={dividerStyle} />
                    <div css={bodyTitleContainer}>
                        <CreateIcon />
                        <p css={bodyTitleStyle}>여기서 저는요</p>
                    </div>
                    <p css={appealContentStyle}>{appeal}</p>
                </div>
            </div>
        </div>
    )
}
export default PotSummaryModal;