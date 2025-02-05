export interface MyPageResponse {
  id: number;
  nickname: string;
  role: "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN";
  userTemperature: number;
  userIntroduction: string;
  completedPots: CompletedPots[];
  feeds: Feeds[];
}
interface Feeds {
  id: number;
  writer: string;
  writerRole: "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN";
  title: string;
  content: string;
  likeCount: number;
  createdAt: string;
}

interface CompletedPots {
  potId: number;
  potName: string;
  potStartDate: string;
  potEndDate: string;
  potLan: string;
  members: string;
  userPotRole: string;
  myBadges: MyBadges[];
  memberCounts: number;
}

interface MyBadges {
  badgeId: number;
  badgeName: string;
}

export interface GetMyPageParams {
  dataType: string;
}
