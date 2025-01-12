/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import * as S from "./SelectableField.style";

const SelectableField: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<"public" | "private" | null>(
    null
  );

  const handleChange = (value: "public" | "private") => {
    setSelectedValue(value);
  };

  return (
    <div css={S.container}>
      <span css={S.label}>공개 범위 설정</span>
      <div css={S.radioGroup}>
        <label css={S.radioLabel}>
          <input
            type="radio"
            name="visibility"
            value="public"
            checked={selectedValue === "public"}
            onChange={() => handleChange("public")}
            css={S.radioInput}
          />
          <span css={[S.radioCircle, selectedValue === "public" && S.active]} />
          <span css={S.radioText}>공개</span> 
        </label>

        <label css={S.radioLabel}>
          <input
            type="radio"
            name="visibility"
            value="private"
            checked={selectedValue === "private"}
            onChange={() => handleChange("private")}
            css={S.radioInput}
          />
          <span css={[S.radioCircle, selectedValue === "private" && S.active]} />
          <span css={S.radioText}>나만 보기</span>
        </label>
      </div>
    </div>
  );
};

export default SelectableField;
