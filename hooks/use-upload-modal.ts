import { create } from "zustand";

type UploadMopdalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useUploadModal = create<UploadMopdalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
