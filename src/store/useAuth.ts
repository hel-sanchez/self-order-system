"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  role: "admin";
  username: string;
};

type AuthState = {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      login: (username, password) => {
        const ADMIN_USERNAME = "admin";
        const ADMIN_PASSWORD = "1234";

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
          set({
            user: {
              id: "1",
              role: "admin",
              username,
            },
          });
          return true;
        }
        return false;
      },

      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
