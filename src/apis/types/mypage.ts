export interface MyPageResponse {
  id: number;
  email: string;
  nickname: string;
  role: string;
  interest: string;
  userTemperature: number;
  kakaoId: string;
  userIntroduction: string;
  completedPosts: any[];
  feeds: any[];
}
