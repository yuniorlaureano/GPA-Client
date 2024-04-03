import { SearchModel } from '../../models/common/search.model';
export const searchToQueryString = (search: SearchModel) => {
  return `page=${search.page ?? 1}&pageSize=${search.pageSize ?? 10}&search=${
    search.search ?? ''
  }`;
};

export const DEFAULT_SEARCH_PARAMS: SearchModel = {
  page: 1,
  pageSize: 10,
  search: null,
};
