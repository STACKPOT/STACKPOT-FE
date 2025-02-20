import { useNavigate, useParams } from "react-router-dom";
import { FinishedPotForm } from "./components";
import { PatchPotCompleteBody } from "apis/types/pot";
import usePatchFinishedPot from "apis/hooks/users/usePatchFinishedPot";

const EditFinishedPot = () => {
  const { potId } = useParams();
  const potIdNumber = Number(potId);
  const { mutate } = usePatchFinishedPot();

  const handleUpload = (data: PatchPotCompleteBody) => {
    mutate({
      potId: potIdNumber,
      body: data,
    });
  };

  return (
    <FinishedPotForm
      potId={potIdNumber}
      type="edit"
      onCompleted={handleUpload}
    />
  );
};

export default EditFinishedPot;
