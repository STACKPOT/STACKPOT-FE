import { useEffect } from "react";
import { RecruitingMyPotCard, Section } from "./components"
import { cardStyle, container, spinIconContainer, spinIconStyle } from "./MadePot.style"
import { FinishedPotCard } from "@components/index";
import useGetPotsRecruiting from "apis/hooks/pots/useGetPotsRecruiting";
import { Role } from "types/role";
import useGetPotsCompleted from "apis/hooks/pots/useGetPotsCompleted";
import { useInView } from "react-intersection-observer";
import { LoadingSpinnerIcon } from "@assets/svgs";
import Skeleton from "react-loading-skeleton";

const MadePotPage = () => {
  const { data: recruitingPots } = useGetPotsRecruiting();
  const { data: finishedPots, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetPotsCompleted({
      cursor: null,
      size: 10
    });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
      <div css={container}>
        <Section title="모집 중인 나의 팟">
          <>
            {recruitingPots && recruitingPots.map((pot) =>
              <RecruitingMyPotCard
                key={pot.potId}
                {...pot}
                members={Object.keys(pot.members) as Role[]} />)}

          </>
        </Section>
        <Section title="끓인 나의 팟">
          <>
            {isLoading ?
              <Skeleton css={cardStyle} />
              : finishedPots?.pages && finishedPots.pages.length > 0 ? (
                finishedPots.pages.map((page, pageIndex) => (
                  page.result && page.result?.body.content && page.result.body.content.length > 0 &&
                  (page.result.body.content.map((item, itemIndex) => {
                    const isLast =
                      pageIndex === finishedPots.pages.length - 1 &&
                      page.result &&
                      itemIndex === page.result.size - 1;
                    return (
                      <div key={item.potId} ref={isLast ? ref : null}>
                        <FinishedPotCard
                          id={item.potId}
                          title={item.potName}
                          myRole={item.userPotRole}
                          startDate={item.potStartDate}
                          endDate={item.potEndDate}
                          stacks={item.members}
                          languages={item.potLan}
                          members={Object.keys(item.memberCounts) as Role[]}
                          isMyPage={true}
                          buttonType="edit"
                        />
                      </div>
                    )
                  }))
                ))
              ) : (
                <div>팟이 없습니다</div>
              )}
            {isFetchingNextPage && (
              <div css={spinIconContainer}>
                <LoadingSpinnerIcon css={spinIconStyle} />
              </div>
            )}
          </>
        </Section>
      </div>
    </>
  );
};

export default MadePotPage;
