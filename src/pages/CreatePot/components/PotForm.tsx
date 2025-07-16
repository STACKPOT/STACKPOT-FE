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
  potDuration: string;
  potModeOfOperation: Participation;
  potContent: string;
  potStartDate: string;
  potEndDate: string;
  recruitmentDeadline: string;
  recruitmentDetails: RecruitmentDetail[];
  recruitingMembers: Record<Role, number>;
  myRole: Role;
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
      potStartDate: dayjs().format("YYYY-MM"),
      potEndDate: dayjs().format("YYYY-MM"),
      recruitmentDeadline: dayjs().format("YYYY-MM-DD"),
      recruitmentDetails: undefined,
      recruitingMembers: undefined,
      myRole: undefined,
    },
  });
  const {
    handleSubmit,
    watch,
    setValue,
    trigger,
  } = methods;

  const [potModeOfOperation, potStartDate, podEndDate, recruitmentDeadline, myRole] =
    watch([
      // "potDuration",
      "potModeOfOperation",
      "potStartDate",
      "potEndDate",
      "recruitmentDeadline",
      "myRole",
    ]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isFormValid = await trigger();
    if (!isFormValid || !potModeOfOperation || !potStartDate || !podEndDate || !recruitmentDeadline || !myRole) {
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
      setValue(
        "potModeOfOperation",
        participationMap[potData.potModeOfOperation]
      );
      setValue("potContent", potData.potContent);
      setValue("potStartDate", potData.potStartDate.split(". ").join("-"));
      setValue("potEndDate", potData.potEndDate.split(". ").join("-"));
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
      setValue("myRole", potData.userRole as Role);
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
