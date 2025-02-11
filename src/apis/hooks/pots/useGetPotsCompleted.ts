import { useInfiniteQuery } from "@tanstack/react-query"
import { GetPotsCompleted } from "apis/potAPI"
import { GetPotsCompletedParams } from "apis/types/pot"

const useGetPotsCompleted = ({ cursor, size }: GetPotsCompletedParams) => {
    return useInfiniteQuery({
        queryKey: ["potsCompleted"],
        queryFn: ({ pageParam = cursor }) => GetPotsCompleted({ cursor: pageParam, size }),
        getNextPageParam: (lastPage) => lastPage.result?.nextCursor ?? null,
        initialPageParam: cursor ?? null,
    })
}
export default useGetPotsCompleted;