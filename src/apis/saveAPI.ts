import { authApiPost } from "./axios/apiUtils";

export const postSavePot = async (potId: number) => {
  return authApiPost(`/saves/pots/${potId}`);
};
