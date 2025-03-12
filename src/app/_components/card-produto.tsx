/* eslint-disable @typescript-eslint/no-unused-vars */
import {Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react"
import { typeProduct } from "../(landing)/types/typeProduct";
import Link from "next/link";


export const CardProduto = ({isBigCard,id,valor,nome,quantidade,descricao,img_produto}:typeProduct) => {
  return (
    <Link className="w-full h-full" href={`products/${id}`}>    
    <Card className="overflow-hidden hover:border-[#6683e2]">
      <div className="hover:scale-[1.02] duration-500">
        <div>

        <img src={img_produto} className="object-cover w-full h-[250px]" />
        </div>
      <CardFooter className="mt-3">
        <div className="flex flex-col gap-1">
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
