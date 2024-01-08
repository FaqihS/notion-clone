import { create } from "zustand"

type CoverImageStore = {
  oldUrl?: string
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  onReplace: (oldUrl: string)=> void,
}

export const useCoverImage = create<CoverImageStore>((set)=>({
  isOpen: false,
  onOpen: ()=>set({isOpen: true}),
  onClose: ()=>set({isOpen: false}),
  onReplace: (oldUrl: string)=>set({isOpen: true,oldUrl }),
}))
