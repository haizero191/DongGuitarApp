import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getFeatureProducts = createAsyncThunk('getFeatureProducts', async (featureId) => {
    const response = await axios.get("http://localhost:4000/api/product-feature/getProductWithFeatureId/" + featureId);
    return response.data;
})