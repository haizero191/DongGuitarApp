import { createAsyncThunk } from "@reduxjs/toolkit"

export const getBrands = createAsyncThunk('getBrands', async () => {
    const data = await fetch(process.env.REACT_APP_API_URL + "/api/brands")
    return data.json();
})
