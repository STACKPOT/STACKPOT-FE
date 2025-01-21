import { PotIcon } from "@assets/svgs"
import { bodyContainer, buttonContainer, container, contractContainer, contractDetailStyle, contractSectionContainer, contractStyle, dividerStyle, headerContainer, headerStyle, interestContainer, mainContainer, mainContentContainer, makeNicknameContainer, modalBackgroundContainer, modalContentStyle, modalNicknameStyle, modalProfileContainer, modalProfileStyle, nicknameButtonStyle, nicknameContainer, nicknameInputContainer, nicknameInputDoneStyle, nicknameInputStyle, nicknameMessageStyle, nicknameMessageWarningStyle, nicknameSectionContainer, potIconStyle, sectionBodyContainer, sectionContainer, sectionDescriptionStyle, sectionTitleContainer, stackContainer, stackTitleStyle } from "./SignUp.style"
import { CategoryButton, ExplainModal, SignUpButton, TextField } from "@components/index"
import { useState } from "react";
import { MushRoomProfile } from "@assets/images";

const contracts = [
    { agreed: false, preview: "서비스 약관에 동의합니다", title: "서비스 약관", content: `본 약관은 회원가입 시 동의한 것으로 간주되며, 서비스 이용 시 회원에게 적용됩니다\n본 약관은 회원가입 시 동의한 것으로 간주되며, 서비스 이용 시 회원에게 적용됩니다\n본 약관은 회원가입 시 동의한 것으로 간주되며, 서비스 이용 시 회원에게 적용됩니다\n` },
    { agreed: false, preview: "개인정보 수집 및 이용에 동의합니다.", title: "개인정보 수집 및 이용 약관", content: "" }
];
const SignUp = () => {
    const [stacks, setStacks] = useState<string[]>(["프론트엔드", "백엔드", "디자인", "기획"]);
    const [interests, setInterests] = useState<string[]>(["사이드 프로젝트", "공모전", "창업", "네트워킹 행사"]);
    const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const [nickname, setNickname] = useState<string>("");
    const [kakaoId, setKakaoId] = useState<string>("");

    const [nicknameState, setNicknameState] = useState<boolean | null>(null);

    const [signUpCompleteModal, setSignUpCompleteModal] = useState<boolean>(false);
    const [contractModal, setContractModal] = useState<typeof contracts[0] | null>(null);


    const handleSelectStack = (stack: string) => {
        if (selectedStacks.includes(stack)) {
            setSelectedStacks((prev) => prev.filter((item) => item !== stack));
        } else {
            setSelectedStacks((prev) => [...prev, stack])
        }
    }
    const handleSelectInterest = (interest: string) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests((prev) => prev.filter((item) => item !== interest));
        } else {
            setSelectedInterests((prev) => [...prev, interest])
        }
    }
    const handleMakeNickname = () => {
        setNickname("닉네임");
        setNicknameState(true)
    }
    const onNicknameFocus = () => {
        setNicknameState(false)
    }
    const onNicknameBlur = () => {
        if (nickname.length > 0)
            setNicknameState(true)
        else setNicknameState(null)
    }
    const onKakaoIdChange = (value: string) => {
        setKakaoId(value);
    }

    const handleAgree = (contract: typeof contracts[0]) => {
        contract.agreed = !contract.agreed;
    }
    const handleContractDetail = (contract: typeof contracts[0]) => {
        setContractModal(contract)
    }
    const handleSubmit = () => {
        setSignUpCompleteModal(true)
    }
    const handleSignUpComplete = () => {
        setSignUpCompleteModal(false);
    }

    return (
        <main css={container}>
            <div css={mainContainer}>
                <div css={mainContentContainer}>
                    <div css={headerContainer}>
                        <h1 css={headerStyle}>STACKPOT 회원가입</h1>
                        <div css={dividerStyle} />
                    </div>
                    <div css={bodyContainer}>
                        <div css={sectionContainer}>
                            <div css={sectionTitleContainer}>
                                <h1 css={headerStyle}>카테고리 설정</h1>
                                <PotIcon css={potIconStyle} />
                            </div>
                            <div css={headerContainer}>
                                <div css={sectionDescriptionStyle}>STACKPOT에 가입하기 위해 카테고리를 설정해 주세요!</div>
                                <div css={sectionBodyContainer}>
                                    <div css={stackContainer}>
                                        <p css={stackTitleStyle}>역할</p>
                                        <div css={buttonContainer}>
                                            {stacks.map((stack) =>
                                                <CategoryButton
                                                    selected={selectedStacks.includes(stack)}
                                                    onClick={(content: string) => handleSelectStack(content)}>{stack}</CategoryButton>)}
                                        </div>
                                    </div>
                                    <div css={interestContainer}>
                                        <p css={stackTitleStyle}>관심사</p>
                                        <div css={buttonContainer}>
                                            {interests.map((interest) => <CategoryButton
                                                selected={selectedInterests.includes(interest)}
                                                onClick={(content: string) => handleSelectInterest(content)}>{interest}</CategoryButton>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div css={sectionContainer}>
                            <div css={sectionTitleContainer}>
                                <h1 css={headerStyle}>랜덤 닉네임</h1>
                                <PotIcon css={potIconStyle} />
                            </div>
                            <div css={headerContainer}>
                                <div css={nicknameSectionContainer}>
                                    <div css={sectionDescriptionStyle}>{`STACKPOT은 네 가지의 재료 안에서 랜덤 닉네임을 부여받아요.\n<닉네임 생성하기>를 눌러 닉네임을 만들어 주세요.`} </div>
                                    <div css={nicknameContainer}>
                                        <div css={makeNicknameContainer}>
                                            <input css={nickname.length < 1 ? nicknameInputStyle : nicknameInputDoneStyle}
                                                value={nickname}
                                                placeholder="닉네임 생성하기를 눌러주세요"
                                                readOnly={true}
                                                onFocus={onNicknameFocus}
                                                onBlur={onNicknameBlur} />
                                            <button css={nicknameButtonStyle} onClick={handleMakeNickname}>{nickname.length < 1 ? "닉네임 생성하기" : "다시 생성하기"}</button>
                                        </div>
                                        <p css={nicknameState ? nicknameMessageStyle : nicknameMessageWarningStyle}>{(nicknameState && "생성 완료!") || (nicknameState === false && "닉네임은 편집할 수 없어요") || ""}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div css={sectionContainer}>
                            <div css={sectionTitleContainer}>
                                <h1 css={headerStyle}>카카오톡 아이디</h1>
                                <PotIcon css={potIconStyle} />
                            </div>
                            <div css={headerContainer}>
                                <div css={sectionDescriptionStyle}>{`팟이 시작될 경우, 원활한 진행을 위해 팀장에게 카카오 아이디가 보여집니다.\n카카오톡 아이디를 작성해 주세요. `}</div>
                                <TextField placeholder="닉네임 생성하기를 눌러 주세요" />
                            </div>
                        </div>
                        <div css={contractSectionContainer}>
                            {contracts.map((contract) =>
                                <div css={contractContainer}>
                                    <button></button>
                                    <p css={contractStyle}>{contract.preview}</p>
                                    <button css={contractDetailStyle} onClick={() => handleContractDetail(contract)}>내용보기</button>
                                </div>)}
                        </div>
                    </div>
                    <button disabled={nickname.length < 1 || kakaoId.length < 1} onClick={handleSubmit}>가입하기</button>
                </div>
            </div>
            {signUpCompleteModal &&
                <div css={modalBackgroundContainer}>
                    <ExplainModal
                        title="가입이 완료되었어요! 완성된 나의 프로필이에요."
                        buttonText="메인 홈으로 이동하기"
                        onButtonClick={handleSignUpComplete}
                        onCancel={() => setSignUpCompleteModal(false)}>
                        <div css={modalProfileContainer}>
                            <img css={modalProfileStyle} src={MushRoomProfile} />
                            <p css={modalNicknameStyle}>{nickname}</p>
                        </div>
                    </ExplainModal>
                </div>}
            {contractModal &&
                <div css={modalBackgroundContainer}>
                    <ExplainModal
                        title={contractModal.title}
                        buttonText="확인했습니다"
                        onButtonClick={() => setContractModal(null)}
                        onCancel={() => setContractModal(null)}>
                        <p css={modalContentStyle}>{contractModal.content}  </p>
                    </ExplainModal>
                </div>
            }
        </main>
    )
}
export default SignUp;