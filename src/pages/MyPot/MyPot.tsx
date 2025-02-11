import { PotIcon } from "@assets/svgs";
import {
  container,
  contentTitle,
  description,
  iconStyle,
  onGoningPotContainer,
  textContainer,
} from "./MyPot.style";
import { OnGoingPotCard } from "@components/index";
import useGetMyPot from "apis/hooks/myPots/useGetMyPot";

const MyPot: React.FC = () => {
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
      <div css={onGoningPotContainer}>
        {data && data.length > 0 ? (
          data.map((pot) => (
            <OnGoingPotCard
              key={pot.potId}
              id={pot.potId}
              isMyPot={pot.isOwner}
              title={pot.potName}
              memberList={Object.entries(pot.members).flatMap(([role, count]) =>
                Array(count).fill(role)
              )}
            />
          ))
        ) : (
          <p css={textContainer}>데이터가 없습니다.</p>
        )}
      </div>
    </main>
  );
};

export default MyPot;
