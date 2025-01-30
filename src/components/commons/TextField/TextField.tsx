import { useState } from "react";
import { containerStyle, nicknameInputDoneStyle, supportingTextWarningStyle, supportingTextStyle, inputStyle, readOnlyInputStyle } from "./TextField.style";

interface TextFieldProps {
  children: string;
  placeholder: string;
  type?: "normal" | "nickname";
  readonly?: boolean;
  warningMessage?: string;
  onTextChange: (text: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  children,
  placeholder,
  type = "normal",
  readonly = false,
  warningMessage,
  onTextChange,
}) => {

  const [inputState, setInputState] = useState<boolean>(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange(e.target.value);
  };

  return (
    <div css={containerStyle}>
      <input
        css={(type === "nickname" && children.length > 0 && nicknameInputDoneStyle) || (readonly && readOnlyInputStyle) || inputStyle}
        value={children}
        readOnly={readonly}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setInputState(false)}
        onBlur={() => setInputState(true)} />
      {(readonly &&
        <p css={inputState ? supportingTextStyle : supportingTextWarningStyle}>
          {(type === "nickname" && inputState && children.length > 1 && "생성 완료!") ||
            (!inputState && warningMessage) || ""}
        </p>)}
    </div>
  );
};

export default TextField;