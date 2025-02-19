import { mainContainer } from "./CreatePot.style";
import { PotForm } from "./components";
import useCreatePot from "apis/hooks/pots/useCreatePot";

import { PotFormData } from "./components/PotForm";

const CreatePot = () => {
  const { mutate } = useCreatePot();

  const handleUpload = (data: PotFormData) => {
    mutate(data);
  };

  return (
    <main css={mainContainer}>
      <PotForm type="create" onCompleted={handleUpload} />
    </main>
  );
};

export default CreatePot;
