"use client";

import { create } from "zustand";

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
};

type MenuState = {
  menu: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, "id">) => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  menu: [],

  addMenuItem: (item) =>
    set((state) => ({
      menu: [
        ...state.menu,
        {
          id: state.menu.length + 1,
          ...item,
        },
      ],
    })),
}));
