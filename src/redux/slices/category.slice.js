import { createSlice } from "@reduxjs/toolkit"
import { getCategories } from "../services/category.service"

const categorySlice = createSlice({
    name: "category",
    initialState: {
        isLoading : false,
        data: null,
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload.data
        })
        builder.addCase(getCategories.rejected, (state, action) => {
            state.error = true
        })
    }
})





export default categorySlice.reducer;