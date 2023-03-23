import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const STATUSES =Object.freeze({
    IDLE: 'IDLE',
    LOADING: 'LOADING',
    ERROR: 'ERROR',
})
const initialState = {
    status: STATUSES.IDLE,
    data:[]
}
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const res= await fetch(`https://dummyjson.com/products`)
      const data= await res.json();
      console.log(data.products);
      return data.products;
    }
  )

export const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers:(builder)=> {
    builder
    .addCase(fetchProducts.pending,(state,action)=>{
        state.status=STATUSES.LOADING;

    })
    .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.status=STATUSES.IDLE;
        state.data=action.payload;

    })
    .addCase(fetchProducts.rejected,(state,action)=>{
        state.status=STATUSES.ERROR;

    })

  },
  
  
})


export const { increment } = productSlice.actions

export default productSlice.reducer