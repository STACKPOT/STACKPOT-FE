import { blurOverlayStyle, modalOverlayStyle } from "../../MyPotStatus/MyPotStatus.style";
import MyTodoModal from "@pages/MyPot/MyPotStatus/MyTodoModal/MyTodoModal";

interface MyTodoModalWrapperProps {
  isModalOpen: boolean;
  onClose: () => void;
  potId: number;
}

const MyTodoModalWrapper: React.FC<MyTodoModalWrapperProps> = ({ isModalOpen, onClose, potId }) => {
  return (
    <>
      {isModalOpen && <div css={blurOverlayStyle} />} 
      {isModalOpen && (
        <div css={modalOverlayStyle}>
          <MyTodoModal potId={potId} onClose={onClose} /> 
        </div>
      )}
    </>
  );
};

export default MyTodoModalWrapper;
