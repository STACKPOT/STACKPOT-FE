import { useState } from "react";
import * as styles from "./Dropdown.style";
import { ArrowDown, ArrowUp } from "@assets/svgs";

interface DropdownProps {
  options: readonly { label: string; key: string }[];
  handleChange: (key: string) => void;
  selectedKey?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  handleChange,
  selectedKey,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.key === selectedKey) || options[0]
  );

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectOption = (option: (typeof options)[0]) => {
    setSelectedOption(option);
    handleChange(option.key);
    setIsOpen(false);
  };

  return (
    <div css={styles.container}>
      <div css={styles.header} onClick={toggleDropdown}>
        <span css={styles.headerText}>글 순서</span>
        {isOpen ? (
          <ArrowUp css={styles.icon} />
        ) : (
          <ArrowDown css={styles.icon} />
        )}
      </div>
      {isOpen && (
        <div css={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.key}
              css={styles.option(option.key === selectedOption.key)}
              onClick={() => selectOption(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
