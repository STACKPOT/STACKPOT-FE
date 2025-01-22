import { bodyContainer, container, contractSectionContainer, dividerStyle, headerContainer, headerStyle, mainContainer, categoryContainer } from "./SignUp.style"
import { TextField } from "@components/index"
import { useState } from "react";
import { MushRoomProfile } from "@assets/images";
import Contract from "./components/Contract";
import NicknameInput from "./components/NicknameInput";
import CategorySelection from "./components/CategorySelection";
import Section from "./components/Section";
import ContractModal from "./components/ContractModal";
import ProfileModal from "./components/ProfileModal";

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
    const handleSignUpComplete = () => {
        setSignUpCompleteModal(false);
        // todo: 회원가입 완료(navigate)
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
                                title="역할"
                                gap="3.6rem"
                                categories={stacks}
                                selectedCategories={selectedStacks}
                                onSelect={(stack) => handleSelectStack(stack)} />
                            <CategorySelection
                                title="관심사"
                                gap="2rem"
                                categories={interests}
                                selectedCategories={selectedInterests}
                                onSelect={(interest) => handleSelectInterest(interest)} />
                        </div>
                    </Section>
                    <Section
                        title="랜덤 닉네임"
                        description={`STACKPOT은 네 가지의 재료 안에서 랜덤 닉네임을 부여받아요.\n<닉네임 생성하기>를 눌러 닉네임을 만들어 주세요.`}>
                        <NicknameInput
                            nickname={nickname}
                            onMakeNickname={handleMakeNickname} />
                    </Section>
                    <Section
                        title="카카오톡 아이디"
                        description={`팟이 시작될 경우, 원활한 진행을 위해 팀장에게 카카오 아이디가 보여집니다.\n카카오톡 아이디를 작성해 주세요. `} >
                        <TextField placeholder="닉네임 생성하기를 눌러 주세요" />
                    </Section>
                    <div css={contractSectionContainer}>
                        {contracts.map((contract) =>
                            <Contract
                                {...contract}
                                onShowDetail={() => handleContractDetail(contract)}
                                onCheck={() => handleAgree(contract)} />
                        )}
                    </div>
                </div>
                <button disabled={nickname.length < 1 || kakaoId.length < 1} onClick={() => setSignUpCompleteModal(true)}>가입하기</button>
            </div>
            {signUpCompleteModal &&
                <ProfileModal
                    profile={MushRoomProfile}
                    nickname={nickname}
                    onConfirm={() => handleSignUpComplete()}
                    onModalCancel={() => setSignUpCompleteModal(false)}>
                </ProfileModal>}
            {contractModal &&
                <ContractModal
                    {...contractModal}
                    onButtonClick={() => setContractModal(null)}
                    onCancelModal={() => setContractModal(null)} />
            }
        </main>
    )
}
export default SignUp;