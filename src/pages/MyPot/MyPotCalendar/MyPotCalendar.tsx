import { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, setOptions, localeKo } from "@mobiscroll/react";
import {
  calendarStyle,
  container,
  contentStyle,
  datePickerStyle,
  dateStyle,
  dividerStyle,
  memberContainer,
  nickNameStyle,
  profileContainer,
  taskBoxStyle,
  taskContainer,
  taskTitleContainer,
  taskTitleStyle,
  titleContainer,
  titleStyle,
} from "./MyPotCalendar.style";
import { DdayBadge, MemberGroup } from "@components/index";
import { Profile } from "@assets/svgs";
import { CarrotProfile, MushRoomProfile, OnionProfile } from "@assets/images";

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
    <main>
      <div css={titleContainer}>
        <p css={titleStyle}>캘린더</p>
      </div>
      <div css={container}>
        <div css={calendarStyle}>
          <div className="mbsc-grid" css={datePickerStyle}>
            <Datepicker
              display="inline"
              marked={myMarked}
              value={date}
              onChange={(e) => setDate(e.value)}
            />
          </div>
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
          <div css={taskBoxStyle}>
            <div css={taskTitleContainer}>
              <DdayBadge days={3} />
              <p css={taskTitleStyle}>와이어프레임 완료</p>
            </div>
            <p css={contentStyle}>
              와이어 프레임 제작해서 넘기기 두줄와이어 프레임 제작해서 넘기기
              두줄와이어 프레임 제작해서 넘기기 두줄와이어 프레임 제작와이어
              프레임 제작해서 넘기기 두줄와이어 프레임 제작해서 넘기기
              두줄와이어 프레임 제작해서 넘기기 두줄와이어 프레임 제작...
            </p>
            <div css={memberContainer}>
              <div css={profileContainer}>
                <Profile />
                <p css={nickNameStyle}>닉네임</p>
              </div>
              <MemberGroup
                profileImageList={[
                  MushRoomProfile,
                  CarrotProfile,
                  OnionProfile,
                ]}
              />
            </div>
          </div>
          <div css={dividerStyle} />
        </div>
      </div>
    </main>
  );
};

export default MyPotCalendar;
