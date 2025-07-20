import React, { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  contentBody,
  inputStyle,
  textareaStyle,
  categoryContainer,
  buttons,
  labelContainer,
  titleLabelContainer,
  titleCountStyle,
} from "./PostForm.style";
import { CategoryButton } from "@components/index";
import { interestMap, interests, partMap } from "@constants/categories";
import { PostFeedParams } from "apis/types/feed";
import useGetFeedSeries from "apis/hooks/feeds/useGetFeedSeries";

interface PostFormProps {
  isDataSet?: boolean;
}
const PostForm: React.FC<PostFormProps> = ({ isDataSet }: PostFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const { register, watch, setValue } = useFormContext<PostFeedParams>();
  const [selectedCategories, selectedInterests, selectedSeries] = watch([
    "categories",
    "interests",
    "seriesId",
  ]);

  const { data: series } = useGetFeedSeries();
  const [selectedSeriesName, setSelectedSeriesName] = useState<string | null>(
    null
  );
  const [titleState, setTitleState] = useState<"blur" | "focus" | "max">(
    "blur"
  );

  useEffect(() => {
    if (series && selectedSeries) {
      setSelectedSeriesName(series[selectedSeries]);
    }
  }, [isDataSet]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("title", e.target.value, { shouldValidate: true });
    setTitleState(e.target.value.length >= 50 ? "max" : "focus");
  };

  const handleTitleFocus = (focus: boolean) => {
    if (watch("title").length < 50) {
      setTitleState(focus ? "focus" : "blur");
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue("content", e.target.value, { shouldValidate: true });
    if (contentRef.current) {
      contentRef.current.style.height = "0px";
      contentRef.current.style.height = contentRef.current.scrollHeight + "px";
    }
  };

  const handleCategoryClick = (category: string) => {
    setValue(
      "categories",
      selectedCategories.includes(partMap[category])
        ? selectedCategories.filter((item) => item !== partMap[category])
        : [...selectedCategories, partMap[category]]
    );
  };

  const handleInterestClick = (interest: string) => {
    setValue(
      "interests",
      selectedInterests.includes(interestMap[interest])
        ? selectedInterests.filter((item) => item !== interestMap[interest])
        : [...selectedInterests, interestMap[interest]]
    );
  };

  const handleSeriesClick = (selected: string) => {
    setSelectedSeriesName(selectedSeriesName ? null : selected);
    if (series) {
      const selectedId = Object.entries(series)
        .find(([_, value]) => value === selected)
        ?.at(0);
      const selectedIdNumber = Number(selectedId);
      if (selectedId) {
        setValue(
          "seriesId",
          selectedIdNumber === selectedSeries ? null : selectedIdNumber
        );
      }
    }
  };

  return (
    <div css={contentBody}>
      <div css={labelContainer}>
        시리즈
        <div css={buttons("series")}>
          {series &&
            Object.values(series).map((item) => (
              <CategoryButton
                key={item}
                style="pot"
                onClick={handleSeriesClick}
                selected={selectedSeriesName === item}
              >
                {item}
              </CategoryButton>
            ))}
        </div>
      </div>
      <div css={titleLabelContainer}>
        제목
        <input
          css={inputStyle(titleState)}
          placeholder="메인 제목 작성"
          {...register("title", { maxLength: 50, required: true })}
          maxLength={50}
          ref={titleRef}
          value={watch("title")}
          onChange={handleTitleChange}
          onFocus={() => handleTitleFocus(true)}
          onBlur={() => handleTitleFocus(false)}
        />
        <p css={titleCountStyle(titleState)}>
          {titleRef.current?.value.length ?? 0}/50
        </p>
      </div>
      <textarea
        css={textareaStyle}
        placeholder="나의 열정을 이야기해봐요"
        {...register("content", { required: true })}
        ref={contentRef}
        value={watch("content")}
        onChange={handleContentChange}
      />

      <div css={categoryContainer}>
        <div css={labelContainer}>
          카테고리
          <div css={buttons("category")}>
            {Object.keys(partMap).map((partName) => (
              <CategoryButton
                key={partName}
                style="pot"
                selected={selectedCategories.includes(partMap[partName])}
                onClick={handleCategoryClick}
              >
                {partName}
              </CategoryButton>
            ))}
          </div>
        </div>
        <div css={labelContainer}>
          관심사
          <div css={buttons("interest")}>
            {interests.map((interestName) => (
              <CategoryButton
                key={interestName}
                style="pot"
                selected={selectedInterests.includes(interestMap[interestName])}
                onClick={handleInterestClick}
              >
                {interestName}
              </CategoryButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
