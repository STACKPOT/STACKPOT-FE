import { CheckIcon } from "@assets/svgs";
import { checkBoxStyle } from "./CheckBox.style";

interface CheckBoxProps {
  selected: boolean;
  onSelect: () => void;
  disabled?: boolean;
}

const CheckBox: React.FC<CheckBoxProps> = ({ selected, onSelect, disabled }) => {
  const handleSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled) return; 
    e.stopPropagation();
    onSelect();
  };

  return (
    <button type="button" css={checkBoxStyle} onClick={handleSelect} disabled={disabled}>
      {selected && <CheckIcon />}
    </button>
  );
};

export default CheckBox;
