import { AnotherTaskStatus } from "types/taskStatus";
import { buttonStyle, selectedButtonStyle } from "./StateButton.style";

interface StateButtonProps {
  state: AnotherTaskStatus;
  selected: boolean;
  onClick: () => void;
}

const StateButton: React.FC<StateButtonProps> = ({
  state,
  selected,
  onClick,
}: StateButtonProps) => {
  return (
    <div
      role="button"
      css={[buttonStyle, selected && selectedButtonStyle(state)]}
      onClick={onClick}
    >
      {state}
    </div>
  );
};
export default StateButton;
