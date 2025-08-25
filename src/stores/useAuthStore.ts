import { create } from "zustand";

interface AuthStore {
  role: string | null;
  setRole: (role: string) => void;
  nickname: string;
  setNickname: (nickname: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  role: localStorage.getItem("role"),
  nickname: localStorage.getItem("nickname") || "",
  setRole: (role) => {
    const next = role || "UNKNOWN";
    if (localStorage.getItem("role") !== next) {
      localStorage.setItem("role", next);
      set({ role: next });
    }
  },

  setNickname: (nickname) => {
    const next = nickname || "";
    if (localStorage.getItem("nickname") !== next) {
      localStorage.setItem("nickname", next);
      set({ nickname: next });
    }
  },
}));
