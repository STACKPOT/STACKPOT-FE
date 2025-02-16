import { create } from "zustand";

interface AuthStore {
  role: string | null;
  setRole: (role: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  role: localStorage.getItem("role") || null,
  setRole: (role) => {
    if (role !== localStorage.getItem("role")) {
      localStorage.setItem("role", role || "DEFAULT");
      set({ role });
    }
  },
}));
