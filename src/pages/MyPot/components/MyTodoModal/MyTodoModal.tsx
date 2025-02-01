import { blurOverlayStyle, modalOverlayStyle } from "../../MyPotStatus/MyPotStatus.style";
import MyTodoModal from "@pages/MyPot/MyPotStatus/MyTodoModal/MyTodoModal";

interface MyTodoModalWrapperProps {
  isModalOpen: boolean;
  onClose: () => void;
}

const MyTodoModalWrapper: React.FC<MyTodoModalWrapperProps> = ({ isModalOpen, onClose }) => {
  return (
    <>
      {isModalOpen && <div css={blurOverlayStyle} />} 
      {isModalOpen && (
        <div css={modalOverlayStyle}>
          <MyTodoModal onClose={onClose} /> 
        </div>
      )}
    </>
  );
};

export default MyTodoModalWrapper;
