import axios from 'axios';

const BASE_URL = 'https://api.mercadolibre.com';

export const getItems = async (query: string) => {
  const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
  return {
    author: { name: 'John', lastname: 'Doe' },
    categories: response.data.filters
      .find((filter: any) => filter.id === 'category')
      ?.values.map((cat: any) => cat.name) || [],
    items: response.data.results.slice(0, 4).map((item: any) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.floor(item.price),
        decimals: +(item.price % 1).toFixed(2),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    })),
  };
};

export const getItemDetail = async (id: string) => {
  const [itemResponse, descriptionResponse] = await Promise.all([
    axios.get(`${BASE_URL}/items/${id}`),
    axios.get(`${BASE_URL}/items/${id}/description`),
  ]);

  const item = itemResponse.data;

  return {
    author: { name: 'John', lastname: 'Doe' },
    item: {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.floor(item.price),
        decimals: +(item.price % 1).toFixed(2),
      },
      picture: item.pictures[0]?.url,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      sold_quantity: item.sold_quantity,
      description: descriptionResponse.data.plain_text,
    },
  };
};
