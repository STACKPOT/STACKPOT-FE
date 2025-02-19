import { useQuery } from "@tanstack/react-query"
import { getTasksCalendar } from "apis/myPotAPI";
import { GetTasksCalendarParams } from "apis/types/myPot";

const useGetTasksCalendar = ({ potId, date }: GetTasksCalendarParams) => {
  return useQuery({
    queryKey: ["taskCalendar", potId, date],
    queryFn: () => getTasksCalendar({ potId, date }),
    select: (data) => data.result,
  })
}
export default useGetTasksCalendar;