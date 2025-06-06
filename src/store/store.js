import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  userId: null,
  setUserId: (id) => set({ userId: id }),
  agregarUser: (datos) => set({ user: { ...datos } }),
  clearUser: () => set({ user: null }),
}));

export default useStore;
