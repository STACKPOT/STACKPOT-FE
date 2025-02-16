import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import {
  buttonContainer,
  categories,
  categoryContainer,
  container,
  contentContainer,
  contentBody,
  contentTitle,
  iconStyle,
  inputStyle,
  textareaStyle,
  toastStyle,
} from "./EditPost.style";
import { PotIcon } from "@assets/svgs";
import {
  Button,
  CategoryButton,
  Modal,
  PotButton,
  UploadToast,
} from "@components/index";
import { partMap } from "@constants/categories";
import { FeedPatch } from "apis/types/feed";
import usePatchFeed from "apis/hooks/feeds/usePatchFeed";
import useGetFeedDetails from "apis/hooks/feeds/useGetFeedDetails";
import routes from "@constants/routes";

const EditPost = () => {
  const { feedId } = useParams();
  const navigate = useNavigate();

  const feedIdNumber = feedId ? ~~feedId : 0;
  console.log(feedIdNumber);

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
          navigate(`/home`);
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

            <div css={contentBody}>
              <input
                css={inputStyle}
                placeholder="메인 제목 작성"
                {...register("title", { required: true })}
              />

              <textarea
                css={textareaStyle}
                placeholder="나의 열정을 이야기해봐요"
                {...register("content", { required: true })}
              />

              <div css={categoryContainer}>
                카테고리
                <div css={categories}>
                  {Object.keys(partMap).map((partName) => (
                    <CategoryButton
                      key={partName}
                      style={partMap[partName]}
                      selected={watch("category") === partMap[partName]}
                      onClick={() => setValue("category", partMap[partName])}
                    >
                      {partName}
                    </CategoryButton>
                  ))}
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </main>
  );
};

export default EditPost;
