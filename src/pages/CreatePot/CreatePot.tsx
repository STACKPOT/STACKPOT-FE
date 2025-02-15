import {
  mainContainer,
} from "./CreatePot.style";
import { PotForm } from "./components";
import useCreatePot from "apis/hooks/pots/useCreatePot";

const CreatePot = () => {
  const { mutate } = useCreatePot();

  return (
    <main css={mainContainer}>
      <PotForm type="create" onCompleted={(data) => mutate(data)} />
    </main>
  );
};

export default CreatePot;
