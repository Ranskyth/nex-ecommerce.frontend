"use client";

import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

const Page = () => {
  const handleSubmitData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const Data = {
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      password: formData.get("email") as string,
      compra:{
        create:{
          cpf: formData.get("cpf") as string,
          quantidade: formData.get("quantidade"),
          total: formData.get("total")
        }
      },
      endereco:{
        create:{
          cep: formData.get("cep") as string,
          endereco: formData.get("endereco"),
          complemento: formData.get("complemento")
        }
      }
    }

    
    //const Req = await fetch(`${API}/create/user`,{method: "POST", body:JSON.stringify({Data})})
    //const ReqJson = await Req.json()
    //console.log(ReqJson)
    
    console.log(JSON.stringify(Data))
    
  };


  return (
    <div className="flex justify-center items-center h-[100%] py-[3%]">
      <form onSubmit={handleSubmitData}>
        <h1 className="text-[28px]">Finalizar Comprar</h1>
        <div className="flex flex-col my-5">
          <div className="flex gap-1 flex-col">
              <label htmlFor="nome">Nome Completo</label>
              <input
                className="p-5 h-[55px]"
                placeholder="Nome Completo"
                name="nome"
              />

              <label htmlFor="nome">CPF</label>
              <input className="p-5 h-[55px]" placeholder="CPF" name="cpf" />
              <label htmlFor="nome">Email</label>
              <input
                className="p-5 h-[55px]"
                placeholder="Email"
                name="email"
              />
      
            
            <label htmlFor="nome">Cep</label>
            <input className="p-5 h-[55px]" placeholder="CEP" name="cep" />
            <label htmlFor="nome">Endereco</label>
            <input
              className="p-5 h-[55px]"
              placeholder="Endereco"
              name="endereco"
            />
            <label htmlFor="nome">Numero</label>
            <input
              className="p-5 h-[55px]"
              placeholder="Numero"
              name="numero"
            />
            <label htmlFor="nome">Complemento</label>
            <input
              className="p-5 h-[55px]"
              placeholder="Apartamento, unidade, prédio, andar"
              name="complemento"
            />
            <label htmlFor="nome">Metodo de Entrega</label>
          </div>

          <div className="flex gap-4">
            <input type="radio" name="entrega" />
            <span>
              Correios Sedex (Melhor Envio) (8 a 9 dias úteis) R$ 35,20
            </span>
          </div>
          <div className="flex gap-4">
            <input type="radio" name="entrega" />
            <span>Entrega 1</span>
          </div>
          <div className="flex gap-4">
            <input type="radio" name="entrega" />
            <span>Entrega 1</span>
          </div>
          <div className="flex gap-4">
            <input type="radio" name="entrega" />
            <span>Entrega 1</span>
          </div>
          <Button>Finalizar Pedido</Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
