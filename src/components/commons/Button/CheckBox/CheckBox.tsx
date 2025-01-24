import { CheckIcon } from "@assets/svgs";
import { checkBoxStyle } from "./CheckBox.style";

interface CheckBoxProps {
    selected: boolean;
    onSelect: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ selected, onSelect }: CheckBoxProps) => {
    const handleSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        onSelect();
    }
    return (
        <button css={checkBoxStyle} onClick={handleSelect}>
            {selected && <CheckIcon />}
        </button>
    )
}

export default CheckBox;