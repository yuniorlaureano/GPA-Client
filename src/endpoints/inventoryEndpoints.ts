export const base = 'inventory';
export default {
  products: `${base}/products`,
  product: (id: string) => `${base}/products/${id}`,
  categories: `${base}/categories`,
  category: (id: string) => `${base}/categories/${id}`,
  providers: `${base}/providers`,
  provider: (id: string) => `${base}/providers/${id}`,
  stocks: `${base}/stocks`,
  stock: (id: string) => `${base}/stocks/${id}`,
  productLocations: `${base}/productlocations`,
  productLocation: (id: string) => `${base}/productlocations/${id}`,
};
