export interface GetPotsParams {
  page: number;
  size: number;
}

export interface PotsResponse {
  totalPages: number;
  currentPage: number;
  pots: Pots[];
}

interface Pots {
  userId: number;
  userRole: string;
  userNickname: string;
  potId: number;
  potName: string;
  potContent: string;
  recruitmentRoles: string[];
  dday: string;
}
