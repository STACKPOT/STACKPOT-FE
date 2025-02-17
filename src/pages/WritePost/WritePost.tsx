import React, { useState } from "react";
import {
  container,
  contentTitle,
  contentStyle,
  iconStyle,
  buttonContainer,
  toastStyle,
} from "./WritePost.style";
import { PotIcon } from "@assets/svgs";
import { Button, Modal, PostForm } from "@components/index";
import UploadToast from "@components/commons/Toast/UploadToast";
import { useBlocker, useNavigate } from "react-router-dom";
import usePostFeed from "apis/hooks/feeds/usePostFeed";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { PostFeedParams } from "apis/types/feed";
import routes from "@constants/routes";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const WritePost: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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

  const onSubmit: SubmitHandler<PostFeedParams> = (data) => {
    postFeedMutation.mutate(data, {
      onSuccess: (response) => {
        if (response?.result?.feedId) {
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
            navigate(`${routes.feed.base}/${response.result?.feedId}`);
          }, 2000);
        }
      },
      onError: (error) => {
        setErrorMessage(
          "피드 업로드 실패: " + (error?.message || "알 수 없는 오류")
        );
      },
    });
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

      <Snackbar
        open={Boolean(errorMessage)}
        autoHideDuration={3000}
        onClose={() => setErrorMessage(null)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          severity="error"
          onClose={() => setErrorMessage(null)}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </main>
  );
};

export default WritePost;
