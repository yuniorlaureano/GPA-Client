export interface ProductModel {
  id: string;
  code: string;
  name: string;
  photo: string;
  price: number;
  description: string;
  barCode: string;
  expirationDate: Date;
  unitId: string;
  unit: string;
  categoryId: string;
  category: string;
  productLocationId: string;
  productLocation: string;
}

export interface ProductCreationModel {
  id: string | null;
  code: string;
  name: string;
  photo: string;
  price: number;
  description: string;
  barCode: string;
  expirationDate: Date | null;
  unitId: string;
  categoryId: string;
  productLocationId: string;
}

export const productCreationDefaultValues: ProductCreationModel = {
  id: null,
  code: '',
  name: '',
  photo: '',
  price: 0,
  description: '',
  barCode: '',
  expirationDate: null,
  unitId: '',
  categoryId: '',
  productLocationId: '',
};

export const toProductCreation = (
  productoModel: ProductModel
): ProductCreationModel => {
  let creationModel: ProductCreationModel = {
    id: productoModel.id,
    code: productoModel.code,
    name: productoModel.name,
    photo: productoModel.photo,
    price: productoModel.price,
    description: productoModel.description,
    barCode: productoModel.barCode,
    expirationDate: productoModel.expirationDate,
    unitId: productoModel.unitId,
    categoryId: productoModel.categoryId,
    productLocationId: productoModel.productLocationId,
  };
  return creationModel;
};
