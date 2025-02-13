import {
  mainContainer,
} from "./CreatePot.style";
import { EditPotForm } from "./components";
import useCreatePot from "apis/hooks/pots/useCreatePot";

const CreatePot = () => {
  const { mutate } = useCreatePot();

  return (
    <main css={mainContainer}>
      <EditPotForm type="create" onCompleted={(data) => mutate(data)} />
    </main>
  );
};

export default CreatePot;
