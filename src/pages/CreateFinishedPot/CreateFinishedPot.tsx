import { EditFinishedPotForm } from "@pages/EditFinishedPot/components";

const CreateFinishedPot = () => {
    const handleUpload = (data: { title: string, startDate: string, recruits: { roleName: string, roleNumber: number }[], language: string, content: string }) => {
        // todo: 팟 다 끓이기 api
    }
    return (
        <EditFinishedPotForm type="create" onSubmit={handleUpload} />
    )
}
export default CreateFinishedPot;