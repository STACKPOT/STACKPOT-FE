import { bodyContainerStyle, containerStyle, contentStyle, dividerStyle, sectionContainerStyle } from "./PotDetail.style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApplicantsInformation, PotHeader, ProfileInformation } from "./components";
import { PotInformation } from "@components/index";
import useGetPotDetail from "apis/hooks/pots/useGetPotDetail";
import { roleImages } from "@constants/roleImage";

const PotDetail = () => {
    const [isApplied, setIsApplied] = useState<boolean>(false);
    const [isMyPot, setIsMyPot] = useState<boolean>(false);
    const { potId } = useParams();
    const potIdNumber = Number(potId);

    const { data } = useGetPotDetail(potIdNumber);
    useEffect(() => {
        if (typeof data !== 'undefined') {
            if (data.applicants.length > 0) {
                setIsMyPot(true);
            }
            setIsMyPot(data.potDetail.owner);
            setIsApplied(data.potDetail.applied);
        }
    }, [data]);

    return (
        <>
            {typeof data === 'undefined' ?
                <p>로딩중</p>
                : <main css={containerStyle}>
                    <div css={bodyContainerStyle}>
                        <div css={sectionContainerStyle}>
                            <PotHeader
                                title={data.potDetail.potName}
                                isMyPot={isMyPot}
                                isApplied={isApplied}
                                potStatus={data.potDetail.potStatus}
                                onApplySuccess={() => setIsApplied(true)}
                                onCancelApplySuccess={() => setIsApplied(false)} />
                            <ProfileInformation
                                nickname={data.potDetail.userNickname || ""}
                                profileImage={roleImages[data.potDetail.userRole]}
                                dday={data.potDetail.dday} />
                            <div css={dividerStyle} />
                        </div>
                        <div css={sectionContainerStyle}>
                            <PotInformation
                                startDate={data.potDetail.potStartDate}
                                period={data.potDetail.potDuration}
                                method={data.potDetail.potModeOfOperation}
                                stacks={data.potDetail.recruitmentDetails}
                                languages={data.potDetail.potLan} />
                            <div css={dividerStyle} />
                        </div>
                        <p css={contentStyle}>{data.potDetail.potContent}</p>
                    </div>
                    {isMyPot && data.potDetail.potStatus !== "COMPLETED" &&
                        <ApplicantsInformation potId={potIdNumber} />
                    }
                </main>}
        </>
    )
}

export default PotDetail;