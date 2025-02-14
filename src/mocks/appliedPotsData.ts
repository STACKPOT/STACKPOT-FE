import { Role } from "types/role";

const appliedPotsData: {
    potId: number;
    type: "applied" | "made";
    potName: string;
    role: Role;
    nickname: string;
    dday: string;
    startDate: string;
    period: string;
    method: string;
    stacks: string;
    members: Record<Role, number>;
    languages: string;
}[] = [
        {
            potId: 20,
            type: "applied",
            potName: "AI 자동화 챗봇 어플 공부할 스터디원",
            role: "BACKEND",
            nickname: "치킨 먹는 브로콜리",
            dday: "D-5",
            startDate: "2025 .2. 18",
            period: "단기/3개월",
            method: "온라인",
            stacks: "프론트엔드(2), 디자이너(1)",
            members: { BACKEND: 0, FRONTEND: 1, DESIGN: 2, PLANNING: 4 },
            languages: "React, Javascripts ",
        },
        {
            potId: 1,
            type: "applied",
            potName: "AI 자동화 챗봇 어플 공부할 스터디원1",
            role: "FRONTEND",
            nickname: "치킨 먹는 브로콜리",
            dday: "D-5",
            startDate: "2025 .2. 18",
            period: "단기/3개월",
            method: "온라인",
            stacks: "프론트엔드(2), 디자이너(1)",
            members: { BACKEND: 0, FRONTEND: 1, DESIGN: 2, PLANNING: 4 },
            languages: "React, Javascripts ",
        },
        {
            potId: 2,
            type: "applied",
            potName: "AI 자동화 챗봇 어플 공부할 스터디원2",
            role: "DESIGN",
            nickname: "치킨 먹는 브로콜리",
            dday: "D-5",
            startDate: "2025 .2. 18",
            period: "단기/3개월",
            method: "온라인",
            stacks: "프론트엔드(2), 디자이너(1)",
            members: { BACKEND: 0, FRONTEND: 1, DESIGN: 2, PLANNING: 4 },
            languages: "React, Javascripts ",
        }
    ]

export default appliedPotsData;
