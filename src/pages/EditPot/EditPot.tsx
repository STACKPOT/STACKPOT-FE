import { mainContainer } from "./Editpot.style"
import { useNavigate, useParams } from "react-router-dom"
import usePatchPot from "apis/hooks/pots/usePatchPot";
import useGetPotDetail from "apis/hooks/pots/useGetPotDetail";
import useDeletePot from "apis/hooks/pots/useDeletePot";
import { Modal } from "@components/index";
import { useState } from "react";
import routes from "@constants/routes";
import PotForm, { PotFormData } from "@pages/CreatePot/components/PotForm";

const EditPot = () => {
    const navigate = useNavigate();
    const { potId } = useParams();
    const potIdNumber = Number(potId);
    const { mutate: editPot } = usePatchPot();
    const { mutate: deletePot } = useDeletePot();
    const { data } = useGetPotDetail(potIdNumber);

    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleEdit = (data: PotFormData) => {
        editPot({
            potId: potIdNumber,
            body: data
        }, {
            onSuccess: () => navigate(`${routes.pot.base}/${potId}`)
        })
    }
    const handleDeletePot = () => {
        deletePot(potIdNumber, {
            onSuccess: () => {
                navigate(routes.home);
            }
        });
    }

    return (
        <main css={mainContainer}>
            <PotForm
                type="edit"
                potId={potIdNumber}
                potData={data?.potDetail}
                onCompleted={handleEdit}
                onDelete={() => setShowDeleteModal(true)} />
            {showDeleteModal &&
                <Modal
                    title={`${data?.potDetail.potName}을\n삭제하시겠습니까?`}
                    message="삭제하시면 복구할 수 없습니다. 정말로 삭제할까요?"
                    onCancel={() => setShowDeleteModal(false)}
                    onConfirm={handleDeletePot} />}
        </main>
    )
}

export default EditPot;