import { MushroomImage, CarrotImage, BroccoliImage, OnionImage } from "@assets/images";

const taskCardkData = [
  {
    id: "1",
    title: "와이어 프레임 완료하기",
    content: `
      와이어 프레임 제작을 끝내고 넘기기 위한 작업입니다.
      이 작업은 디자인팀과 협업하여 사용자 경험(UX)을 고려한 설계를 진행하는 데 초점을 맞춥니다.
      특히 개발팀과 지속적으로 피드백을 주고받으며 최적화 작업을 진행합니다.
    `,
    dday: 3,
    date: "2025. 1. 6",
    profileImage: MushroomImage,
    nickname: "자전거 타는 브로콜리",
    groupProfileImages: [
      MushroomImage,
      CarrotImage,
      BroccoliImage,
      OnionImage,
    ],
    status: "진행 전" as const,
    tag: "디자인",
    contributors: [
      { profileImage: MushroomImage, nickname: "자전거 타는 브로콜리" },
      { profileImage: CarrotImage, nickname: "웃는 당근" },
      { profileImage: BroccoliImage, nickname: "성실한 브로콜리" },
      { profileImage: MushroomImage, nickname: "자전거 타는 브로콜리" },
      { profileImage: CarrotImage, nickname: "웃는 당근" },
      { profileImage: BroccoliImage, nickname: "성실한 브로콜리" },
    ],
  },
  {
    id: "2",
    title:
      "공통 컴포넌트 제작을 위한 아주 긴 제목을 가진 작업입니다. 길어도 괜찮은지 테스트합니다.",
    content: "피드 카드, 나의 피드 등을 제작하는 작업입니다.",
    dday: 1,
    date: "2025. 1. 5",
    profileImage: CarrotImage,
    nickname: "웃는 당근",
    groupProfileImages: [MushroomImage, CarrotImage, BroccoliImage],
    status: "진행 중" as const,
    tag: "프론트엔드",
    contributors: [
      { profileImage: CarrotImage, nickname: "웃는 당근" },
      { profileImage: MushroomImage, nickname: "자전거 타는 브로콜리" },
    ],
  },
  {
    id: "3",
    title: "캘린더 라이브러리 구현",
    content: `
      캘린더 라이브러리 기반으로 일정 관리 기능을 구현합니다.
      이 기능은 사용자의 일정과 알림을 연동하며, 날짜별 작업 상태를 직관적으로 확인할 수 있게 합니다.
      추가적으로, 월별, 주별, 일별로 화면을 분리하여 사용자가 필요에 따라 전환 가능하도록 설계합니다.
    `,
    dday: 5,
    date: "2025. 1. 8",
    profileImage: OnionImage,
    nickname: "성실한 양파",
    groupProfileImages: [MushroomImage, BroccoliImage, OnionImage],
    status: "진행 전" as const,
    tag: "라이브러리",
    contributors: [
      { profileImage: OnionImage, nickname: "성실한 양파" },
      { profileImage: BroccoliImage, nickname: "부지런한 브로콜리" },
    ],
  },
  {
    id: "4",
    title: "회원가입 약관 문구 작성",
    content: `
      회원가입 시 필요한 약관 문구를 작성하고 검토합니다.
      법적 요구 사항을 충족하며, 사용자에게 직관적이고 명확한 안내를 제공하기 위한 작업입니다.
    `,
    dday: 2,
    date: "2025. 1. 7",
    profileImage: CarrotImage,
    nickname: "웃는 당근",
    groupProfileImages: [CarrotImage, BroccoliImage],
    status: "완료" as const,
    tag: "문서 작업",
    contributors: [
      { profileImage: CarrotImage, nickname: "웃는 당근" },
    ],
  },
  {
    id: "5",
    title: "노션 회의록 작성",
    content: "팀 회의 내용을 노션에 기록하고 요약합니다.",
    dday: 4,
    date: "2025. 1. 4",
    profileImage: BroccoliImage,
    nickname: "부지런한 브로콜리",
    groupProfileImages: [MushroomImage, CarrotImage],
    status: "완료" as const,
    tag: "기록",
    contributors: [
      { profileImage: BroccoliImage, nickname: "부지런한 브로콜리" },
      { profileImage: CarrotImage, nickname: "웃는 당근" },
    ],
  },
  {
    id: "6",
    title: "화면 설계서 정리",
    content: `
      화면 설계 초안을 정리하고 팀원들에게 공유합니다.
      특히, 화면 간의 흐름과 인터랙션 설계를 구체화하여 개발팀과 원활한 협업이 가능하도록 지원합니다.
      더불어, 비개발 팀원도 이해할 수 있는 설명 문구를 추가합니다.
    `,
    dday: 2,
    date: "2025. 1. 6",
    profileImage: MushroomImage,
    nickname: "자전거 타는 브로콜리",
    groupProfileImages: [MushroomImage, CarrotImage, OnionImage],
    status: "진행 중" as const,
    tag: "설계",
    contributors: [
      { profileImage: MushroomImage, nickname: "자전거 타는 브로콜리" },
      { profileImage: OnionImage, nickname: "성실한 양파" },
    ],
  },
  {
    id: "7",
    title: "간단한 제목",
    content: `
      아주 긴 내용을 작성하여 테스트를 진행하고 있습니다.
      사용자가 이 내용을 읽을 때 자연스럽게 줄바꿈이 발생하고, 스타일이 깨지지 않도록 하는 것이 목표입니다.
      반복되는 내용을 포함하여 스크롤이 길어지는 경우에도 문제가 없는지 확인합니다.
    `,
    dday: 7,
    date: "2025. 1. 10",
    profileImage: MushroomImage,
    nickname: "테스트 브로콜리",
    groupProfileImages: [],
    status: "진행 중" as const,
    tag: "테스트",
    contributors: [
      { profileImage: MushroomImage, nickname: "테스트 브로콜리" },
    ],
  },
  {
    id: "8",
    title: "빈 내용 확인",
    content: "",
    dday: 0,
    date: "2025. 1. 1",
    profileImage: OnionImage,
    nickname: "테스트 양파",
    groupProfileImages: [MushroomImage, CarrotImage],
    status: "완료" as const,
    tag: "빈 데이터",
    contributors: [
      { profileImage: OnionImage, nickname: "테스트 양파" },
    ],
  },
];

export default taskCardkData;
