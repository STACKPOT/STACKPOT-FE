import { SerializedStyles } from "@emotion/react";
import Button from "../Button/Button"
import { container, recommentCancelStyle, submitButtonContainer, textAreaStyle } from "./CommentWriter.style"
import { useRef, useState } from "react";

interface CommentWriterProps {
  onSubmit: (content: string) => void;
  onCancel: () => void;
  textAreaCustomStyle?: SerializedStyles;
}
const CommentWriter: React.FC<CommentWriterProps> = ({
  onSubmit,
  onCancel,
  textAreaCustomStyle,
}: CommentWriterProps) => {
  const [content, setContent] = useState("");
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (textRef.current) {
      textRef.current.style.height = "0px";
      textRef.current.style.height = textRef.current.scrollHeight + "px";
    }
  }

  const handleSubmit = () => {
    onSubmit(content);
    setContent("");
  }

  const handleCancel = () => {
    setContent("");
    if (textRef.current) {
      textRef.current.style.height = textRef.current.scrollHeight + "px";
    }
    onCancel();
  }

  return (
    <div css={container}>
      <textarea
        ref={textRef}
        rows={1}
        css={[textAreaStyle, textAreaCustomStyle]}
        value={content}
        placeholder="칭찬은 개발자를 춤추게 합니다.."
        onChange={handleInputChange} />
      <div css={submitButtonContainer}>
        <button css={recommentCancelStyle} onClick={handleCancel}>취소</button>
        <Button variant="action" onClick={handleSubmit}>댓글 작성</Button>
      </div>
    </div>
  )
}
export default CommentWriter;