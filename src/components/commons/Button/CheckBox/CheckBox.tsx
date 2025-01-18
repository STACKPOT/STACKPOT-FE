import { CheckIcon } from "@assets/svgs";
import { checkBoxStyle } from "./CheckBox.style";

interface CheckBoxProps {
    selected: boolean;
    onSelect: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ selected, onSelect }: CheckBoxProps) => {
    return (
        <button css={checkBoxStyle} onClick={onSelect}>
            {selected && <CheckIcon />}
        </button>
    )
}

export default CheckBox;