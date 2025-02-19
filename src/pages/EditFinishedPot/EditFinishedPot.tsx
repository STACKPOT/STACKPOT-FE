import { useNavigate, useParams } from "react-router-dom";
import { FinishedPotForm } from "./components";
import routes from "@constants/routes";
import { PatchPotCompleteBody } from "apis/types/pot";
import usePatchFinishedPot from "apis/hooks/users/usePatchFinishedPot";

const EditFinishedPot = () => {
  const { potId } = useParams();
  const potIdNumber = Number(potId);
  const { mutate } = usePatchFinishedPot();

  const navigate = useNavigate();

  const handleUpload = (data: PatchPotCompleteBody) => {
    mutate(
      {
        potId: potIdNumber,
        body: data,
      },
      {
        onSuccess: () => {
          navigate(`${routes.pot.base}/${potId}`);
        },
      }
    );
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
