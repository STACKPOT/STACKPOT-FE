import { EditPotForm } from "@pages/CreatePot/components"
import { mainContainer } from "./Editpot.style"
import { useParams } from "react-router-dom"
import usePatchPot from "apis/hooks/pots/usePatchPot";
import useGetPotDetail from "apis/hooks/pots/useGetPotDetail";

const EditPot = () => {
    const { potId } = useParams();
    const potIdNumber = Number(potId);
    const { mutate: editPot } = usePatchPot();
    const { data} = useGetPotDetail(potIdNumber);

    return (
        <main css={mainContainer}>
            <EditPotForm
                type="edit"
                potId={potIdNumber}
                potData={data?.potDetail}
                onCompleted={(data) => editPot({ potId: potIdNumber, body: data })} />
        </main>
    )
}

export default EditPot;