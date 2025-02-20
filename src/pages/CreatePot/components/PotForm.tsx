import { PotDetail, RecruitmentDetail } from "apis/types/pot";
import dayjs from "dayjs";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Participation } from "types/participation";
import { participationMap } from "@constants/categories";
import { useEffect } from "react";
import { Role } from "types/role";
import FormHeader from "./FormHeader/FormHeader";
import FormBody from "./FormBody/FormBody";

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
    formState: { isValid },
  } = methods;

  const [potDuration, potModeOfOperation, potStartDate, recruitmentDeadline] =
    watch([
      "potDuration",
      "potModeOfOperation",
      "potStartDate",
      "recruitmentDeadline",
    ]);

  const onSubmit: SubmitHandler<PotFormData> = (data: PotFormData) => {
    if (
      isValid &&
      potDuration &&
      potModeOfOperation &&
      potStartDate &&
      recruitmentDeadline
    ) {
      onCompleted(data);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeader potId={potId} type={type} potName={potData?.potName} />
        <FormBody />
      </form>
    </FormProvider>
  );
};
export default PotForm;
