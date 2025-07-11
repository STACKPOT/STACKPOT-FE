import { Role } from 'types/role';

export interface LogInResponse {
	tokenServiceResponse: TokenServiceResponse;
	isNewUser: boolean;
	role: Role | null;
}

export interface TokenServiceResponse {
	accessToken: string;
	refreshToken: string;
}

export interface GetUserResponse {
	id: number;
	email: string;
	nickname: string;
	role: Role;
	interest: string;
	userTemperature: number;
	kakaoId: string;
	userIntroduction: string;
}

export interface postSignInPayload {
	role: Role;
	interest: string;
	kakaoId: string;
}

export interface SignInResponse {
	id: number;
	role: Role;
}

export interface MyPageResponse {
	id: number;
	nickname: string;
	role: Role;
	userTemperature: number;
	userIntroduction: string;
	completedPots: CompletedPots[];
	feeds: Feeds[];
}
interface Feeds {
	writerId: number;
	feedId: number;
	writer: string;
	writerRole: Role;
	title: string;
	content: string;
	likeCount: number;
	isLiked: boolean;
	saveCount: number;
	isSaved: boolean;
	commentCount: number;
	isCommented: boolean;
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

export interface PatchUserProfileUpdateParams {
	role: Role;
	interest: string;
	userIntroduction: string;
	nickname: string;
}

export interface NicknameResponse {
	nickname: string;
}

export interface GetUsersMyPagesParams {
	userId: number;
	dataType: string | null;
}

export interface GetUsersMyPagesResponse {
	id: number;
	nickname: string;
	role: Role;
	userTemperature: number;
	userIntroduction: string;
	completedPots: CompletedPots[];
	feeds: Feeds[];
}

export interface GetUsersInfoParams {
	userId: number;
}
