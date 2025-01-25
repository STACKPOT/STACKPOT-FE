import { useState } from "react";
import { inputContainer, buttonStyle, container, inputDoneStyle, inputStyle, messageStyle, messageWarningStyle } from "./NicknameInput.style"

interface NicknameInputProps {
    onMakeNickname: (newNickname: string) => void,
}

const NicknameInput: React.FC<NicknameInputProps> = ({ onMakeNickname }: NicknameInputProps) => {
    const [nickname, setNickname] = useState<string>("");
    const [nicknameState, setNicknameState] = useState<boolean | null>(null);

    const onNicknameFocus = () => {
        setNicknameState(false)
    }
    const onNicknameBlur = () => {
        if (nickname.length > 0)
            setNicknameState(true)
        else setNicknameState(null)
    }
    const handleMakeNickname = () => {
        // todo: 닉네임 생성 api 호출
        setNickname("아아 마시는 버섯");
        setNicknameState(true);
        onMakeNickname("아아 마시는 버섯");
    }

    return (
        <div css={container}>
            <div css={inputContainer}>
                <input css={nickname.length < 1 ? inputStyle : inputDoneStyle}
                    value={nickname}
                    placeholder="닉네임 생성하기를 눌러주세요"
                    readOnly={true}
                    onFocus={onNicknameFocus}
                    onBlur={onNicknameBlur} />
                <button css={buttonStyle} onClick={handleMakeNickname}>{nickname.length < 1 ? "닉네임 생성하기" : "다시 생성하기"}</button>
            </div>
            <p css={nicknameState ? messageStyle : messageWarningStyle}>{(nicknameState && "생성 완료!") || (nicknameState === false && "닉네임은 편집할 수 없어요") || ""}</p>
        </div>
    )
}
export default NicknameInput;