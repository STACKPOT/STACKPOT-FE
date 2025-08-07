import { PotDetail, RecruitmentDetail } from "apis/types/pot";
import dayjs from "dayjs";
import { FormProvider, useForm } from "react-hook-form";
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
  potModeOfOperation: Participation;
  potContent: string;
  potStartDate: string;
  potEndDate: string;
  potRecruitmentDeadline: string;
  recruitmentDetails: RecruitmentDetail[];
  recruitingMembers: Record<Role, number>;
  potRole: Role;
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
      potModeOfOperation: undefined,
      potContent: "",
      potStartDate: dayjs().format("YYYY-MM-DD"),
      potEndDate: dayjs().format("YYYY-MM-DD"),
      potRecruitmentDeadline: dayjs().format("YYYY-MM-DD"),
      recruitmentDetails: undefined,
      recruitingMembers: undefined,
      potRole: undefined,
    },
  });
  const {
    handleSubmit,
    watch,
    setValue,
    trigger,
  } = methods;

  const [potModeOfOperation, potStartDate, potEndDate, potRecruitmentDeadline, potRole] =
    watch([
      "potModeOfOperation",
      "potStartDate",
      "potEndDate",
      "potRecruitmentDeadline",
      "potRole",
    ]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isFormValid = await trigger();
    if (!isFormValid || !potModeOfOperation || !potStartDate || !potEndDate || !potRecruitmentDeadline || !potRole) {
      showSnackbar({
        message: "비어있는 항목이 있습니다. 확인해주세요",
        severity: "warning"
      });
    }
    else if (new Date(potRecruitmentDeadline) > new Date(potStartDate)) {
      showSnackbar({
        message: "모집 마감 날짜가 팟 시작일 날짜 보다 이후일 수 없습니다.",
        severity: "warning"
      })
    } else if (new Date(potStartDate) > new Date(potEndDate)) {
      showSnackbar({
        message: "팟 시작일이 팟 종료일보다 이후일 수 없습니다.",
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
      setValue(
        "potModeOfOperation",
        participationMap[potData.potModeOfOperation]
      );
      setValue("potContent", potData.potContent);
      setValue("potStartDate", potData.potStartDate.split(". ").join("-"));
      setValue("potEndDate", potData.potEndDate.split(". ").join("-"));
      setValue(
        "potRecruitmentDeadline",
        potData.potRecruitmentDeadline.split(". ").join("-")
      );
      setValue(
        "recruitmentDetails",
        Object.entries(potData.recruitingMembers).map((part) => ({
          recruitmentRole: part[0] as Role,
          recruitmentCount: part[1],
        }))
      );
      setValue("recruitingMembers", potData.recruitingMembers);
      setValue("potRole", potData.userRole as Role);
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
