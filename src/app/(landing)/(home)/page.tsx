"use client"

import { CardProduto } from "@/app/_components/card-produto";
import { useEffect } from "react";

const API = process.env.NEXT_PUBLIC_API

export default function Home() {
  useEffect(() => {
    const ProdutoData = async() => {
      try {
        const data = await fetch(`${API}/produtos`)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    ProdutoData()
  },[])
  return (
    <main className="w-screen overflow-x-hidden p-10 h-screen">
      <section className="w-full h-full gap-5 grid grid-cols-6 grid-rows-6">
        <div className="col-span-4 flex flex-col justify-center row-span-6">
          <CardProduto isBigCard={true}/>
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
          {[...Array(25)].map((x, i) => (
            <div className="w-[360px] h-auto" key={i}>
              <CardProduto />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
