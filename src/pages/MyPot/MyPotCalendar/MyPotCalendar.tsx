import { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions, localeKo } from "@mobiscroll/react";
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
setOptions({
  locale: localeKo,
  themeVariant: "light",
});

const MyPotCalendar = () => {
  const [date, setDate] = useState<Date | null>(null);

  const myMarked = [
    { date: "2025-02-04" },
    { date: "2025-01-02T00:00", color: "#46c4f3" },
    { date: "2025-01-02T00:00", color: "#46c4f3" },
    { date: "2025-01-06T00:00", color: "#7e56bd" },
    { date: "2025-01-11T00:00", color: "#7e56bd" },
    { date: "2025-01-19T00:00", color: "#89d7c9" },
    { date: "2025-01-28T00:00", color: "#ea4986" },
  ];

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
            marked={myMarked}
            value={date}
            onChange={(e) => setDate(e.value)}
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
