import { PotIcon } from "@assets/svgs";
import {
  container,
  content,
  contentBody,
  contentTitle,
  description,
  iconStyle,
} from "./MyPot.style";
import { useState } from "react";
import onGoingPotsData from "mocks/onGoingPotsData";
import { OnGoingPotCard } from "@components/index";

const MyPot: React.FC = () => {
  const [onGoingPots, setOnGoingPots] = useState(onGoingPotsData);

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
            {onGoingPots.map((pot) => (
              <OnGoingPotCard isMyPot={false} {...pot} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPot;
