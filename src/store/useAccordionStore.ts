import { create } from 'zustand';

interface useAccordionState  {
    isOpen: boolean;
    toggle: () => void;
};

export const useAccordionStore =create<useAccordionState> ((set)=>({
    isOpen:false,
    toggle:()=>set((state)=>({isOpen:!state.isOpen}))
}));
