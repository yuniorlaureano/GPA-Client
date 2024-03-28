export interface UnitModel {
  id: string | null;
  code: string;
  name: string;
  description: string;
}

export const unitModelDefaultValues: UnitModel = {
  id: null,
  code: '',
  name: '',
  description: '',
};
