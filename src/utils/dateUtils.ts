import { isValid, parse } from "date-fns";

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export const formatTime = (isoString: string) => {
  if (!isoString) return null;
  const date = new Date(isoString);
  const now = new Date();

  const isToday = date.toDateString() === now.toDateString();

  if (isToday) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${ampm} ${formattedHours}:${formattedMinutes}`;
  }

  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month}월 ${day}일`;
};

export const formatCreatedAt = (dateString: string) => {
  let date = new Date(dateString);

  // Fallback parsing for "2025년 8월 7일 11:48" 형태 (한국어 현지 포맷)
  if (!isValid(date)) {
    date = parse(dateString, "yyyy년 M월 d일 HH:mm", new Date());
  }

  if (!isValid(date)) return ""; // 여전히 파싱 불가능할 경우 빈 문자열 반환

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${ampm} ${formattedHours}:${formattedMinutes}`;
};