import { useState } from "react";
import { PostCard, NoData } from "@components/index";
import { Pagination, PaginationItem } from "@mui/material";
import * as styles from "./MySavedFeeds.style";
import useGetSaveFeeds from "apis/hooks/saves/useGetSaveFeeds";

const PAGE_SIZE = 4;

const MySavedFeeds = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetSaveFeeds(page, PAGE_SIZE);

  const items = data?.feeds ?? [];
  const totalPages = data?.totalPages ?? 1;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const isEmpty = !isLoading && items.length === 0;

  return (
    <section css={styles.feedContainer} aria-label="저장한 피드">
      {isEmpty ? (
        <NoData message={`😥\n내 저장이 없어요`} />
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
                isMyPost={item.isMyPost}
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

export default MySavedFeeds;
