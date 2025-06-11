import { Role } from "types/role";

interface CommentProps {
  userId: number;
  role: Role;
  nickname: string;
  date: string;
  content: string;
  isMyComment: boolean;
  isRecomment: boolean;
  isWriter: boolean;
  isDeleted: boolean;
}
export const commentData: CommentProps[] = [
  {
    userId: 1,
    role: "BACKEND",
    nickname: "눈물을 흘리는 양파",
    date: "2025년 12월 01일 15:22",
    content: "정말 개발자가 되고 싶은 마음을 다시 일깨워주는 글이였습니다. 감사합니다!",
    isMyComment: false,
    isRecomment: false,
    isWriter: false,
    isDeleted: false,
  },
  {
    userId: 1,
    role: "BACKEND",
    nickname: "눈물을 흘리는 양파",
    date: "2025년 12월 01일 15:22",
    content: "정말 개발자가 되고 싶은 마음을 다시 일깨워주는 글이였습니다. 감사합니다!",
    isMyComment: true,
    isRecomment: true,
    isWriter: true,
    isDeleted: false,
  },
  {
    userId: 1,
    role: "BACKEND",
    nickname: "눈물을 흘리는 양파",
    date: "2025년 12월 01일 15:22",
    content: "정말 개발자가 되고 싶은 마음을 다시 일깨워주는 글이였습니다. 감사합니다!",
    isMyComment: false,
    isRecomment: false,
    isWriter: true,
    isDeleted: false,
  },
  {
    userId: 1,
    role: "BACKEND",
    nickname: "눈물을 흘리는 양파",
    date: "2025년 12월 01일 15:22",
    content: "정말 개발자가 되고 싶은 마음을 다시 일깨워주는 글이였습니다. 감사합니다!",
    isMyComment: true,
    isRecomment: false,
    isWriter: true,
    isDeleted: true,
  }
]