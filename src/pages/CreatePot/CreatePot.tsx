import { useState } from "react";
import {
  mainContainer,
  toastStyle,
} from "./CreatePot.style";
import { PotForm } from "./components";
import useCreatePot from "apis/hooks/pots/useCreatePot";
import { UploadToast } from "@components/index";
import { PotFormData } from "./components/PotForm";
import { useNavigate } from "react-router-dom";

const CreatePot = () => {
  const { mutate } = useCreatePot();
  const [showToast, setShowToast] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleUpload = (data: PotFormData) => {
    mutate(data, {
      onSuccess: (data) => {
        if (data.result) {
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
            navigate(`/pot/${data.result?.potId}`);
          }, 2000);
        }
      }
    })
  }

  return (
    <main css={mainContainer}>
      {showToast &&
        <div css={toastStyle}>
          <UploadToast />
        </div>
      }
      <PotForm type="create" onCompleted={handleUpload} />
    </main>
  );
};

export default CreatePot;
