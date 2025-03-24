'use client'
import { typeProduct } from "@/app/(landing)/types/typeProduct";
import { contextApp } from "@/app/_components/contextApp";
import { GetByIdProductServices } from "@/app/services/products/productsServices";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { redirect } from "next/navigation";
import { useParams } from "next/navigation";


import { useContext, useEffect, useState } from "react";


const Page = () => {

  const params = useParams()
  
  const [data, setdata] = useState<typeProduct>();
  const [quantity, setQuantity] = useState(1)
  const {addToCart} = useContext(contextApp)
  
  
  const id = params.id


  useEffect(() => {

    const ProductById = async () => {

      const product = await GetByIdProductServices(String(id))
      
      setdata(product)
    }

    ProductById()

  },[])

  const handlePagamento = async () => {
    //const pagamento = await CreatePagamento(String(id))
    redirect("/finalizar_comprar")
  }

  return (
    <div>

    <div className="flex justify-center w-full p-10 gap-10">
      <div className="w-96 rounded-3xl h-96 overflow-hidden">
        <img src={data?.imagem} alt="" />
      </div>
      <Card className="flex flex-col justify-between p-9 w-[40rem] h-96">
        <CardContent>
          <h1>{data?.nome}</h1>
          
          <h1>R$ {data?.valor?.toFixed(2)}</h1>

          <div className="gap-6">
            <Button onClick={() => setQuantity(prev => prev - 1)}> - </Button>
            <span className="p-3">{quantity}</span>
            <Button onClick={() => setQuantity(prev => prev + 1)}> + </Button>
          </div>
          <div className="py-6">
            <h1>Tamanho</h1>
            <div className="flex gap-1">

            <Button>P</Button>
            <Button>M</Button>
            <Button>G</Button>
            <Button>GG</Button>
            <Button>XG</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className=" gap-6">
        <Button className="font-bold" onClick={addToCart}>Adicionar No Carrinho</Button>
          <Button className="font-bold" onClick={handlePagamento}>Comprar</Button>
        </CardFooter>
      </Card>
    </div>
        <div>
          <h1>{data?.nome}</h1>
        </div>
    </div>
  );
};

export default Page;
