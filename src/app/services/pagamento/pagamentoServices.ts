import { API } from "../api/apiConfig";

export const CreatePagamento = async (body: string) => {
  const data = await fetch(`${API}/criar/pagamento`, {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({"id": body}),
  });
  const datajson = await data.json();
  return datajson;
};
