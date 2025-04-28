import {RootState} from "..";

export const productsListSelector = (state: RootState) => state.products.list;

export const isLoadingProductsSelector = (state: RootState) => state.products.isLoading;
