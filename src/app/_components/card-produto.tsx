/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import {Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";


interface Props{
  produtoId?:string
  isBigCard?:boolean
}

export const CardProduto = ({produtoId, isBigCard}:Props) => {
  return (
    <Card className={`w-full h-full ${isBigCard ? `flex flex-col justify-center ` : null}`}>
      <CardContent className="flex">
        <Image src={"./laptop.png"} className={`${isBigCard ? `w-[450px]` : `w-[55%] h-[55%]`}`} alt="..." />
        {isBigCard ? <h1 className="[text-shadow:_0_4px_8px_#d4b400] text-[#f7a234] text-[2.5rem] leading-snug font-manrope font-extrabold" >🔥 Aproveite nossa oferta imperdível! Descontos exclusivos por tempo limitado. Não perca! 🚀</h1> : null}
      </CardContent>
      <CardFooter>
        <div className="flex flex-col gap-4">
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            excepturi aperiam saepe aspernatur
          </p>
          <div className="flex gap-4 items-center">
            <Button className="w-[60%] font-bold">Adicionar no Carrinho</Button>
            <p>R$ 1200.00</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
