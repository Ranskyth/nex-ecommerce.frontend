const API = process.env.NEXT_PUBLIC_API;

export const GetAllProductServices = async () => {
  const data = await fetch(`${API}/products`);
  const datajson = await data.json();
  return datajson;
};

export const GetByIdProductServices = async (id:string) => {
    const data = await fetch(`${API}/products/${id}`);
    const datajson = await data.json();
    return datajson;
};
