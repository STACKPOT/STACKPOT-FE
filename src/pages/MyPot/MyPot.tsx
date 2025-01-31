import { PotIcon } from "@assets/svgs";
import {
  container,
  content,
  contentTitle,
  description,
  iconStyle,
} from "./MyPot.style";

const MyPot: React.FC = () => {
  return (
    <main>
      <div css={container}>
        <div css={content}>
          <div css={contentTitle}>
            <p>나의 팟</p>
            <PotIcon css={iconStyle} />
          </div>
          <p css={description}>
            내가 입장한 팟을 모았어요. 클릭한 뒤 각각의 팟에서 업무를 시작해
            보세요.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MyPot;
