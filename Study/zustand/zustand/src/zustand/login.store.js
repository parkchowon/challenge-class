import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLoginStore = create(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      logIn: async () => set(() => ({ isLoggedIn: true })),
      logOut: () => set(() => ({ isLoggedIn: false })),

      toggleIsLoggedIn: () => {
        const prevState = get();
        set({ isLoggedIn: !prevState.isLoggedIn });
      },
    }),
    {
      name: "login-store",
    }
  )
);

export default useLoginStore;
