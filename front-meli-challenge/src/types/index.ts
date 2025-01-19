
interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

interface Product {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

interface Item {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  description: string;
}
interface Author {
  name: string;
  lastname: string;
}
interface ResponseSearch {
  author: Author;
  categories: string[];
  items: Product[];
}

interface ProductDetail {
  author: Author;
  item: Item;
}

export type { ResponseSearch, Product, ProductDetail }