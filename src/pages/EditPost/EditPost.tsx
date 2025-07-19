import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import {
  backIconStyle,
  buttonContainer,
  container,
  contentStyle,
  contentTitle,
  iconStyle,
} from "./EditPost.style";
import { LeftIcon, PotIcon } from "@assets/svgs";
import { Button, PostForm } from "@components/index";
import { PostFeedParams } from "apis/types/feed";
import usePatchFeed from "apis/hooks/feeds/usePatchFeed";
import useGetFeedDetails from "apis/hooks/feeds/useGetFeedDetails";
import useDeleteFeed from "apis/hooks/feeds/useDeleteFeed";
import routes from "@constants/routes";
import { interestMap } from "@constants/categories";

const EditPost = () => {
  const { feedId } = useParams();

  const feedIdNumber = feedId ? ~~feedId : 0;
  const navigate = useNavigate();
  const [isDataSet, setIsDataSet] = useState(false);

  const { data } = useGetFeedDetails({ feedId: feedIdNumber });
  const { mutate: editFeed } = usePatchFeed();
  const { mutate: deleteFeed } = useDeleteFeed();

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

  useEffect(() => {
    if (data) {
      methods.reset({
        title: data.feed.title,
        content: data.feed.content,
        categories: data.feed.categories,
        interests: data.feed.interests.map((interest) => interestMap[interest]),
        seriesId: data.feed.series?.seriesId,
      });
      setIsDataSet(true);
    }
  }, [data, methods]);

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit: SubmitHandler<PostFeedParams> = (formData) => {
    if (feedIdNumber) {
      editFeed({
        feedId: feedIdNumber,
        body: formData,
      });
    }
  };

  const handleDelete = () => {
    if (feedIdNumber) {
      deleteFeed(feedIdNumber, {
        onSuccess: () => {
          navigate(`${routes.home}`);
        },
      });
    }
  };

  return (
    <main>
      <div css={container}>
        <FormProvider {...methods}>
          <form css={contentStyle} onSubmit={handleSubmit(onSubmit)}>
            <div css={contentTitle}>
              <LeftIcon css={backIconStyle} onClick={() => navigate(-1)} />
              피드 수정하기
              <PotIcon css={iconStyle} />
              <div css={buttonContainer}>
                <Button
                  variant="action"
                  actionType="neg"
                  onClick={handleDelete}
                >
                  피드 삭제
                </Button>
                <Button variant="action" type="submit" disabled={!isValid}>
                  수정 완료
                </Button>
              </div>
            </div>
            <PostForm isDataSet={isDataSet} />
          </form>
        </FormProvider>
      </div>
    </main>
  );
};

export default EditPost;
