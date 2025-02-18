import { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions, localeKo, MbscDatepickerPageChangeEvent } from "@mobiscroll/react";
import {
  calendarStyle,
  container,
  dateStyle,
  dividerStyle,
  iconStyle,
  mainContainer,
  noticeStyle,
  taskContainer,
  taskContainerStyle,
  titleContainer,
  titleStyle,
} from "./MyPotCalendar.style";
import { TaskBox } from "./components";
import { taskData } from "mocks/taskData";
import { PotIcon } from "@assets/svgs";
import useGetTasksMonth from "apis/hooks/myPots/useGetTasksMonth";
import { useParams } from "react-router-dom";
setOptions({
  locale: localeKo,
  themeVariant: "light",
});

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
      <div css={titleContainer}>
        <p css={titleStyle}>캘린더</p>
        <PotIcon css={iconStyle} />
      </div>
      <div css={container}>
        <div css={calendarStyle}>
          <Datepicker
            display="inline"
            marked={
              monthTasks?.filter((task) => task.participating).map((task) =>
                ({ date: task.deadLine })
              )
            }
            value={date}
            onChange={(e) => setDate(e.value as Date)}
            onPageChange={handleMonthChange}
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
            {taskData.length === 0 ? (
              <p css={noticeStyle}>일정이 없습니다</p>
            ) : (
              taskData.map((task) => <TaskBox task={task} key={task.id} />)
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPotCalendar;
