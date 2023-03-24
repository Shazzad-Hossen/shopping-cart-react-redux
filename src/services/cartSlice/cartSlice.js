import { createSlice } from "@reduxjs/toolkit"

const initialState={
    data:[],
    pCount:0,
    tPrice:0,
}

const productSlice= createSlice({
    name:'cart',
    initialState,
    reducers: {
        addProduct:(state,action)=>{
            state.data.push(action.payload)
            state.tPrice+=action.payload.price

        },
        removeProduct:(state,action)=>{
                state.data= state.data.filter((item)=>item.id!==action.payload)
            

        }
    }
})


export const { addProduct,removeProduct } = productSlice.actions

export default productSlice.reducer