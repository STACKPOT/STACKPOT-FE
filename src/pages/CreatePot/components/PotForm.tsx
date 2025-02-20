import { PotDetail, RecruitmentDetail } from "apis/types/pot";
import dayjs from "dayjs";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Participation } from "types/participation";
import { participationMap } from "@constants/categories";
import { useEffect } from "react";
import { Role } from "types/role";
import FormHeader from "./FormHeader/FormHeader";
import FormBody from "./FormBody/FormBody";
import { useSnackbar } from "providers";

interface PotFormProps {
  type: "create" | "edit";
  potId?: number;
  potData?: PotDetail;
  onCompleted: (data: PotFormData) => void;
}
export interface PotFormData {
  potName: string;
  potLan: string;
  potDuration: string;
  potModeOfOperation: Participation;
  potContent: string;
  potStartDate: string;
  recruitmentDeadline: string;
  recruitmentDetails: RecruitmentDetail[];
  recruitingMembers: Record<Role, number>;
}

const PotForm: React.FC<PotFormProps> = ({
  type,
  potId,
  potData,
  onCompleted,
}: PotFormProps) => {
  const { showSnackbar } = useSnackbar();
  const methods = useForm<PotFormData>({
    mode: "onChange",
    defaultValues: {
      potName: "",
      potLan: "",
      potDuration: undefined,
      potModeOfOperation: undefined,
      potContent: "",
      potStartDate: dayjs().format("YYYY-MM-DD"),
      recruitmentDeadline: dayjs().format("YYYY-MM-DD"),
      recruitmentDetails: undefined,
      recruitingMembers: undefined,
    },
  });
  const {
    handleSubmit,
    watch,
    setValue,
    trigger,
  } = methods;

  const [potDuration, potModeOfOperation, potStartDate, recruitmentDeadline] =
    watch([
      "potDuration",
      "potModeOfOperation",
      "potStartDate",
      "recruitmentDeadline",
    ]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isFormValid = await trigger();
    if (!isFormValid || !potDuration || !potModeOfOperation || !potStartDate || !recruitmentDeadline) {
      showSnackbar({
        message: "비어있는 항목이 있습니다. 확인해주세요",
        severity: "warning"
      });
    }
    else if (new Date(recruitmentDeadline) > new Date(potStartDate)) {
      showSnackbar({
        message: "모집 마감 날짜가 팟 시작일 날짜 보다 이후일 수 없습니다.",
        severity: "warning"
      })
    } else {
      handleSubmit(onCompleted)();
    }
  };

  useEffect(() => {
    if (potData) {
      setValue("potName", potData.potName);
      setValue("potLan", potData.potLan);
      setValue("potDuration", potData.potDuration);
      setValue(
        "potModeOfOperation",
        participationMap[potData.potModeOfOperation]
      );
      setValue("potContent", potData.potContent);
      setValue("potDuration", potData.potDuration);
      setValue("potStartDate", potData.potStartDate.split(". ").join("-"));
      setValue(
        "recruitmentDeadline",
        potData.recruitmentDeadline.split(". ").join("-")
      );
      setValue(
        "recruitmentDetails",
        Object.entries(potData.recruitingMembers).map((part) => ({
          recruitmentRole: part[0] as Role,
          recruitmentCount: part[1],
        }))
      );
      setValue("recruitingMembers", potData.recruitingMembers);
      methods.trigger();
    }
  }, [potData]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleFormSubmit}>
        <FormHeader potId={potId} type={type} potName={potData?.potName} />
        <FormBody />
      </form>
    </FormProvider>
  );
};
export default PotForm;
