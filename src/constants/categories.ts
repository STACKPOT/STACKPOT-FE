export const participation = ["온라인", "오프라인", "혼합"] as const;
export const period = [
  "단기-1개월",
  "단기-2개월",
  "단기-3개월",
  "단기-6개월 이상",
] as const;

export const partMap: { [key: string]: "FE" | "BE" | "PM" | "DE" } = {
  프론트엔드: "FE",
  백엔드: "BE",
  디자인: "DE",
  기획: "PM",
};
