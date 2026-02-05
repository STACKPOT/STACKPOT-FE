import { useState } from "react";
import { CategoryButton, PostCard, NoData } from "@components/index";
import { Pagination, PaginationItem } from "@mui/material";
import * as styles from "./MyLikes.syls";
import useGetFeedsLikes from "apis/hooks/feeds/useGetFeedsLikes";

const PAGE_SIZE = 4;

const MyLikes = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetFeedsLikes(page, PAGE_SIZE);

  const items = data?.feeds ?? [];
  const totalPages = data?.totalPages ?? 1;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const isEmpty = !isLoading && items.length === 0;

  return (
    <section css={styles.feedContainer} aria-label="좋아요한 피드">
      <nav aria-label="콘텐츠 유형">
        <CategoryButton style="basic" selected={true}>
          피드
        </CategoryButton>
      </nav>

      {isEmpty ? (
        <NoData message={`😥\n내 공감이 없어요`} />
      ) : (
        <>
          <div css={styles.itemContainer}>
            {items.map((item: any) => (
              <PostCard
                key={item.feedId}
                role={item.writerRole}
                writerId={item.writerId}
                nickname={item.writer}
                createdAt={item.createdAt}
                title={item.title}
                content={item.content}
                likeCount={item.likeCount}
                saveCount={item.saveCount}
                commentCount={item.commentCount}
                isLiked={item.isLiked}
                isSaved={item.isSaved}
                feedId={item.feedId}
                isMyPost={item.isOwner}
              />
            ))}
          </div>

          {!isEmpty && (
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
              shape="rounded"
              css={styles.paginationStyle}
              renderItem={(item) => (
                <PaginationItem {...item} css={styles.paginationItemStyle} />
              )}
            />
          )}
        </>
      )}
    </section>
  );
};

export default MyLikes;
