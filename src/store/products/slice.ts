import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

type ProductsState = {
  list: Fact[]
  isLoading: boolean
  error: string
}

const initialState: ProductsState = {
  list: [],
  isLoading: false,
  error: '',
}

type Fact = {
  text: string
  id: string
}

export const getTodaysFact = createAsyncThunk(
  'getTodaysFact',
  async (_, {dispatch}) => {
    try {
      dispatch(setLoading(true))
      const result = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/today')
      const randomFact: Fact = await result.json()
    
      dispatch(setProducts(randomFact))
    } catch (e: unknown) {
      console.log('e :>> ', e);
    } finally {
      dispatch(setLoading(false))
    }
  }
)

export const getProductsListThunk = createAsyncThunk(
  'getProductsListThunk',
  async () => {
    // try {
      const result = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
      const randomFact: Fact = await result.json()
      throw new Error("Couldn't get a random fact")
      return randomFact
    // } catch (e: unknown) {
    //   console.log('e :>> ', e);
    // }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload
    },
    setProducts(state, action: PayloadAction<Fact>) {
      state.list.push(action.payload)
    }
  },
  extraReducers(builder) {
    builder.addCase(getProductsListThunk.pending, (state, action) => {
      state.isLoading = true
      state.error = ''
    })
    builder.addCase(getProductsListThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.list.push(action.payload)
    })
    builder.addCase(getProductsListThunk.rejected, (state, action) => {
      console.log('action :>> ', action);
      state.isLoading = false
      state.error = action.error.message ?? 'General error'
    })
  },
})

export const factsApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: 'https://uselessfacts.jsph.pl/api/v2/facts'}),
  endpoints: (build) => ({
    getRandomFact: build.query({
      query: () => 'random'
    })
  }),
})

export const {useGetRandomFactQuery} = factsApi
 
export const {setLoading, setProducts} = productsSlice.actions

export default productsSlice.reducer
