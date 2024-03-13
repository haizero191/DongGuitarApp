import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../slices/product.slice"
import brandSlice from "../slices/brand.slice"
import categorySlice from "../slices/category.slice"
import featureSlice from "../slices/feature.slice"

export const store = configureStore({
    reducer: {
        products:  productReducer,
        brands: brandSlice,
        features: featureSlice,
        categories: categorySlice
    }
})

 