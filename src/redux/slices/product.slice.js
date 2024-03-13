import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../services/product.service"

const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading : false,
        data: null,
        error: false,
        navigate: {
            page: 0,
            limit: 0,
            totalPage: 0
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload.data
            state.navigate = {...action.payload.navigate}
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.error = true
        })
    }
})

export default productSlice.reducer;