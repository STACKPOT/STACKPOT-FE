import { useState } from "react";
import { NoData, PotCard } from "@components/index";
import { Pagination, PaginationItem } from "@mui/material";
import * as styles from "./MySavedPots.style";
import useGetSavePots from "apis/hooks/saves/useGetSavePots";

const PAGE_SIZE = 6;

const MySavedPots = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading } = useGetSavePots(page, PAGE_SIZE);

  const items = data?.pots ?? [];
  const totalPages = data?.totalPages ?? 1;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const isEmpty = !isLoading && items.length === 0;

  return (
    <section css={styles.potContainer} aria-label="저장한 팟">
      {isEmpty ? (
        <NoData message={`😥\n내 저장이 없어요`} />
      ) : (
        <>
          <div css={styles.itemContainer}>
            {items.map((pot) => (
              <PotCard
                key={pot.potId}
                userId={pot.userId}
                potId={pot.potId}
                role={pot.userRoles}
                nickname={pot.userNickname}
                dday={pot.dday}
                title={pot.potName}
                content={pot.potContent}
                categories={pot.recruitmentRoles}
                isSaved={pot.isSaved}
                potSaveCount={pot.potSaveCount}
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

export default MySavedPots;
