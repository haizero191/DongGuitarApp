import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getFeaturesActive = createAsyncThunk('getFeaturesActive', async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL + "/api/features?isActive=true");
    return response.data;
})

