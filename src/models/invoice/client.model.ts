export interface ClientModel {
  id: string | null;
  name: string;
  lastName: string | null;
  identification: string | null;
  identificationType: string | null;
  phone: string | null;
  availableCredit: string | null;
  email: string | null;
  street: string | null;
  buildingNumber: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  postalCode: string | null;
}

export const clientDefaultValues: ClientModel = {
  id: null,
  name: '',
  lastName: null,
  identification: null,
  identificationType: null,
  phone: null,
  availableCredit: null,
  email: null,
  street: null,
  buildingNumber: null,
  city: null,
  state: null,
  country: null,
  postalCode: null,
};
