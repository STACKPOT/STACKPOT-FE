import { BroccoliImage, CarrotImage, MushroomImage, OnionImage } from "@assets/images";

const finishedPotsData: {
    id: number;
    title: string;
    myRole: string;
    startDate: string;
    endDate: string;
    stacks: string;
    languages: string;
    memberProfiles: string[];
}[] = [
        {
            id: 0,
            title: "AI 자동화 챗봇 어플 공부할 스터디원",
            myRole: "프론트엔드",
            startDate: "2025 .2. 18",
            endDate: "2025.2.27",
            stacks: "프론트엔드(2), 디자이너(1)",
            languages: "React, Javascripts ",
            memberProfiles: [MushroomImage, BroccoliImage, OnionImage, MushroomImage, CarrotImage],
        },
        {
            id: 1,
            title: "AI 자동화 챗봇 어플 공부할 스터디원1",
            myRole: "프론트엔드",
            startDate: "2025 .2. 18",
            endDate: "2025.2.27",
            stacks: "프론트엔드(2), 디자이너(1)",
            languages: "React, Javascripts ",
            memberProfiles: [MushroomImage, BroccoliImage, OnionImage, MushroomImage, CarrotImage],
        },
        {
            id: 2,
            title: "AI 자동화 챗봇 어플 공부할 스터디원2",
            myRole: "프론트엔드",
            startDate: "2025 .2. 18",
            endDate: "2025.2.27",
            stacks: "프론트엔드(2), 디자이너(1)",
            languages: "React, Javascripts ",
            memberProfiles: [MushroomImage, BroccoliImage, OnionImage, MushroomImage, CarrotImage],
        }
    ]

export default finishedPotsData;