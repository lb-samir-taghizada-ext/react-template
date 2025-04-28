import {applyMiddleware, combineReducers, createStore} from "redux";
import {productsReducer} from "./products";
import {userReducer} from "./user";
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>