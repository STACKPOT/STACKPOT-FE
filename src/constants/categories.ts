export const participation = ["온라인", "오프라인", "혼합"] as const;
export const period = [
  "단기-1개월",
  "단기-2개월",
  "단기-3개월",
  "장기-6개월 이상",
] as const;

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

export const categories = ["프론트엔드", "백엔드", "디자인", "기획"] as const;

export const participationMap: {
  [key: string]: "ONLINE" | "OFFLINE" | "HYBRID";
} = {
  온라인: "ONLINE",
  오프라인: "OFFLINE",
  혼합: "HYBRID",
};

export const categoryOptions = ["팟", "피드"] as const;

export const displayStatus = {
  OPEN: "진행 전",
  IN_PROGRESS: "진행 중",
  CLOSED: "완료",
} as const;

export const taskStatue = ["진행 전", "진행 중", "완료"] as const;

export const WorkModal = ["새로운 업무 추가", "업무 수정하기"] as const;