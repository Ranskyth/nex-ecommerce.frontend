/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react"
import { IProduct } from "../(landing)/types/IProduto";
import Link from "next/link";

interface Props{
  isBigCard?:boolean
}

export const CardProduto = ({isBigCard,id,valor,nome,quantidade,descricao,img_produto}:IProduct) => {
  return (
    <Link className="w-full h-full" href={`products/${id}`}>    
    <Card className={`w-full hover:border-[#6683e2] h-full ${isBigCard ? `flex flex-col justify-center ` : null}`}>
      <div className="hover:scale-[1.02] duration-500">

      <CardContent className="flex">
        <img src={"./laptop.png"} className={`${isBigCard ? `w-[450px]` : `w-[55%] h-[55%]`}`} alt="..." />
        {isBigCard ? <h1 className="[text-shadow:_0_4px_8px_#d4b400] text-[#f7a234] text-[2.5rem] leading-snug font-manrope font-extrabold" >🔥 Aproveite nossa oferta imperdível! Descontos exclusivos por tempo limitado. Não perca! 🚀</h1> : null}
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-4">
          <p className="text-[12px]">
            {descricao}
          </p>
          <div className="flex gap-4 items-center">
            <ShoppingBag/>
            
            <p>{valor?.toFixed(2)}</p>
          </div>
        </div>
      </CardFooter>
      </div>
    </Card>
    </Link>
  );
};
