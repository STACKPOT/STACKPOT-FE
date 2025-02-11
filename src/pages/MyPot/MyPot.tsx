import { PotIcon } from "@assets/svgs";
import {
  container,
  content,
  contentBody,
  contentTitle,
  description,
  iconStyle,
} from "./MyPot.style";
import { OnGoingPotCard } from "@components/index";
import useGetMyPot from "apis/hooks/myPots/useGetMyPot";

const MyPot: React.FC = () => {
  const { data } = useGetMyPot();

  return (
    <main>
      <div css={container}>
        <div css={content}>
          <div css={contentTitle}>
            <p>나의 팟</p>
            <PotIcon css={iconStyle} />
          </div>

          <div css={contentBody}>
            <p css={description}>
              내가 입장한 팟을 모았어요. 클릭한 뒤 각각의 팟에서 업무를 시작해
              보세요.
            </p>
            {data && data.length > 0 ? (
              data.map((pot) => (
                <OnGoingPotCard
                  key={pot.potId}
                  id={pot.potId}
                  isMyPot={pot.isOwner}
                  title={pot.potName}
                  memberList={Object.keys(pot.members)}
                />
              ))
            ) : (
              <div>데이터가 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPot;
