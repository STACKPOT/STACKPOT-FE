import {
  bodyContainerStyle,
  containerStyle,
  contentStyle,
  dividerStyle,
  sectionContainerStyle,
} from "./PotDetail.style";
import { useParams } from "react-router-dom";
import {
  ApplicantsInformation,
  PotHeader,
  ProfileInformation,
} from "./components";
import { PotInformation } from "@components/index";
import useGetPotDetail from "apis/hooks/pots/useGetPotDetail";
import { roleImages } from "@constants/roleImage";

const PotDetail = () => {
  const { potId } = useParams();
  const potIdNumber = Number(potId);

  const { data } = useGetPotDetail(potIdNumber);

  return (
    <>
      {data && (
        <main css={containerStyle}>
          <div css={bodyContainerStyle}>
            <div css={sectionContainerStyle}>
              <PotHeader
                title={data.potDetail.potName}
                isMyPot={data.potDetail.owner}
                isApplied={data.potDetail.applied}
                potId={potIdNumber}
                potStatus={data.potDetail.potStatus}
              />
              <ProfileInformation
                nickname={data.potDetail.userNickname || ""}
                profileImage={roleImages[data.potDetail.userRole]}
                dday={data.potDetail.dday}
              />
              <div css={dividerStyle} />
            </div>
            <div css={sectionContainerStyle}>
              <PotInformation
                startDate={data.potDetail.potStartDate}
                period={data.potDetail.potDuration}
                method={data.potDetail.potModeOfOperation}
                stacks={data.potDetail.recruitmentDetails}
                languages={data.potDetail.potLan}
              />
              <div css={dividerStyle} />
            </div>
            <p css={contentStyle}>{data.potDetail.potContent}</p>
          </div>
          {data.potDetail.owner && data.potDetail.potStatus === "RECRUITING" && (
            <ApplicantsInformation potId={potIdNumber} />
          )}
        </main>
      )}
    </>
  );
};

export default PotDetail;
