import { bodyContainer, container, dividerStyle, headerContainer, headerStyle, mainContainer, categoryContainer } from "./SignUp.style"
import { Button, TextField } from "@components/index"
import { useState } from "react";
import { MushroomImage } from "@assets/images";
import { CategorySelection, ContractsSection, NicknameInput, ProfileModal, Section } from "./components";

const SignUp = () => {
    const [selectedStack, setSelectedStack] = useState<string | null>(null);
    const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

    const [nickname, setNickname] = useState<string>("");
    const [kakaoId, setKakaoId] = useState<string>("");
    const [contractsAgreed, setContractsAgreed] = useState<boolean>(false);

    const [signUpCompleteModal, setSignUpCompleteModal] = useState<boolean>(false);

    const handleSignUp = () => {
        if (selectedStack &&
            selectedInterest &&
            nickname.length > 0 &&
            kakaoId.length > 0 &&
            contractsAgreed
        ) {
            // todo: 회원가입 api 호출
            setSignUpCompleteModal(true);
        }
    }

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
                        description="STACKPOT에 가입하기 위해 카테고리를 설정해 주세요!">
                        <div css={categoryContainer}>
                            <CategorySelection
                                type="stack"
                                title="역할"
                                onSelect={(stack) => setSelectedStack(stack)} />
                            <CategorySelection
                                type="interest"
                                title="관심사"
                                onSelect={setSelectedInterest} />
                        </div>
                    </Section>
                    <Section
                        title="랜덤 닉네임"
                        description={`STACKPOT은 네 가지의 재료 안에서 랜덤 닉네임을 부여받아요.\n<닉네임 생성하기>를 눌러 닉네임을 만들어 주세요.`}>
                        <NicknameInput
                            onMakeNickname={setNickname} />
                    </Section>
                    <Section
                        title="카카오톡 아이디"
                        description={`팟이 시작될 경우, 원활한 진행을 위해 팀장에게 카카오 아이디가 보여집니다.\n카카오톡 아이디를 작성해 주세요. `} >
                        <TextField placeholder="카카오톡 아이디 작성" onTextChange={setKakaoId}>{kakaoId}</TextField>
                    </Section>
                    <ContractsSection
                        onAgree={setContractsAgreed} />
                </div>
                <Button variant="action" actionType="join" onClick={handleSignUp}>가입하기</Button>
            </div>
            {signUpCompleteModal &&
                <ProfileModal
                    profile={MushroomImage}
                    nickname={nickname}
                    onModalCancel={() => setSignUpCompleteModal(false)}>
                </ProfileModal>
            }
        </main>
    )
}
export default SignUp;