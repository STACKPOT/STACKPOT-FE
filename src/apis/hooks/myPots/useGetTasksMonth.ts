import { useQuery } from "@tanstack/react-query"
import { getTasksMonth } from "apis/myPotAPI"
import { GetTasksMonthParams } from "apis/types/myPot"

const useGetTasksMonth = ({ potId, year, month }: GetTasksMonthParams) => {
  return useQuery({
    queryKey: ["tasksMonth", potId, year, month],
    queryFn: () => getTasksMonth({ potId, year, month }),
    select: (data) => data.result,
  })
}
export default useGetTasksMonth;