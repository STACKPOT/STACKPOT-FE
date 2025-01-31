import { MushroomImage, OnionImage } from "@assets/images";

const appliedPotsData: {
    id: number;
    type: "applied" | "made";
    title: string;
    profileImage: string;
    nickname: string;
    dday: number;
    startDate: string;
    period: string;
    method: string;
    stacks: string;
    languages: string;
}[] = [
        {
            id: 0,
            type: "applied",
            title: "AI 자동화 챗봇 어플 공부할 스터디원",
            profileImage: MushroomImage,
            nickname: "치킨 먹는 브로콜리",
            dday: 5,
            startDate: "2025 .2. 18",
            period: "단기/3개월",
            method: "온라인",
            stacks: "프론트엔드(2), 디자이너(1)",
            languages: "React, Javascripts ",
        },
        {
            id: 1,
            type: "applied",
            title: "AI 자동화 챗봇 어플 공부할 스터디원1",
            profileImage: MushroomImage,
            nickname: "치킨 먹는 브로콜리",
            dday: 5,
            startDate: "2025 .2. 18",
            period: "단기/3개월",
            method: "온라인",
            stacks: "프론트엔드(2), 디자이너(1)",
            languages: "React, Javascripts ",
        },
        {
            id: 2,
            type: "applied",
            title: "AI 자동화 챗봇 어플 공부할 스터디원2",
            profileImage: OnionImage,
            nickname: "치킨 먹는 브로콜리",
            dday: 5,
            startDate: "2025 .2. 18",
            period: "단기/3개월",
            method: "온라인",
            stacks: "프론트엔드(2), 디자이너(1)",
            languages: "React, Javascripts ",
        }
    ]

export default appliedPotsData;