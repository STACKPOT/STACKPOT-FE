// @components/CharacterCheckBox.tsx
import { useEffect, useState } from "react";
import Badge from "../Badge/Badge";
import {
  containerStyle,
  imageStyle,
  selectedStyle,
  checkIconStyle,
  editingContainerStyle,
  labelTextStyle,
  inputStyle,
  editingRowStyle,
  inputWrapperStyle,
  suffixTextInsideInputStyle
} from "./ChacracterCheckbox.style";
import { CircleCheck } from "@assets/svgs";
import { Role } from "types/role";
import { partKoreanNameMap, partMap } from "@constants/categories";


interface CharacterCheckBoxProps {
  category: Role;
  image: string;
  checked: boolean;
  onClick?: () => void;
  option?: boolean;
  initialRecruitment?: Record<Role, number>;
  onCountChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CharacterCheckBox = ({ category, image, checked, onClick, option, initialRecruitment, onCountChange }: CharacterCheckBoxProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [recruitment, setRecruitment] = useState<Record<Role, number>>({} as Record<Role, number>);

  useEffect(() => {
    const partValues = Object.values(partMap);
    setRecruitment(Object.fromEntries(partValues.map(key =>
      [key, initialRecruitment ? initialRecruitment[key] : 0])) as Record<Role, number>);

  }, [initialRecruitment]);

  return (
    <div
      css={[containerStyle, checked && selectedStyle, option && isEditing && editingContainerStyle]}
      onClick={() => {
        if (option) {
          setIsEditing((prev) => !prev);
        } else {
          onClick?.();
        }
      }}
    >

      {option && isEditing ? (
        <div
          onClick={(e) => e.stopPropagation()}
          css={editingRowStyle}
        >
          <span css={labelTextStyle}>인원:</span>
          <div css={inputWrapperStyle}>
            <input
              min={0}
              css={inputStyle}
              value={recruitment[category] > 0 ? recruitment[category] : ""}
              onClick={(e) => e.stopPropagation()}
              onChange={onCountChange}
            />
            <span css={suffixTextInsideInputStyle}>명</span>
          </div>
        </div>
      ) : (
        <>
          <CircleCheck css={checkIconStyle({ checked })} />
          <img src={image} alt={category} css={imageStyle} />
          <Badge content={partKoreanNameMap[category]} />
        </>
      )}
    </div>
  );
};

export default CharacterCheckBox;
