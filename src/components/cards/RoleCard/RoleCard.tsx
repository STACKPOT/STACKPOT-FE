import { Role } from "types/role";
import {
  checkIconStyle,
  container,
  profileStyle,
  recruitmentCardStyle,
  recruitmentCountContainer,
  recruitmentCountFieldFocusStyle,
  recruitmentCountFieldStyle,
  recruitmentCountFieldTextStyle,
  recruitmentCountInputStyle,
  recruitmentCountTextStyle,
  selectedContainerStyle,
} from "./RoleCard.style";
import { roleImages } from "@constants/roleImage";
import Badge from "@components/commons/Badge/Badge";
import { useRef, useState } from "react";
import { CircleCheck, FillCircleCheck } from "@assets/svgs";
import { partKoreanNameMap } from "@constants/categories";

interface RoleCardProps {
  role: Role;
  type: "selection" | "recruitment";
  selected?: boolean;
  recruitmentCount?: number;
  onClick?: () => void;
  onChange?: (count: number) => void;
}

/**
 *
 * 역할(프,백,기,디)을 나타내는 카드
 * @param role 나타낼 역할
 * @param type `"selection"`는 단순 선택/해제, `"recruitment"`는 모집 인원 입력
 * @param selected 선택됨 여부. type=`"selection"`일 때만 필요.
 * @param recruitmentCount 모집인원 값. type=`"recruitment"`일 때만 필요.
 * @param onClick 카드를 클릭했을 때 호출되는 콜백. type=`"selection"`일 때만 필요.
 * @param onChange 모집인원 입력값이 변화할 때 호출되는 콜백. type=`"recruitment"`일 때만 필요.
 *
 * @example
 * <RoleCard
 *  role="FRONTEND"
 *  type="recruitment"
 *  recruitmentCount={partCount}
 *  onChange={(count) => setPartCount(count)}
 * />
 */
const RoleCard: React.FC<RoleCardProps> = ({
  role,
  type,
  selected,
  recruitmentCount,
  onClick,
  onChange,
}: RoleCardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isInput, setIsInput] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleOnClick = () => {
    if (type === "selection") {
      onClick?.();
    }
  };

  const handleInputTransition = () => {
    if (type === "recruitment") {
      setIsInput(true);
    }
  };
  const handleFocus = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (inputRef.current !== null) inputRef.current.focus();
    setIsFocused(true);
  };

  const onCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value)) return;
    onChange?.(value);
  };

  return (
    <>
      {
        <div
          css={[
            container,
            (selected || recruitmentCount) && selectedContainerStyle,
            type === "recruitment" && recruitmentCardStyle,
            isInput && recruitmentCountContainer,
          ]}
          onClick={handleOnClick}
          onMouseOver={handleInputTransition}
          onMouseOut={() => setIsInput(false)}
        >
          {type === "selection" || !isInput ? (
            <>
              {selected || recruitmentCount ? (
                <FillCircleCheck css={checkIconStyle} />
              ) : (
                <CircleCheck css={checkIconStyle} />
              )}
              <img css={profileStyle} src={roleImages[role]} alt="profile" />
              <Badge content={partKoreanNameMap[role]} />
            </>
          ) : (
            <>
              <p css={recruitmentCountTextStyle}>인원:</p>
              <div
                css={[
                  recruitmentCountFieldStyle,
                  isFocused && recruitmentCountFieldFocusStyle,
                ]}
                onClick={handleFocus}
              >
                <input
                  css={recruitmentCountInputStyle}
                  value={recruitmentCount === 0 ? undefined : recruitmentCount}
                  onChange={onCountChange}
                  ref={inputRef}
                />
                <p css={recruitmentCountFieldTextStyle}>명</p>
              </div>
            </>
          )}
        </div>
      }
    </>
  );
};

export default RoleCard;
