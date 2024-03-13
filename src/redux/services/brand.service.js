import { createAsyncThunk } from "@reduxjs/toolkit"

export const getBrands = createAsyncThunk('getBrands', async () => {
    const data = await fetch("http://localhost:4000/api/brands")
    return data.json();
})


