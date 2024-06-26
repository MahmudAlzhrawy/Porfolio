import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./Slices/projectsSlice"
export const store =configureStore({
    reducer:{
        projects:projectSlice,
    },

})