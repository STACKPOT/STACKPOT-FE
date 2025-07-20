import { PotIcon } from "@assets/svgs";
import {
  container,
  contentTitle,
  description,
  iconStyle,
  noDataContainerStyle,
  potListContainer,
} from "./MyPots.style";
import { MyPotCard, NoData } from "@components/index";
import useGetMyPot from "apis/hooks/myPots/useGetMyPot";
import { partKoreanNameMap } from "@constants/categories";
import { useNavigate } from "react-router-dom";
import routes from "@constants/routes";

const MyPots: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useGetMyPot();

  return (
    <main css={container}>
      <div css={contentTitle}>
        <p>나의 팟</p>
        <PotIcon css={iconStyle} />
      </div>
      <p css={description}>
        내가 입장한 팟을 모았어요. 클릭한 뒤 각각의 팟에서 업무를 시작해 보세요.
      </p>
      <div css={potListContainer}>
        {data && data.length > 0 ? (
          data.map((pot) => (
            <MyPotCard
              key={pot.potId}
              {...pot}
              type="myPot"
              recruitmentRoles={Object.keys(pot.members).map(
                (role) => partKoreanNameMap[role]
              )}
            />
          ))
        ) : (
          <NoData
            message={`😥\n입장한 팟이 없어요\n팟에 입장해 보세요!`}
            buttonText="모든 팟 페이지로"
            onClickButton={() => navigate(`${routes.pot.base}`)}
            containerStyle={noDataContainerStyle}
          />
        )}
      </div>
    </main>
  );
};

export default MyPots;
