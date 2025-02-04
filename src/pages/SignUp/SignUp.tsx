import {
  bodyContainer,
  container,
  dividerStyle,
  headerContainer,
  headerStyle,
  mainContainer,
  categoryContainer,
} from "./SignUp.style";
import { Button, TextField } from "@components/index";
import { useState } from "react";
import { CategorySelection, ContractsSection, Section } from "./components";

const SignUp = () => {
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const [kakaoId, setKakaoId] = useState<string>("");
  const [contractsAgreed, setContractsAgreed] = useState<boolean>(false);

  const handleSignUp = () => {
    if (
      selectedStack &&
      selectedInterest &&
      kakaoId.length > 0 &&
      contractsAgreed
    ) {
      // todo: 회원가입 api 호출
    }
  };

  return (
    <main css={container}>
      <div css={mainContainer}>
        <div css={headerContainer}>
          <h1 css={headerStyle}>STACKPOT 회원가입</h1>
          <div css={dividerStyle} />
        </div>
        <div css={bodyContainer}>
          <Section
            title="카테고리 설정"
            description="STACKPOT에 가입하기 위해 카테고리를 설정해 주세요!"
          >
            <div css={categoryContainer}>
              <CategorySelection
                type="stack"
                title="역할"
                onSelect={(stack) => setSelectedStack(stack)}
              />
              <CategorySelection
                type="interest"
                title="관심사"
                onSelect={setSelectedInterest}
              />
            </div>
          </Section>
          <Section
            title="카카오톡 아이디"
            description={`팟이 시작될 경우, 원활한 진행을 위해 팀장에게 카카오 아이디가 보여집니다.\n카카오톡 아이디를 작성해 주세요. `}
          >
            <TextField
              placeholder="카카오톡 아이디 작성"
              onTextChange={setKakaoId}
            >
              {kakaoId}
            </TextField>
          </Section>
          <ContractsSection onAgree={setContractsAgreed} />
        </div>
        <Button variant="action" actionType="join" onClick={handleSignUp}>
          가입하기
        </Button>
      </div>
    </main>
  );
};
export default SignUp;
