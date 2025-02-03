import { authApiPost } from "./apiUtils";
import { CreatePotParams, CreatePotResponse } from "./types/pot";

export const CreatePot = async (createPotParams: CreatePotParams) => {
    return authApiPost<CreatePotResponse>(`https://api.stackpot.co.kr/pots`, createPotParams);
}