export interface StockModel {
  id: string | null | undefined;
  description: string | null;
  transactionType: number;
  productId: string;
  providerId: string | null;
  storeId: string;
  reasonId: number;
}

export const categoryModelDefaultValues: StockModel = {
  id: null,
  description: null,
  transactionType: 0,
  productId: '',
  providerId: null,
  storeId: '',
  reasonId: 0,
};
