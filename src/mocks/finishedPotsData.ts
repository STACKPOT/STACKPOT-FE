import { Role } from "types/role";

const finishedPotsData: {
    id: number;
    title: string;
    myRole: string;
    startDate: string;
    endDate: string;
    stacks: string;
    languages: string;
    members: Role[];
}[] = [
        {
            id: 0,
            title: "AI 자동화 챗봇 어플 공부할 스터디원",
            myRole: "프론트엔드",
            startDate: "2025 .2. 18",
            endDate: "2025.2.27",
            stacks: "프론트엔드(2), 디자이너(1)",
            languages: "React, Javascripts ",
            members: ["BACKEND", "DESIGN", "FRONTEND", "PLAN", "BACKEND"],
        },
        {
            id: 1,
            title: "AI 자동화 챗봇 어플 공부할 스터디원1",
            myRole: "프론트엔드",
            startDate: "2025 .2. 18",
            endDate: "2025.2.27",
            stacks: "프론트엔드(2), 디자이너(1)",
            languages: "React, Javascripts ",
            members: ["BACKEND", "DESIGN", "FRONTEND", "PLAN", "BACKEND"],
        },
        {
            id: 2,
            title: "AI 자동화 챗봇 어플 공부할 스터디원2",
            myRole: "프론트엔드",
            startDate: "2025 .2. 18",
            endDate: "2025.2.27",
            stacks: "프론트엔드(2), 디자이너(1)",
            languages: "React, Javascripts ",
            members: ["BACKEND", "DESIGN", "FRONTEND", "PLAN", "BACKEND"],
        }
    ]

export default finishedPotsData;