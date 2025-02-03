export interface FeedResponse {
  feeds: Feeds[];
  nextCursor: number;
}

interface Feeds {
  id: number;
  writer: string;
  writerRole: string;
  title: string;
  content: string;
  likeCount: number;
  createdAt: string;
}

export interface GetFeedParams {
  category: string;
  sort: string;
  limit: number;
  cursor: number | null;
}
