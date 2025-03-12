'use client'

import { createContext, ReactNode, useState } from "react";
import { CartItem } from "../(landing)/types/CartItemType";



  interface CartContextType{
    cart: CartItem[];
    addToCart: () => void;
    getToCart: () => CartItem[];
  };

export const contextApp = createContext({} as CartContextType);

export const ContextAppProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = () => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }
    const getToCart = () => {
        const product = localStorage.getItem("cart")
        const data = JSON.parse(String(product))
        return data
    }
    const clearToCart = () => {
        localStorage.clear()
    }

  return <contextApp.Provider value={{cart, addToCart, getToCart}}>{children}</contextApp.Provider>;
};
