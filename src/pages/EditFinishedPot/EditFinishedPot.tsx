import { useNavigate, useParams } from "react-router-dom";
import { FinishedPotForm } from "./components";
import { PatchPotCompleteBody } from "apis/types/pot";
import routes from "@constants/routes";

const EditFinishedPot = () => {
    const { potId } = useParams();
    const potIdNumber = Number(potId);

    const navigate = useNavigate();
    const handleUpload = (data: PatchPotCompleteBody) => {
        // todo: 수정 업로드 api 호출
        navigate(`${routes.pot.base}/${potId}`);
    }

    return (
        <FinishedPotForm
            potId={potIdNumber}
            type="edit"
            onCompleted={handleUpload} />
    )
}
export default EditFinishedPot;