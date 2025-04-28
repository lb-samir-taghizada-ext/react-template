export type Product = {
  id: number;
  name: string;
}

export type Pagination = {
  currentPage: number;
  next: string;
  prev: string;
}

export type ProductsState = {
  list: Product[];
  pagination: Pagination;
  isLoading: boolean;
  error: string;
}