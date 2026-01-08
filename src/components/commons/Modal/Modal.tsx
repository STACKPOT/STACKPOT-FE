import {
  container,
  footer,
  titleStyle,
  messageStyle,
  background,
  closeIconStyle,
  titleContentContainer,
} from "./Modal.style";
import { CloseIcon } from "@assets/svgs";
import Button from "../Button/Button";
import { SerializedStyles } from "@emotion/react";

interface ModalProps {
  /** 모달의 제목 */
  title: string;

  /** 모달의 본문 텍스트 */
  message: string | React.ReactNode;

  /**
   * _확인 버튼_ 스타일 타입
   * - `"normal"`: 파란색 버튼
   * - `"neg"` : 빨간색 버튼
   *
   * @default "normal"
   */
  confirmType?: "normal" | "neg";

  /**
   * 취소 버튼에 표시될 문구.
   * 미지정시 취소 버튼 없음
   */
  cancelButton?: string;

  /**
   * 확인 버튼에 표시될 문구.
   */
  confirmButton: string;

  /**
   * container에 적용할 커스텀 스타일 (width 등)
   */
  customContainerStyle?: SerializedStyles;

  /**
   * content에 적용할 커스텀 스타일
   */
  customContentStyle?: SerializedStyles;

  /** 확인 버튼 클릭 시 호출되는 콜백함수 */
  onConfirm: () => void;

  /** 취소 버튼 또는 닫기 아이콘 클릭 시 호출되는 콜백함수.*/
  onCancel: () => void;
}

/**
 * 확인/취소 두개의 선택지를 가지는 모달 컴포넌트
 *
 * @example
 * ```tsx
 * <Modal
 *  title={`팟을\n삭제하시겠습니까?`}
 *  message="삭제하시면 복구할 수 없습니다. 정말로 삭제할까요?"
 *  confirmType="neg"
 *  cancelButton="취소하기"
 *  confirmButton="삭제"
 *  onCancel={() => setShowDeleteModal(false)}
 *  onConfirm={handleDeletePot}
 * />
 * ```
 */
const Modal: React.FC<ModalProps> = ({
  title,
  message,
  confirmType = "normal",
  cancelButton,
  confirmButton,
  customContainerStyle,
  customContentStyle,
  onConfirm,
  onCancel,
}) => {
  return (
    <div css={background}>
      <div css={container(customContainerStyle)}>
        <CloseIcon css={closeIconStyle} onClick={onCancel} />
        <div css={titleContentContainer}>
          <p css={titleStyle}>{title}</p>
          <p css={[messageStyle, customContentStyle]}>{message}</p>
        </div>
        <div css={footer}>
          {cancelButton && (
            <Button variant="action" actionType="alt" onClick={onCancel}>
              {cancelButton}
            </Button>
          )}
          <Button
            onClick={onConfirm}
            variant="action"
            actionType={confirmType === "neg" ? "neg" : "basic"}
          >
            {confirmButton ?? "동의합니다"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
