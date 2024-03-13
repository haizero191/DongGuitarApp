import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getCategories = createAsyncThunk('getCategories', async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/categories");
    return response.data;
})


