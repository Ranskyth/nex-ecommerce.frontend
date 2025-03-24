'use client'
import { FormEvent } from "react";

const Page = () => {

    const handleSubmitData = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const Data = () => {
            nome: formData.get("nome")
            cpf: formData.get("cpf")
        }
    }
  return (
    <div className="flex justify-center items-center h-[100%] py-[3%]">
      <form onSubmit={handleSubmitData}>
        <h1 className="text-[28px]">Finalizar Comprar</h1>
        <div className="flex flex-col my-20">
            <div className="flex gap-5 flex-col">
            <label htmlFor="nome">Nome Completo</label>
          <input placeholder="Nome Completo" name="nome" />
          <label htmlFor="nome">CPF</label>
          <input placeholder="CPF" name="cpf" />
          <label htmlFor="nome">Nome Completo</label>
          <input placeholder="Email" name="email"/>
          <label htmlFor="nome">Nome Completo</label>
          <input placeholder="CEP" name="cep"/>
          <label htmlFor="nome">Nome Completo</label>
          <input placeholder="Endereco" name="endereco" />
          <label htmlFor="nome">Nome Completo</label>
          <input placeholder="Numero" name="numero"/>
          <label htmlFor="nome">Nome Completo</label>
          <input placeholder="Apartamento, unidade, prédio, andar" name="apartamento" />
          <label htmlFor="nome">Metodo de Entrega</label>
            </div>

          <div className="flex gap-4">
            <input type="radio" name="entrega" />
            <span>Correios Sedex (Melhor Envio) (8 a 9 dias úteis)  R$ 35,20</span>
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
          <button>Finalizar Pedido</button>
        </div>
      </form>
    </div>
  );
};

export default Page;
