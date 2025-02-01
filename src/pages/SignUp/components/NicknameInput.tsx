import { useState } from "react";
import { inputContainer, buttonStyle, container, buttonContainer } from "./NicknameInput.style"
import { TextField } from "@components/index";

interface NicknameInputProps {
    onMakeNickname: (newNickname: string) => void,
}

const NicknameInput: React.FC<NicknameInputProps> = ({ onMakeNickname }: NicknameInputProps) => {
    const [nickname, setNickname] = useState<string>("");

    const handleMakeNickname = () => {
        // todo: 닉네임 생성 api 호출
        setNickname("아아 마시는 버섯");
        onMakeNickname("아아 마시는 버섯");
    }

    return (
        <div css={container}>
            <div css={inputContainer}>
                <TextField
                    placeholder="닉네임 생성하기를 눌러 주세요"
                    type="nickname"
                    readonly={true}
                    warningMessage="닉네임은 편집할 수 없어요"
                    onTextChange={(text) => setNickname(text)}>{nickname}</TextField>
            </div>
            <div css={buttonContainer}>
                <button css={buttonStyle} onClick={handleMakeNickname}>{nickname.length < 1 ? "닉네임 생성하기" : "다시 생성하기"}</button>
            </div>
        </div>
    )
}
export default NicknameInput;