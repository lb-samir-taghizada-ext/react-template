// import {userReducer} from "./user";
import {configureStore} from "@reduxjs/toolkit";
import productsReducer, {factsApi} from './products/slice';

const rootReducer = {
  // user: userReducer,
  products: productsReducer,
  [factsApi.reducerPath]: factsApi.reducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(factsApi.middleware)
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>