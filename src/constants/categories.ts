export const participation = ["온라인", "오프라인", "혼합"] as const;
export const period = [
  "단기-1개월",
  "단기-2개월",
  "단기-3개월",
  "장기-6개월 이상",
] as const;

export const searchPartMap: {
  [key: string]: "ALL" | "FRONTEND" | "BACKEND" | "DESIGN" | "PLANNING";
} = {
  전체보기: "ALL",
  기획: "PLANNING",
  디자인: "DESIGN",
  백엔드: "BACKEND",
  프론트엔드: "FRONTEND",
} as const;

export const partMap: {
  [key: string]: "FRONTEND" | "BACKEND" | "DESIGN" | "PLANNING";
} = {
  프론트엔드: "FRONTEND",
  백엔드: "BACKEND",
  디자인: "DESIGN",
  기획: "PLANNING",
} as const;

export const interests = [
  "사이드 프로젝트",
  "1인 개발",
  "공모전",
  "창업",
  "네트워킹 행사",
] as const;

export const partKoreanNameMap: {
  [key: string]: "프론트엔드" | "백엔드" | "디자인" | "기획";
} = {
  FRONTEND: "프론트엔드",
  BACKEND: "백엔드",
  DESIGN: "디자인",
  PLANNING: "기획",
} as const;

export const categories = ["프론트엔드", "백엔드", "디자인", "기획"] as const;

export const participationMap: {
  [key: string]: "ONLINE" | "OFFLINE" | "HYBRID";
} = {
  온라인: "ONLINE",
  오프라인: "OFFLINE",
  혼합: "HYBRID",
};

export const participationKoreanMap: {
  [key: string]: "온라인" | "오프라인" | "혼합";
} = {
  ONLINE: "온라인",
  OFFLINE: "오프라인",
  HYBRID: "혼합",
};

export const categoryOptions = ["팟", "피드"] as const;

export const displayStatus = {
  OPEN: "진행 전",
  IN_PROGRESS: "진행 중",
  CLOSED: "완료",
} as const;

export const reverseDisplayStatus = Object.fromEntries(
  Object.entries(displayStatus).map(([key, value]) => [value, key])
) as Record<
  (typeof displayStatus)[keyof typeof displayStatus],
  keyof typeof displayStatus
>;

export const taskStatue = ["진행 전", "진행 중", "완료"] as const;

export const WorkModal = ["새로운 업무 추가", "업무 수정하기"] as const;

export const categoryText: { [key: string]: string } = {
  ALL: "모든",
  PLANNING: "기획",
  DESIGN: "디자인",
  BACKEND: "백엔드",
  FRONTEND: "프론트엔드",
};

export const potStateMap: {
  [key: string]: "진행 중" | "다 끓였어요" | "모집 중";
} = {
  RECRUITING: "모집 중",
  ONGOING: "진행 중",
  COMPLETED: "다 끓였어요",
} as const;
