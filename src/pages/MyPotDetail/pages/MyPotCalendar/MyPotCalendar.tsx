import { useEffect, useState } from "react";
import {
  calendarStyle,
  container,
  dateStyle,
  dateAndButtonContainer,
  dayPickerGlobalStyle,
  dividerStyle,
  mainContainer,
  noticeStyle,
  taskContainer,
  taskContainerStyle,
  emptyTaskContainerStyle,
} from "./MyPotCalendar.style";
import { TaskBox } from "./components";
import useGetTasksMonth from "apis/hooks/myPots/useGetTasksMonth";
import { useParams } from "react-router-dom";
import useGetTasksCalendar from "apis/hooks/myPots/useGetTasksCalendar";

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { ko } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import { formatDate } from "@utils/dateUtils";
import { Global } from "@emotion/react";
import { AboutWorkModalWrapper } from "@pages/MyPotDetail/components";
import { WorkModal } from "@constants/categories";
import { Button } from "@components/index";
import { WavingHandIcon } from "@assets/svgs";

const MyPotCalendar = () => {
  const { potId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const potIdNumber = Number(potId);

  const [date, setDate] = useState<Date | null>(null);
  const [month, setMonth] = useState<Date>(new Date());
  const [days, setDays] = useState<string[]>([]);
  const taskDates = days.map((d) => new Date(d));

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    setDays([...new Set(monthTasks?.map(task => task.deadLine))]);
  }, [monthTasks])

  return (
    <main css={mainContainer}>
      <AboutWorkModalWrapper
        isModalOpen={isModalOpen}
        activeStatus={null}
        modalTitle={WorkModal[0]}
        taskId={null}
        onClose={() => setIsModalOpen(false)}
      />
      <div css={container}>
        <div css={calendarStyle}>
          <Global styles={dayPickerGlobalStyle} />
          <DayPicker

            mode="single"
            selected={date ?? undefined}
            onSelect={(selected) => {
              setDate(selected ?? null);
            }}
            formatters={{
              formatCaption: (date, options) =>
                format(date, 'yyyy년 M월', options),
            }}
            defaultMonth={month}
            onMonthChange={(m) => setMonth(m)}
            showOutsideDays
            fixedWeeks
            weekStartsOn={1}
            locale={ko}
            modifiers={{
              hasTask: taskDates
            }}
            modifiersClassNames={{
              hasTask: 'has-task'
            }}
          />
        </div>
        <div css={taskContainer}>
          <div css={dateAndButtonContainer}>
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
            <Button variant="cta" onClick={handleOpenModal}>
              새로운 업무 추가
            </Button>
          </div>
          <div css={dividerStyle} />
          <div css={taskContainerStyle}>
            {dayTasks && dayTasks.length > 0 ? (
              dayTasks.map((task) => <TaskBox potId={potIdNumber} task={task} key={task.taskboardId} />)
            ) : (
              <div css={emptyTaskContainerStyle}>
                <WavingHandIcon />
                <p css={noticeStyle}>일정이 없어요</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyPotCalendar;
