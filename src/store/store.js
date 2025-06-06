import { create } from "zustand";

const useStore = create((set) => ({
  userId: null,
  agregarUserId: (id) => set({ userId: id }),
  clearUserId: () => set({ userId: null }),
}));

export default useStore;
