import { useState } from "react";
import { Section } from "./components"
import { container } from "./MadePot.style"
import { PotInformationCard } from "../components";
import appliedPotsData from "mocks/appliedPotsData";
import onGoingPotsData from "mocks/onGoingPotsData";
import { FinishedPotCard, OnGoingPotCard } from "@components/index";
import finishedPotsData from "mocks/finishedPotsData";


const MadePotPage = () => {
  const [recruitingPots, setRecruitingPots] = useState(appliedPotsData);
  const [onGoingPots, setOnGoingPots] = useState(onGoingPotsData);
  const [finishedPots, setFinishedPots] = useState(finishedPotsData);

  const handleEditPot = (id: number) => {
    // todo: 팟 수정 페이지로 이동
  }

  return (
    <>
      <div css={container}>
        <Section title="모집 중인 나의 팟">
          <>
            {recruitingPots.map((pot) =>
              <PotInformationCard
                key={pot.id}
                {...pot}
                type="made"
                onButtonClick={handleEditPot} />)}
          </>
        </Section>
        <Section title="진행 중인 나의 팟">
          <>
            {onGoingPots.map((pot) =>
              <OnGoingPotCard
                key={pot.id}
                {...pot}
                isMyPot={true} />)}
          </>
        </Section>
        <Section title="끓인 나의 팟">
          <>
            {finishedPots.map((pot) =>
              <FinishedPotCard
                key={pot.id}
                {...pot}
                isMyPage={true}
                buttonType="edit" />)}
          </>
        </Section>
      </div>
    </>
  )
}

export default MadePotPage