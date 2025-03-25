import { API_VIACEP } from "../api/apiConfig"

export const getCep = async (cep:string) => {
    try{
        const CEP = await fetch(`${API_VIACEP}/${cep}/json`)
        const CEPJSON = await CEP.json()
        return CEPJSON
    }catch(error){
        console.log(error)
    
    }
}