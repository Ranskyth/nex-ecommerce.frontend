"use client";

import { CardProduto } from "@/app/_components/card-produto";
import { useEffect, useState } from "react";
import { IProduct } from "../types/IProduto";
import { GetAllProductServices } from "@/app/services/products/productsServices";

export default function Home() {
  const [products, setProsducts] = useState<IProduct[]>([]);
  useEffect(() => {

    const ProdutoData = async () => {
      const getAllProduto = await GetAllProductServices()
  
      setProsducts(getAllProduto)

    }
    ProdutoData()

  }, []);
  return (
    <main className="w-full p-10 h-full">
      <section className="w-full h-full gap-5 grid grid-cols-6 grid-rows-6">
        <div className="col-span-4 flex flex-col justify-center row-span-6">
          <CardProduto isBigCard={true} />
        </div>
        <div className="col-span-2 row-span-6 h-full w-full">
          <div className="grid gap-5 grid-rows-2 h-full overflow">
            <CardProduto />
            <CardProduto />
          </div>
        </div>
      </section>
      <section className="mt-10 w-full h-full">
        <div className="flex gap-2 justify-center flex-grow flex-wrap">
          {products.map((x) => {
            return (
              <div className="w-[360px] h-auto" key={x.id}>
                <CardProduto
                  id={x.id}
                  nome={x.nome}
                  valor={x.valor}
                  descricao={x.descricao}
                  quantidade={x.quantidade}
                  img_produto={x.img_produto}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
