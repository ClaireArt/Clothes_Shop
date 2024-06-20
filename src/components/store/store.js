import { configureStore } from "@reduxjs/toolkit";
import { newProductApi, newProductReducer } from "./storeSlices/productSlice/newProductApi";

const store = configureStore({
    reducer: {
        newProduct: newProductReducer
    },
    middleware:(GetDefaultMiddleware) => [
        ...GetDefaultMiddleware(),
        newProductApi.middleware
    ]
})

export default store