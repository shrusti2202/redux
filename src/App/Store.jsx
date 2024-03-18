import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "../Featcures/Cart/CartSlice";

export default configureStore({
    reducer:{
        cart:CartSlice,
    },
})