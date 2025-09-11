import {
  BroccoliImage,
  CarrotImage,
  MushroomImage,
  OnionImage,
  ProfileImage,
} from "@assets/images";
import { Role } from "types/role";

export const roleImages: Record<Role, string> = {
  FRONTEND: MushroomImage,
  BACKEND: OnionImage,
  PLAN: CarrotImage,
  DESIGN: BroccoliImage,
  UNKNOWN: ProfileImage,
} as const;
