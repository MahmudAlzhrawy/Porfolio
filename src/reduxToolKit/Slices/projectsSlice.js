import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

const url = "/projects.json";
export const fetchdata= createAsyncThunk("projectsSlce/fetchdata", async()=>{
const res= await fetch(url);
const data =await res.json();
return data;


})
const projectSlice =createSlice({

initialState:[],
name:"projectSlice",
reducers:{
},
extraReducers: (builder)=>{
builder.addCase(fetchdata.fulfilled ,(state,action )=>{

    return action.payload;
})

}



})
export default projectSlice.reducer;