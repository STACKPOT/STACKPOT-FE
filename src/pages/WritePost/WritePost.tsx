import React, { useState } from "react";
import {
  container,
  contentTitle,
  contentStyle,
  iconStyle,
  buttonContainer,
} from "./WritePost.style";
import { PotIcon } from "@assets/svgs";
import { Button, Modal, PostForm } from "@components/index";
import { useBlocker } from "react-router-dom";
import usePostFeed from "apis/hooks/feeds/usePostFeed";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { PostFeedParams } from "apis/types/feed";

const WritePost: React.FC = () => {
  const [isFilled, setIsFilled] = useState(false);

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

  const onSubmit: SubmitHandler<PostFeedParams> = (data) => {
    postFeedMutation.mutate(data);
  };

  return (
    <main>
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

            <PostForm register={register} watch={watch} setValue={setValue} />
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
