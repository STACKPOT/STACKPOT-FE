import { EditPotForm } from "@pages/CreatePot/components"
import { mainContainer } from "./Editpot.style"
import { useParams } from "react-router-dom"

const EditPot = () => {
    const { potId } = useParams();
    const potIdNumber = Number(potId);

    return (
        <main css={mainContainer}>
            <EditPotForm
                type="edit"
                potId={potIdNumber}
                onCompleted={() => { }} />
        </main>
    )
}

export default EditPot;