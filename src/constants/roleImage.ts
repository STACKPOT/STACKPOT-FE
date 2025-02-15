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
  PLANNING: CarrotImage,
  DESIGN: BroccoliImage,
  DEFAULT: ProfileImage,
} as const;
