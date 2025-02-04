import {
  BroccoliImage,
  CarrotImage,
  MushroomImage,
  OnionImage,
} from "@assets/images";

type Role = "FRONTEND" | "BACKEND" | "PLANNING" | "DESIGN";

export const roleImages: Record<Role, string> = {
  FRONTEND: MushroomImage,
  BACKEND: OnionImage,
  PLANNING: CarrotImage,
  DESIGN: BroccoliImage,
};
