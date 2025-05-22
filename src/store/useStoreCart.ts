import {create} from 'zustand'
import { IProduct } from '../types/IProduct'

interface useStoreCart{
    cartProducts: IProduct[]
    addProduct: (product: IProduct)=> void;
    deleteProduct: (id : number) => void;
}

export const useStoreCart = create<useStoreCart>((set)=>({

    cartProducts : [], 
    addProduct : (product)=>{
        set((state)=>({
            cartProducts: [...state.cartProducts, product]
        }))
    },
    deleteProduct:(id)=>{
        set((state)=>({
            cartProducts: state.cartProducts.filter((product)=> product.id!= id)
        }))
    }


}))