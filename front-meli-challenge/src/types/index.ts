interface ResponseSearch {
    results: Product[];
}

interface Product {
    id: string;
    title: string;
    price: number;
    seller: {id: number, nickname: string};
    thumbnail: string;
    free_shipping: boolean;
}

interface ResponseDetail {
    results: ProductDetail;
}


interface ProductDetail {
    pictures: Picture[];
    title: string;
    price: number;
    condition: string;
    descriptions: string[]
}

interface Picture {
    secure_url: string;
}

export type { ResponseSearch, Product, ResponseDetail, ProductDetail }