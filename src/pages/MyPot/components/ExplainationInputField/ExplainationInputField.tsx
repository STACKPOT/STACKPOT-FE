import { explainationInputFieldStyle, textareaContainer } from "./ExplainationInputField.style";

interface ExplainationInputFieldProps {
  placeholder: string;
}

const ExplainationInputField: React.FC<ExplainationInputFieldProps> = ({ placeholder }) => (
  <div css={explainationInputFieldStyle}>
    <textarea placeholder={placeholder} css={textareaContainer} />
  </div>
);

export default ExplainationInputField;
