import { API_URL_SEARCH, API_URL_ITEMS } from "./const";
import type { ResponseSearch, Product, ResponseDetail ,ProductDetail } from '../types'

const getSearchItems = async ( query:string ): Promise<Product[]> => {

    try {
        const data = await fetch(`${API_URL_SEARCH}/search?q=${query}`);
        const response: ResponseSearch = await data.json();
        const filterResponse = response.results.slice(0,4)
        return filterResponse
    } catch (err) {
        throw new Error("Error al obtener items")
    }
};

const getProductoDetail = async ( id:string ): Promise<ProductDetail> => {

    try {
        const data = await fetch(`${API_URL_ITEMS}/${id}`);
        const response: any = await data.json();
        console.log('response detail: ', response)
        //   if (!response.ok) {
        //     throw new Error(`Error ${response.status}: ${response.statusText}`);
        //   }
        return response
    } catch (err) {
        console.log('entra en catch')
        throw new Error("Error al obtener detalle")
    }
};
export { getSearchItems, getProductoDetail }