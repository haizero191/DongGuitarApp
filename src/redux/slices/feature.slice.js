import { createSlice } from "@reduxjs/toolkit"
import { getFeaturesActive } from "../services/feature.service"

const featureSlice = createSlice({
    name: "feature",
    initialState: {
        isLoading : false,
        data: null,
        error: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getFeaturesActive.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(getFeaturesActive.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload.data
        })
        builder.addCase(getFeaturesActive.rejected, (state, action) => {
            state.error = true
        })
    }
})





export default featureSlice.reducer;