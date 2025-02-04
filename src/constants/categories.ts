export const participation = ["온라인", "오프라인", "혼합"] as const;
export const period = [
  "단기-1개월",
  "단기-2개월",
  "단기-3개월",
  "단기-6개월 이상",
] as const;

export const partMap: { [key: string]: "FRONTEND" | "BACKEND" | "DESIGN" | "PLANNING" } = {
  프론트엔드: "FRONTEND",
  백엔드: "BACKEND",
  디자인: "DESIGN",
  기획: "PLANNING",
};
export const interests = [
  "사이드 프로젝트",
  "공모전",
  "창업",
  "네트워킹 행사",
] as const;

export const categories = ["프론트엔드", "백엔드", "디자인", "기획"] as const;

export const participationMap: { [key: string]: "ONLINE" | "OFFLINE" | "HYBRID" } = {
  온라인: "ONLINE",
  오프라인: "OFFLINE",
  혼합: "HYBRID",
}