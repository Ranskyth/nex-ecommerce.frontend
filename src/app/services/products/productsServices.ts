import { API } from "../api/apiConfig";

export const GetAllProductServices = async () => {
  const data = await fetch(`${API}/products`);
  const datajson = await data.json();
  console.log(datajson)
  return datajson;
};

export const GetByIdProductServices = async (id:string) => {
    const data = await fetch(`${API}/products/${id}`);
    const datajson = await data.json();
    return datajson;
};
