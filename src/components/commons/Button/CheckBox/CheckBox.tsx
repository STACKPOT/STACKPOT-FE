import { CheckIcon } from "@assets/svgs";
import { checkBoxStyle } from "./CheckBox.style";
import { useState } from "react";

interface CheckBoxProps {
    selected: boolean;
    onSelect: () => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ selected, onSelect }: CheckBoxProps) => {
    const [checked, setChecked] = useState<boolean>(selected);

    const handleCheck = () => {
        setChecked(!checked);
        onSelect();
    }
    return (
        <button css={checkBoxStyle} onClick={handleCheck}>
            {checked && <CheckIcon />}
        </button>
    )
}

export default CheckBox;