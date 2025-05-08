import { create } from 'zustand';

type AccordionState = {
    isOpen: boolean;
    toggle: () => void;
};

export const useAccordionStore =create<AccordionState> ((set)=>({
    isOpen:false,
    toggle:()=>set((state)=>({isOpen:!state.isOpen}))
}));
