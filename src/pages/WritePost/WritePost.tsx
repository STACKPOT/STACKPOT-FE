import React from "react";
import {
  container,
  contentTitle,
  contentStyle,
  iconStyle,
  buttonContainer,
  backIconStyle,
} from "./WritePost.style";
import { LeftIcon, PotIcon } from "@assets/svgs";
import { Button, Modal, PostForm } from "@components/index";
import { useBlocker, useNavigate } from "react-router-dom";
import usePostFeed from "apis/hooks/feeds/usePostFeed";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { PostFeedParams } from "apis/types/feed";

const WritePost: React.FC = () => {
  const navigate = useNavigate();

  const methods = useForm<PostFeedParams>({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
      categories: [],
      interests: [],
      seriesId: null,
    },
  });

  const { handleSubmit, formState, watch } = methods;

  const postFeedMutation = usePostFeed();

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    return (
      formState.isDirty && currentLocation.pathname !== nextLocation.pathname
    );
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
              <LeftIcon css={backIconStyle} onClick={() => navigate(-1)} />
              피드 작성하기
              <PotIcon css={iconStyle} />
              <div css={buttonContainer}>
                <Button
                  variant="action"
                  type="submit"
                  disabled={!formState.isValid}
                >
                  피드 업로드
                </Button>
              </div>
            </div>

            <PostForm />
          </form>
        </FormProvider>
      </div>

      {blocker.state === "blocked" && (
        <Modal
          title="페이지를 나가시겠어요?"
          message="입력한 내용을 처음부터 시작해야 해요."
          confirmButton="나가기"
          cancelButton="취소"
          onConfirm={blocker.proceed}
          onCancel={blocker.reset}
        />
      )}
    </main>
  );
};

export default WritePost;
