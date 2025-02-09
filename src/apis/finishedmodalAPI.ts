import { authApiGet } from "./apiUtils";
import {
  FinishedModalResponse,
  GetFinishedModalParams,
} from "./types/finishedmodal";

export const GetFinishedModal = async ({ potId }: GetFinishedModalParams) => {
  return authApiGet<FinishedModalResponse>(`/my-pots/${potId}/details`);
};
