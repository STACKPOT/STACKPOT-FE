export interface MyPageResponse {
  result: Result;
}
export interface GetMyPageParams {
  dataType: string;
}

type Role = "BACKEND" | "FRONTEND" | "DESIGN" | "PLANNING";

export interface BadgeDto {
  badgeId: number;
  badgeName: string;
}

export interface MemberCounts {
  [key: string]: number;
}

export interface CompletedPotBadgeResponseDto {
  potId: number;
  potName: string;
  potStartDate: string;
  potEndDate: string;
  potLan: string;
  members: string;
  userPotRole: string;
  myBadges: BadgeDto[];
  memberCounts: MemberCounts;
}

export interface FeedDto {
  feedId: number;
  writerId: number;
  writer: string;
  writerRole: Role;
  title: string;
  content: string;
  likeCount: number;
  createdAt: string;
}

export interface Result {
  id: number;
  nickname: string;
  role: Role;
  userTemperature: number;
  userIntroduction: string;
  completedPots: CompletedPotBadgeResponseDto[];
  feeds: FeedDto[];
}
