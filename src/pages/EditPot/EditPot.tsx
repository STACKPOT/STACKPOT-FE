import { mainContainer } from "./Editpot.style";
import { useParams } from "react-router-dom";
import usePatchPot from "apis/hooks/pots/usePatchPot";
import useGetPotDetail from "apis/hooks/pots/useGetPotDetail";
import PotForm, { PotFormData } from "@pages/CreatePot/components/PotForm";

const EditPot = () => {
  const { potId } = useParams();
  const potIdNumber = Number(potId);
  const { mutate: editPot } = usePatchPot();
  const { data } = useGetPotDetail(potIdNumber);

  const handleEdit = (data: PotFormData) => {
    editPot({
      potId: potIdNumber,
      body: data
    })
  }

  return (
    <main css={mainContainer}>
      <PotForm
        type="edit"
        potId={potIdNumber}
        potData={data?.potDetail}
        onCompleted={handleEdit} />
    </main>
  )
}

export default EditPot;
