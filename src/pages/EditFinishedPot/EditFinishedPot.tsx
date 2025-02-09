import { useNavigate, useParams } from "react-router-dom";
import { EditFinishedPotForm } from "./components";

const EditFinishedPot = () => {
    const { potId } = useParams();

    const navigate = useNavigate();
    const handleUpload = (data: { title: string, startDate: string, recruits: { roleName: string, roleNumber: number }[], language: string, content: string }) => {
        // todo: 수정 업로드 api 호출
        navigate(`/pot/${potId}`);
    }

    return (
        <EditFinishedPotForm
            type="edit"
            onSubmit={handleUpload} />
    )
}
export default EditFinishedPot;