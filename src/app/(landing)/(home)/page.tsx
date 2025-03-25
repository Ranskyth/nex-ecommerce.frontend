"use client";

import { CardProduto } from "@/app/_components/card-produto";
import { useEffect, useState } from "react";
import { typeProduct } from "../types/typeProduct";
import { GetAllProductServices } from "@/app/services/products/productsServices";
import { Banner } from "@/app/_components/banner";

export default function Home() {
  const [products, setProsducts] = useState<typeProduct[] | undefined | null>([]);
  useEffect(() => {

    const ProdutoData = async () => {
      const getAllProduto = await GetAllProductServices()
  
      setProsducts(getAllProduto)

    }
    ProdutoData()

  }, []);
  
  return (
    <main className="w-full h-full">
      <section className="flex justify-center overflow-hidden items-center mt-6 drop-shadow-2xl w-full h-[490px]">
        <Banner/>
      </section>
      <section className="mt-10 w-full h-full">
        <div className="flex gap-2 justify-center flex-grow flex-wrap">
          
          { products?.length ? products?.map((x) => {
            return (
              <div className="w-[360px] h-auto" key={x.id}>
                <CardProduto
                  id={x.id}
                  nome={x.nome}
                  valor={x.valor}
                  descricao={x.descricao}
                  quantidade={x.quantidade}
                  imagem={x.imagem}
                />
              </div>
              
            );
          }): <h1>Loja Sem Roupa</h1>}
        </div>
      </section>
    </main>
  );
}
