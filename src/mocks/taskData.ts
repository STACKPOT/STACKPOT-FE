import { CarraotImage, MushroomImage, OnionImage } from "@assets/images";

export interface Task {
  id: number;
  title: string;
  content: string;
  daysLeft: number;
  nickName: string;
  profileImageList: string[];
}

export const taskData = [
  {
    id: 1,
    title: "와이어프레임 완료",
    content:
      "와이어 프레임 제작해서 넘기기 두줄와이어 프레임 제작해서 넘기기...",
    daysLeft: 3,
    nickName: "아이 마시는 버섯",
    profileImageList: [MushroomImage, CarraotImage, OnionImage],
  },
  {
    id: 2,
    title: "디자인 초안 제출",
    content: "디자인 초안을 제출해야 합니다. 내용이 길어질 수 있습니다...",
    daysLeft: 5,
    nickName: "디자인 초안 마스터",
    profileImageList: [MushroomImage, CarraotImage],
  },
  {
    id: 3,
    title: "개발 환경 설정",
    content: "개발 환경을 설정하고 필요한 라이브러리를 설치합니다...",
    daysLeft: 7,
    nickName: "디자인 초안 마스터",
    profileImageList: [MushroomImage, OnionImage],
  },
  {
    id: 4,
    title: "테스트 케이스 작성",
    content: "기능별 테스트 케이스를 작성하여 품질을 보장합니다...",
    daysLeft: 10,
    nickName: "디자인 초안 마스터",
    profileImageList: [CarraotImage, OnionImage],
  },
];
