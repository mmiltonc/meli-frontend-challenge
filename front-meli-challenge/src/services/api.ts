import { API_URL } from "./const";
import type { ResponseSearch, ProductDetail } from '../types'

const getSearchItems = async ( query:string ): Promise<ResponseSearch> => {
    try {
        const data = await fetch(`${API_URL}?q=${query}`);
        const response: ResponseSearch = await data.json();
        return response
    } catch (err) {
        throw new Error("Error al obtener items")
    }
};

const getProductoDetail = async ( id:string ): Promise<ProductDetail> => {

    try {
        const data = await fetch(`${API_URL}/${id}`);
        const response: any = await data.json();
        return response
    } catch (err) {
        throw new Error("Error al obtener detalle")
    }
};

export { getSearchItems, getProductoDetail }