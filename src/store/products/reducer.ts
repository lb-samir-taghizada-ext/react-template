import {getProductsFromBackend} from "../../backend";
import {Product, ProductsState} from "./types";

const initialState: ProductsState = {
  list: [],
  pagination: {
    currentPage: 1,
    next: '',
    prev: ''
  },
  isLoading: false,
  error: '',
}

export const getProductsListThunk = () => async (dispatch) => {
  try {
    dispatch(setIsLoadingActionCreator(true))
    const result = await getProductsFromBackend()
  
    dispatch(setProductsActionCreator(result))
  } catch (e) {
    // Error handling
  } finally {
    dispatch(setIsLoadingActionCreator(false))
  }
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_ACTION_TYPES.SET_PRODUCTS:
      // DO NOT MUTATE THE STATE
      return {
        ...state,
        list: action.payload,
      }
    case PRODUCTS_ACTION_TYPES.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state;
  }
}

export const PRODUCTS_ACTION_TYPES = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_LOADING: 'SET_LOADING',
}

export const setProductsActionCreator = (listOfProducts: Product[]) => ({
  type: PRODUCTS_ACTION_TYPES.SET_PRODUCTS,
  payload: listOfProducts,
})

const setIsLoadingActionCreator = (value: boolean) => ({
  type: PRODUCTS_ACTION_TYPES.SET_LOADING,
  payload: value,
})
