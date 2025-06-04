// src/store/useFiltrosStore.ts
import { create } from 'zustand';

type Filtros = {
    descuentos: number[];
    precios: string[];
    talles: number[];
    categorias: number[];
};

interface FiltrosState {
    filtros: Filtros;
    setFiltros: (filtros: Partial<Filtros>) => void;
}

export const useFiltrosStore = create<FiltrosState>((set) => ({
    filtros: {
        descuentos: [],
        precios: [],
        talles: [],
        categorias: [],
    },
    setFiltros: (filtros) =>
        set((state) => ({
            filtros: {
                ...state.filtros,
                ...filtros,
            },
        })),
}));
