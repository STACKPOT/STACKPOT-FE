import { PotIcon } from "@assets/svgs";
import { headButtonContainer, headContainer, iconStyle, titleContainer, titleStyle } from "./FormHeader.style";
import { Button, Modal, PotButton } from "@components/index";
import { useNavigate } from "react-router-dom";
import useDeletePot from "apis/hooks/pots/useDeletePot";
import routes from "@constants/routes";
import { useState } from "react";

interface FormHeaderProps {
  type: "create" | "edit";
  potId?: number;
  potName?: string;
}
const FormHeader = ({ type, potId, potName }: FormHeaderProps) => {
  const navigate = useNavigate();
  const { mutate: deletePot } = useDeletePot();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeletePot = () => {
    if (potId) {
      deletePot(potId, {
        onSuccess: () => {
          navigate(routes.home);
        }
      });
    }
  }

  return (
    <div css={headContainer}>
      <div css={titleContainer}>
        <h2 css={titleStyle}>
          {type === "create" ? "나의 팟 만들기" : "나의 팟 수정하기"}
        </h2>
        <PotIcon css={iconStyle} />
      </div>
      {type === "create" ? (
        <Button variant="action" type="submit" >
          팟 만들기
        </Button>
      ) : (
        <div css={headButtonContainer}>
          <Button
            type="submit"
            variant="action"
            actionType="edit"
          >
            수정 완료
          </Button>
          <PotButton type="red" onClick={() => setShowDeleteModal(true)}>
            삭제하기
          </PotButton>
        </div>
      )}
      {showDeleteModal &&
        <Modal
          title={`${potName}을\n삭제하시겠습니까?`}
          message="삭제하시면 복구할 수 없습니다. 정말로 삭제할까요?"
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={handleDeletePot} />}
    </div>
  )
}
export default FormHeader;