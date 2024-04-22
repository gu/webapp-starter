import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type NavBarState = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

const useNavBarStore = create<NavBarState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: true,
        toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
      }),
      {
        name: 'nav-bar-storage',
      },
    ),
  ),
);

export { useNavBarStore };
