import { createSlice } from "@reduxjs/toolkit"
import { getBrands } from "../services/brand.service"

const brandSlice = createSlice({
    name: "brand",
    initialState: {
        isLoading : false,
        data: null,
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getBrands.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getBrands.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload.data
            // state.navigate = {...action.payload.navigate}
        })
        builder.addCase(getBrands.rejected, (state, action) => {
            state.error = true
        })
    }
})





export default brandSlice.reducer;