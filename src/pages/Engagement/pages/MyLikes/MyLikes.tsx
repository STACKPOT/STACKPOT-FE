import { useState } from "react";
import { CategoryButton, PostCard } from "@components/index";
import { Pagination, PaginationItem } from "@mui/material";
import * as styles from "./MyLikes.syls";
import useGetFeedsLikes from "apis/hooks/saves/useGetFeedsLikes";

const PAGE_SIZE = 4;

const MyLikes = () => {
  const [page, setPage] = useState(1);

  const { data } = useGetFeedsLikes(page, PAGE_SIZE);

  const items = data?.feeds ?? [];
  const totalPages = data?.totalPages ?? 1;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <section css={styles.feedContainer} aria-label="콘텐츠 유형 선택">
      <nav>
        <CategoryButton style="basic" selected={true}>
          피드
        </CategoryButton>
      </nav>
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
    </section>
  );
};

export default MyLikes;
