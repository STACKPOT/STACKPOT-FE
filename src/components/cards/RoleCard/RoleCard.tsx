import { Role } from "types/role";
import { checkIconStyle, container, profileStyle, recruitmentCardStyle, recruitmentCountContainer, recruitmentCountFieldFocusStyle, recruitmentCountFieldStyle, recruitmentCountFieldTextStyle, recruitmentCountInputStyle, recruitmentCountTextStyle, selectedContainerStyle } from "./RoleCard.style";
import { roleImages } from "@constants/roleImage";
import Badge from "@components/commons/Badge/Badge";
import { useRef, useState } from "react";
import { CircleCheck, FillCircleCheck } from "@assets/svgs";
import { partNameMap } from "@constants/categories";

interface RoleCardProps {
  role: Role;
  type: "applicant" | "recruitment";
  selected: boolean;
  recruitmentCount?: number;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({
  role,
  type,
  selected,
  recruitmentCount,
  onClick
}: RoleCardProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isInput, setIsInput] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [count, setCount] = useState<number | undefined>(recruitmentCount);

  const handleOnClick = () => {
    if (type === "applicant") {
      onClick();
    }
  }

  const handleInputTransition = () => {
    if (type === "recruitment") {
      setIsInput(true);
    }
  }
  const handleFocus = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (inputRef.current !== null) inputRef.current.focus();
    setIsFocused(true);
  }

  const onCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (isNaN(value)) return;
    if (value === 0) {
      setCount(undefined);
    } else {
      setCount(value);
    }
  }

  return (
    <>
      {
        <div
          css={[
            container,
            selected && selectedContainerStyle,
            type === "recruitment" && recruitmentCardStyle,
            isInput && recruitmentCountContainer
          ]}
          onClick={handleOnClick}
          onMouseOver={handleInputTransition}
          onMouseOut={() => setIsInput(false)}>
          {(type === "applicant" || !isInput) ?
            <>
              {selected ?
                <FillCircleCheck css={checkIconStyle} />
                :
                <CircleCheck css={checkIconStyle} />
              }
              <img
                css={profileStyle}
                src={roleImages[role]}
                alt="profile" />
              <Badge content={partNameMap[role]} />
            </>
            :
            <>
              <p css={recruitmentCountTextStyle}>인원:</p>
              <div css={[recruitmentCountFieldStyle, isFocused && recruitmentCountFieldFocusStyle]}
                onClick={handleFocus}>
                <input
                  css={recruitmentCountInputStyle}
                  value={count}
                  onChange={onCountChange}
                  ref={inputRef} />
                <p css={recruitmentCountFieldTextStyle}>명</p>
              </div>
            </>
          }

        </div>
      }
    </>

  )
}

export default RoleCard;