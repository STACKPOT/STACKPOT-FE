import { useState } from "react";
import { RecruitingMyPotCard, Section } from "./components"
import { container } from "./MadePot.style"
import { FinishedPotCard } from "@components/index";
import finishedPotsData from "mocks/finishedPotsData";
import useGetPotsRecruiting from "apis/hooks/pots/useGetPotsRecruiting";
import { Role } from "types/role";

const MadePotPage = () => {
  const [finishedPots, setFinishedPots] = useState(finishedPotsData);

  const { data: recruitingPots } = useGetPotsRecruiting();

  return (
    <>
      <div css={container}>
        <Section title="모집 중인 나의 팟">
          <>
            {recruitingPots && recruitingPots.map((pot) =>
              <RecruitingMyPotCard
                key={pot.potId}
                {...pot}
                members={Object.keys(pot.members) as Role[]} />)}

          </>
        </Section>
        <Section title="끓인 나의 팟">
          <>
            {finishedPots.map((pot) => (
              <FinishedPotCard
                key={pot.id}
                {...pot}
                isMyPage={true}
                buttonType="edit"
              />
            ))}
          </>
        </Section>
      </div>
    </>
  );
};

export default MadePotPage;
