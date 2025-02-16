import React, { useState } from "react";
import {
  container,
  contentTitle,
  contentStyle,
  iconStyle,
  contentBody,
  textareaStyle,
  categoryContainer,
  categories,
  buttonContainer,
  inputStyle,
  toastStyle,
} from "./WritePost.style";
import { PotIcon } from "@assets/svgs";
import { Button, CategoryButton, Modal } from "@components/index";
import { partMap } from "@constants/categories";
import UploadToast from "@components/commons/Toast/UploadToast";
import { useBlocker, useNavigate } from "react-router-dom";
import usePostFeed from "apis/hooks/feeds/usePostFeed";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { PostFeedParams } from "apis/types/feed";
import PostFormBody from "@components/commons/PostFoam/postFoam";

const WritePost: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const navigate = useNavigate();

  const methods = useForm<PostFeedParams>({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
      category: "ALL",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = methods;

  const postFeedMutation = usePostFeed();

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    return isFilled && currentLocation.pathname !== nextLocation.pathname;
  });

  const selectedCategory = watch("category");

  const onSubmit: SubmitHandler<PostFeedParams> = (data) => {
    postFeedMutation.mutate(data, {
      onSuccess: () => {
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
          navigate("/home");
        }, 2000);
      },
      onError: () => {
        alert("피드 업로드 실패");
      },
    });
  };

  const handleCategoryClick = (selectedCategory: string) => {
    const category = partMap[selectedCategory] || "ALL";
    setValue("category", category);
  };

  return (
    <main>
      {showToast && (
        <div css={toastStyle}>
          <UploadToast />
        </div>
      )}
      <div css={container}>
        <FormProvider {...methods}>
          <form css={contentStyle} onSubmit={handleSubmit(onSubmit)}>
            <div css={contentTitle}>
              피드 작성하기
              <PotIcon css={iconStyle} />
              <div css={buttonContainer}>
                <Button variant="action" type="submit" disabled={!isValid}>
                  피드 업로드
                </Button>
              </div>
            </div>

            <PostFormBody
              register={register}
              watch={watch}
              setValue={setValue}
            />
          </form>
        </FormProvider>
      </div>
      {blocker.state === "blocked" && (
        <Modal
          title="페이지를 나가시겠어요?"
          message="입력한 내용을 처음부터 시작해야 해요."
          onConfirm={blocker.proceed}
          onCancel={blocker.reset}
        />
      )}
    </main>
  );
};

export default WritePost;
