'use client'

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { contextApp } from "../_context/contextApp";
import { CartItem } from "../(landing)/types/CartItemType";

export const ButtonCart = () => {

  const [cart, setCart] = useState<CartItem[]>([])

  const {getToCart} = useContext(contextApp)

  useEffect(()=>{
    setCart(getToCart)
  },[])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <ShoppingCartIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div>
          <SheetHeader>
            <SheetTitle>Carrinho de Compras</SheetTitle>
          </SheetHeader>

          <div>
            <ul>
              <li>{cart?.map((x) => <div key={x.id}></div>)}</li>
            </ul>
          </div>
          
        </div>
        <div>
          <SheetFooter className="flex">
            <Button variant={"secondary"}>Esvaziar Carrinho</Button>
            <Button>Comprar</Button>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
