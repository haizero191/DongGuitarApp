import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getFeaturesActive = createAsyncThunk('getFeaturesActive', async () => {
    const response = await axios.get("http://localhost:4000/api/features?isActive=true");
    return response.data;
})

