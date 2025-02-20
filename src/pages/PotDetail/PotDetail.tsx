import {
  bodyContainerStyle,
  containerStyle,
  contentStyle,
  dividerStyle,
  sectionContainerStyle,
} from "./PotDetail.style";
import { useNavigate, useParams } from "react-router-dom";
import {
  ApplicantsInformation,
  PotHeader,
  ProfileInformation,
} from "./components";
import { PotInformation } from "@components/index";
import useGetPotDetail from "apis/hooks/pots/useGetPotDetail";
import { roleImages } from "@constants/roleImage";
import routes from "@constants/routes";

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
                elementList={[
                  { title: "모집 마감", content: data.potDetail.recruitmentDeadline },
                  { title: "시작 날짜", content: data.potDetail.potStartDate },
                  { title: "진행 방식", content: data.potDetail.potModeOfOperation },
                  { title: "예상 기간", content: data.potDetail.potDuration },
                  { title: "모집 파트", content: data.potDetail.recruitmentDetails },
                  { title: "사용 언어", content: data.potDetail.potLan },
                ]}
              />
              <div css={dividerStyle} />
            </div>
            <p css={contentStyle}>{data.potDetail.potContent}</p>
          </div>
          {data.potDetail.owner &&
            data.potDetail.potStatus === "RECRUITING" && (
              <ApplicantsInformation potId={potIdNumber} />
            )}
        </main>
      )}
    </>
  );
};

export default PotDetail;
