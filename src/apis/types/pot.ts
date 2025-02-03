export interface CreatePotParams {
    potName: string;
    potStartDate: string;
    potEndDate?: string;
    potDuration: string;
    potLan: string;
    potContent: string;
    potStatus?: "RECRUITING" | "ONGOING" | "COMPLETED";
    potModeOfOperation: "ONLINE" | "OFFLINE" | "HYBRID";
    potSummary?: string;
    recruitmentDeadline?: string;
    recruitmentDetails: RecruitmentDetail[];
}

export interface RecruitmentDetail {
    recruitmentRole: "FRONTEND" | "BACKEND" | "DESIGN" | "PLANNING";
    recruitmentCount: number;
}
export interface CreatePotResponse {
    potId: number;
    potName: string;
    potStartDate: string;
    potEndDate: string;
    potDuration: string;
    potLan: string;
    potContent: string;
    potStatus: "RECRUITING" | "ONGOING" | "COMPLETED";
    potModeOfOperation: "ONLINE" | "OFFLINE" | "HYBRID";
    potSummary: string;
    recruitmentDeadline: string;
    recruitmentDetails: RecruitmentDetailResponse;
}
export interface RecruitmentDetailResponse {
    recruitmentId: number;
    recruitmentRole: "FRONTEND" | "BACKEND" | "DESIGN" | "PLANNING";
    recruitmentCount: number;
}