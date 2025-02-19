import { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions, localeKo, MbscDatepickerPageChangeEvent } from "@mobiscroll/react";
import {
  calendarStyle,
  container,
  dateStyle,
  dividerStyle,
  mainContainer,
  noticeStyle,
  taskContainer,
  taskContainerStyle,
} from "./MyPotCalendar.style";
import { TaskBox } from "./components";
import useGetTasksMonth from "apis/hooks/myPots/useGetTasksMonth";
import { useParams } from "react-router-dom";
import useGetTasksCalendar from "apis/hooks/myPots/useGetTasksCalendar";
setOptions({
  locale: localeKo,
  themeVariant: "light",
  theme: "ios"
});
import { formatDate } from "@utils/dateUtils";
import theme from "@styles/theme";

const MyPotCalendar = () => {
  const { potId } = useParams();
  const potIdNumber = Number(potId);

  const [date, setDate] = useState<Date | null>(null);
  const [month, setMonth] = useState<Date>(new Date());

  const { data: monthTasks } = useGetTasksMonth({
    potId: potIdNumber,
    year: month.getFullYear(),
    month: month.getMonth() + 1,
  })
  const { data: dayTasks } = useGetTasksCalendar({
    potId: potIdNumber,
    date: formatDate(date ?? new Date())
  })

  const getDayOfWeek = (date: Date | null) => {
    if (!date) return "";
    const days = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    return days[date.getDay()];
  };

  const handleMonthChange = (e: MbscDatepickerPageChangeEvent) => {
    if (e.month) {
      setMonth(e.month);
    }
  }

  return (
    <main css={mainContainer}>
      <div css={container}>
        <div css={calendarStyle}>
          <Datepicker
            display="inline"
            marked={
              monthTasks?.filter((task) => task.participating).map((task) => {
                const taskDate = new Date(task.deadLine.split('. ').join('-'));
                return {
                  date: task.deadLine,
                  color: taskDate.getDate() === date?.getDate()
                    ? theme.color.point.alternative
                    : theme.color.object.alternative,
                };
              })
            }
            value={date}
            onChange={(e) => setDate(e.value as Date)}
            onPageChange={handleMonthChange}
            showOuterDays={false}
          />
        </div>
        <div css={taskContainer}>
          <p css={dateStyle}>
            {date
              ? `${date.getFullYear()}. ${String(date.getMonth() + 1).padStart(
                2,
                "0"
              )}. ${String(date.getDate()).padStart(2, "0")} (${getDayOfWeek(
                date
              )})`
              : ""}
          </p>
          <div css={dividerStyle} />
          <div css={taskContainerStyle}>
            {dayTasks && dayTasks.length > 0 ? (
              dayTasks.map((task) => <TaskBox potId={potIdNumber} task={task} key={task.taskboardId} />)
            ) : (
              <p css={noticeStyle}>일정이 없습니다</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPotCalendar;
