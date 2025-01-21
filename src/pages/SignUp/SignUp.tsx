import { PotIcon } from "@assets/svgs"
import { bodyContainer, buttonContainer, container, contractContainer, contractDetailStyle, contractSectionContainer, contractStyle, dividerStyle, headerContainer, headerStyle, interestContainer, mainContainer, mainContentContainer, makeNicknameContainer, nicknameButtonStyle, nicknameContainer, nicknameInputContainer, nicknameInputDoneStyle, nicknameInputStyle, nicknameMessageStyle, nicknameMessageWarningStyle, nicknameSectionContainer, potIconStyle, sectionBodyContainer, sectionContainer, sectionDescriptionStyle, sectionTitleContainer, stackContainer, stackTitleStyle } from "./SignUp.style"
import { CategoryButton, SignUpButton, TextField } from "@components/index"
import { useState } from "react";

const contracts = [
    { agreed: false, title: "서비스 약관에 동의합니다", content: "" },
    { agreed: false, title: "개인정보 수집 및 이용에 동의합니다.", content: "" }
];
const SignUp = () => {
    const [stacks, setStacks] = useState<string[]>(["프론트엔드", "백엔드", "디자인", "기획"]);
    const [interests, setInterests] = useState<string[]>(["사이드 프로젝트", "공모전", "창업", "네트워킹 행사"]);
    const [selectedStacks, setSelectedStacks] = useState<string[]>([]);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const [nickname, setNickname] = useState<string>("");
    const [kakaoId, setKakaoId] = useState<string>("");

    const [nicknameState, setNicknameState] = useState<boolean|null>(null);

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
        if(nickname.length>0) 
            setNicknameState(true)
        else setNicknameState(null)
    }
    const onKakaoIdChange = (value:string) => {
        setKakaoId(value);
    }

    const handleAgree = (agree: typeof contracts[0]) => {
        agree.agreed = !agree.agreed;
    }
    const handleAgreeDetail = (agree: typeof contracts[0]) => {

    }
    const handleSubmit = () => {

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
                                            <button css={nicknameButtonStyle} onClick={handleMakeNickname}>{nickname.length<1?"닉네임 생성하기":"다시 생성하기"}</button>
                                        </div>
                                        <p css={nicknameState ? nicknameMessageStyle: nicknameMessageWarningStyle}>{(nicknameState && "생성 완료!") || (nicknameState===false && "닉네임은 편집할 수 없어요") || ""}</p>
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
                                    <p css={contractStyle}>{contract.title}</p>
                                    <button css={contractDetailStyle}>내용보기</button>
                                </div>)}
                        </div>
                    </div>
                    <button onClick={handleSubmit}>가입하기</button>
                </div>
            </div>
        </main>
    )
}
export default SignUp;