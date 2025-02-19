import { useState } from "react";
import * as styles from "./Dropdown.style";
import { ArrowDownIcon, ArrowUpIcon } from "@assets/svgs";

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
        <span css={styles.headerText}>
          {selectedOption ? selectedOption.label : "최신순"}
        </span>
        {isOpen ? (
          <ArrowUpIcon css={styles.icon} />
        ) : (
          <ArrowDownIcon css={styles.icon} />
        )}
      </div>
      {isOpen && (
        <div css={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.key}
              css={styles.option}
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
