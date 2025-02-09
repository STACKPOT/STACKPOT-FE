export interface FinishedModalResponse {
  potId: number;
  potName: string;
  userId: number;
  potStartDate: string;
  potEndDate: string;
  potContent: string;
  potStatus: string;
  potSummary: string;
  appealContent: string;
  userPotRole: string;
}

export interface GetFinishedModalParams {
  potId: number;
}
