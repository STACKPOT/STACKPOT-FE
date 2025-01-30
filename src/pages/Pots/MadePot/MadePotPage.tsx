import { useState } from "react";
import { FinishedPotCard, OnGoingPotCard, Section } from "./components"
import { container } from "./MadePotPage.style"
import { PotInformationCard } from "../components";
import appliedPotsData from "mocks/appliedPotsData";
import onGoingPotsData from "mocks/onGoingPotsData";


const MadePotPage = () => {
  const [recruitingPots, setRecruitingPots] = useState<{
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
  }[]>(appliedPotsData);

  const [onGoingPots, setOnGoingPots] = useState<{
    id: number;
    title: string;
    memberList: string[];
  }[]>(onGoingPotsData);

  const [finishedPots, setFinishedPots] = useState<{
    id: number;
    type: "applied" | "made";
    title: string;
    startDate: string;
    period: string;
    method: string;
    stacks: string;
    languages: string;
  }[]>(appliedPotsData);

  const handlePotDetail = (id: number) => {
    // todo: 팟 상세 페이지로 이동
  }
  const handleEditPot = (id: number) => {
    // todo: 팟 수정 페이지로 이동
  }
  const handleFinishPot = (id: number) => {
    // todo: 팟 끓이기 페이지로 이동
  }

  return (
    <>
      <div css={container}>
        <Section title="모집 중인 나의 팟">
          <>
            {recruitingPots.map((pot) =>
              <PotInformationCard
                {...pot}
                type="made"
                onButtonClick={handleEditPot}
                onCardClick={handlePotDetail} />)}
          </>
        </Section>
        <Section title="진행 중인 나의 팟">
          <>
            {onGoingPots.map((pot) =>
              <OnGoingPotCard
                {...pot}
                onFinishPot={handleFinishPot}
                onClickCard={handlePotDetail} />)}
          </>
        </Section>
        <Section title="끓인 나의 팟">
          <>
            {finishedPots.map((pot) =>
              <FinishedPotCard
                {...pot}
                onEdit={handleEditPot}
                onClickCard={handlePotDetail}
              />)}
          </>
        </Section>
      </div>
    </>
  )
}

export default MadePotPage