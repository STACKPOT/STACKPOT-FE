import { explainationInputFieldStyle, textareaContainer } from "./ExplainationInputField.style";

interface ExplainationInputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

const ExplainationInputField: React.FC<ExplainationInputFieldProps> = ({ value, onChange, placeholder }) => (
  <div css={explainationInputFieldStyle}>
    <textarea value={value} onChange={onChange} placeholder={placeholder} css={textareaContainer} />
  </div>
);

export default ExplainationInputField;
