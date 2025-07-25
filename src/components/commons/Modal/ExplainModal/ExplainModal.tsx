import { CloseIcon } from "@assets/svgs";
import {
  buttonStyle,
  closeButtonStyle,
  containerStyle,
  contentContainer,
  modalBackgroundStyle,
  profileContentStyle,
  profileContainerStyle,
  profileNicknameStyle,
  profileStyle,
  titleContentContainerStyle,
  titleStyle,
} from "./ExplainModal.style";
import Button from "@components/commons/Button/Button";
import { Role } from "types/role";
import { roleImages } from "@constants/roleImage";
import { SerializedStyles } from "@emotion/react";

interface ExplainModalProps {
  /**
   * 모달의 타입
   * - `"normal"`- 제목이 포함된 모달. 제목 아래에 컨텐츠가 들어간다. 상하좌우에 패딩값 있음
   * - `"profile"`- 사용자의 프로필을 보여주는 모달. `role`,`nickname`값 필수.
   * - `"custom"`- 내부 컨텐츠를 모두 직접 구성하는 모달(제목 포함X)
   * @default "normal"
   */
  type?: "normal" | "profile" | "custom";

  /**
   * 모달의 제목.
   * type=`"normal"`, `"profile"`인 경우에만 필요.
   */
  title?: string;

  /**
   * 모달에 들어가는 컨텐츠 부분.
   * type=`"profile"`인 경우에는 필요 없음.
   */
  children?: React.ReactNode;

  /** 버튼에 들어갈 문구 */
  buttonText: string;

  /** 버튼 비활성화 여부 */
  disabled?: boolean;

  /** 사용자의 role. type=`"profile"`일 경우에만 필요 */
  role?: Role;

  /** 사용자의 닉네임. type=`"profile"`일 경우에만 필요 */
  nickname?: string;

  /**
   * 모달 컨테이너에 대한 커스텀 스타일 (예: 모달 너비 등)
   */
  customContainerStyle?: SerializedStyles;

  /** 버튼을 클릭했을 때 호출되는 콜백 */
  onButtonClick: () => void;

  /** 닫기 아이콘을 클릭했을 때 호출되는 콜백함수 */
  onCancel: () => void;

  /** 삭제하기 버튼을 클릭했을 때 호출되는 콜백 */
  onDeleteClick?: () => void;
}

/**
 * 컨텐츠를 직접 구성해야 하는 모달
 * 
 *
 * @param props ExplainModalProps 객체
 * @param props.type (optional) 모달의 타입. 기본값은 `"normal"`
 * @param props.title 모달의 제목
 * @param props.children 모달에 들어갈 컨텐츠 부분
 * @param props.buttonText 모달의 버튼에 들어가는 문구
 * @param props.disabled (optional) 버튼의 비활성화 여부.
 * @param props.role type=`"profile"`일 경우 대상의 role
 * @param props.nickname type=`"profile"`일 경우 대상의 닉네임
 * @param props.customContainerStyle (optional) 모달 컨테이너에 대한 커스텀 스타일 (예: 모달 너비 등)
 * @param props.onButtonClick 모달 버튼을 클릭했을 때 호출되는 콜백함수
 * @param props.onCancel 닫기 아이콘을 클릭했을 때 호출되는 콜백함수
 * @param props.onDeleteClick '삭제하기'버튼을 클릭했을 때 호출되는 콜백
 * 
 * @remarks
 * 모달은 기본적으로 반응형으로 처리됨.
 * 단, `customContainerStyle`값을 지정하는 경우에는 반응형이 적응되지 않고 모달 크기가 고정됨.
 * 
 * @example
 * ```tsx
 * <ExplainModal
    type="normal"
    buttonText="확인"
    title="제목"
    customContainerStyle={css({ width: "50rem" })}
    onButtonClick={handleButtonClick}
    onCancel={handleCancelModal}
  >
    <div css={content}>내용</div>
  </ExplainModal>
 * ```
 */
const ExplainModal: React.FC<ExplainModalProps> = ({
  type = "normal",
  title,
  children,
  buttonText,
  disabled,
  role,
  nickname,
  customContainerStyle,
  onButtonClick,
  onCancel,
  onDeleteClick,
}: ExplainModalProps) => {
  return (
    <div css={modalBackgroundStyle}>
      <div
        css={containerStyle(
          type === "profile" ? profileContainerStyle : customContainerStyle
        )}
      >
        <CloseIcon type="button" css={closeButtonStyle} onClick={onCancel} />
        {type === "custom" ? (
          children
        ) : (
          <div css={titleContentContainerStyle(type)}>
            {title && <p css={titleStyle}>{title}</p>}
            <div css={contentContainer(customContainerStyle !== undefined)}>
              {type === "normal" ? (
                children
              ) : (
                <div css={profileContentStyle}>
                  <img
                    css={profileStyle}
                    src={role ? roleImages[role] : undefined}
                    alt={role}
                  />
                  <p css={profileNicknameStyle}>{nickname}</p>
                </div>
              )}
            </div>
          </div>
        )}
        <Button
          type="button"
          variant="full"
          customStyle={buttonStyle}
          onClick={onButtonClick}
          disabled={disabled}
        >
          {buttonText}
        </Button>
        {onDeleteClick && (
          <Button
            type="button"
            variant="full"
            actionType="neg"
            customStyle={buttonStyle}
            onClick={onDeleteClick}
          >
            삭제하기
          </Button>
        )}
      </div>
    </div>
  );
};
export default ExplainModal;
