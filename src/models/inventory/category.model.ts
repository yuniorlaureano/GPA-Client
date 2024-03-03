export interface CategoryModel {
  id: string | null | undefined;
  name: string;
  description: string;
  enabled: boolean;
}

export const categoryModelDefaultValues: CategoryModel = {
  id: null,
  name: '',
  description: '',
  enabled: false,
};
