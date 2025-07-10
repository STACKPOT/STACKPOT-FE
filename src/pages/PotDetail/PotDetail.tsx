import {
  bodyContainerStyle,
  containerStyle,
  contentStyle,
  dividerStyle,
} from "./PotDetail.style";
import { useParams } from "react-router-dom";
import { ApplicantsInformation, PotHeader } from "./components";
import { CommentSection, PostButton, PotInformation } from "@components/index";
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
          <PotHeader
            title={data.potDetail.potName}
            isMyPot={data.potDetail.owner}
            isApplied={data.potDetail.applied}
            potId={potIdNumber}
            potStatus={data.potDetail.potStatus}
            nickname={data.potDetail.userNickname || ""}
            profileImage={roleImages[data.potDetail.userRole]}
            dday={data.potDetail.dday}
          />
          <div css={bodyContainerStyle}>
            <PotInformation
              potStartDate={data.potDetail.potStartDate}
              potModeOfOperation={data.potDetail.potModeOfOperation}
              recruitmentDetails={data.potDetail.recruitmentDetails}
              potDuration={data.potDetail.potDuration}
              potLan={data.potDetail.potLan}
            />
            <p css={contentStyle}>{data.potDetail.potContent}</p>
            <PostButton postType="save" initialState={false} />
            <div css={dividerStyle} />
          </div>
          {data.potDetail.owner &&
            data.potDetail.potStatus === "RECRUITING" && (
              <ApplicantsInformation potId={potIdNumber} />
            )}
          <CommentSection />
        </main>
      )}
    </>
  );
};

export default PotDetail;
