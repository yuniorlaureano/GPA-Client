export interface ProductLocationModel {
  id: string | null | undefined;
  code: string;
  name: string;
  description: string;
}

export const productLocationDefaultValues: ProductLocationModel = {
  id: null,
  code: '',
  name: '',
  description: '',
};
