import { useEffect, useState } from 'react';
import { useFiltrosStore } from '../store/useStoreFiltros';
import { DetalleProductoFiltroDTO } from '../types/typesFilter';
import { filtrarProductos } from '../services/dProductFilterService';
import { IDetailsProduct } from '../types/IDetailsProduct';
 // Ajustá esto según tu tipo

export const useProductosFiltrados = () => {
    const { filtros } = useFiltrosStore();
    const [productos, setProductos] = useState<IDetailsProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFiltrados = async () => {
            setLoading(true);
            setError(null);
            try {
                const productosFiltrados = await filtrarProductos(filtros as DetalleProductoFiltroDTO);
                setProductos(productosFiltrados);
            } catch (e) {
                setError('Error al filtrar productos');
                console.error(e);
            } finally {
                setLoading(false);
            }
        };

        fetchFiltrados();
    }, [filtros]);

    return { productos, loading, error };
};
