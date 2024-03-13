import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const getProducts = createAsyncThunk('getProducts', async (args, thunkAPI) => {
    const { page, limit, filter } = args; // Destructure tham số từ args
    const response = await axios.get(process.env.REACT_APP_API_URL + `/api/products`, {
        params: {
            page: page,
            limit: limit,
            filter: filter
        }
    })
    return response.data;
})

