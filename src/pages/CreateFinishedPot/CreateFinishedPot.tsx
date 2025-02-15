import { FinishedPotForm } from "@pages/EditFinishedPot/components";
import { PostPotParams } from "apis/types/pot";
import { useParams } from "react-router-dom";

const CreateFinishedPot = () => {
    const { potId } = useParams();
    const potIdNumber = Number(potId);

    const handleUpload = (data: PostPotParams) => {
        // todo: 팟 다 끓이기 api
    }
    return (
        <FinishedPotForm potId={potIdNumber} type="create" onCompleted={handleUpload} />
    )
}
export default CreateFinishedPot;