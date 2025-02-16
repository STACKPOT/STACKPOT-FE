import routes from "@constants/routes";
import { FinishedPotForm } from "@pages/EditFinishedPot/components";
import usePatchPotComplete from "apis/hooks/pots/usePatchPotComplete";
import { PatchPotCompleteBody } from "apis/types/pot";
import { useNavigate, useParams } from "react-router-dom";

const CreateFinishedPot = () => {
    const navigate = useNavigate();
    const { potId } = useParams();
    const potIdNumber = Number(potId);
    const { mutate } = usePatchPotComplete();

    const handleUpload = (data: PatchPotCompleteBody) => {
        mutate({
            potId: potIdNumber,
            body: data
        }, {
            onSuccess: () => {
                navigate(`${routes.pot.madeByMe}`)
            }
        })
    };

    return (
        <FinishedPotForm potId={potIdNumber} type="create" onCompleted={handleUpload} />
    )
}
export default CreateFinishedPot;