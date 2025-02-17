import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import {
  buttonContainer,
  container,
  contentContainer,
  contentTitle,
  iconStyle,
  toastStyle,
} from "./EditPost.style";
import { PotIcon } from "@assets/svgs";
import { Button, PotButton, UploadToast, PostForm } from "@components/index";
import { FeedPatch } from "apis/types/feed";
import usePatchFeed from "apis/hooks/feeds/usePatchFeed";
import useGetFeedDetails from "apis/hooks/feeds/useGetFeedDetails";
import routes from "@constants/routes";

const EditPost = () => {
  const { feedId } = useParams();
  const navigate = useNavigate();

  const feedIdNumber = feedId ? ~~feedId : 0;

  const { data } = useGetFeedDetails({ feedId: feedIdNumber });
  const { mutate: editFeed } = usePatchFeed();

  const [showToast, setShowToast] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const methods = useForm<FeedPatch>({
    defaultValues: {
      title: "",
      content: "",
      category: "",
    },
  });

  useEffect(() => {
    if (data) {
      methods.reset({
        title: data.title,
        content: data.content,
        category: data.writerRole,
      });
    }
  }, [data, methods]);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { isValid },
  } = methods;

  const onSubmit: SubmitHandler<FeedPatch> = (formData) => {
    if (!feedIdNumber) return;

    editFeed(
      {
        feedId: feedIdNumber,
        body: formData,
      },
      {
        onSuccess: () => {
          navigate(`${routes.feed.base}/${feedId}`);
        },
      }
    );
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
          <form css={contentContainer} onSubmit={handleSubmit(onSubmit)}>
            <div css={contentTitle}>
              게시물 수정하기
              <PotIcon css={iconStyle} />
              <div css={buttonContainer}>
                <PotButton onClick={() => setShowDeleteModal(true)} type="red">
                  삭제하기
                </PotButton>
                <Button variant="action" type="submit" disabled={!isValid}>
                  수정 완료
                </Button>
              </div>
            </div>
            <PostForm register={register} watch={watch} setValue={setValue} />
          </form>
        </FormProvider>
      </div>
    </main>
  );
};

export default EditPost;
