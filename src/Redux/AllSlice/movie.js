import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

    let api_url="http://localhost:5000/moviesList";

    const initial_value={
        isLoading:false,
        error:null,
    };


    export const postMovie=createAsyncThunk("movie/postMovie",
    async(movieData)=>{
        const res=await axios.post(api_url,movieData)
        console.log("Submitted data: ",res);
        return res?.data;
    });


   export const movieData=createAsyncThunk("movie/movieData",
    async ()=>{
        const res=await axios.get(api_url)
        console.log("Data: ",res);
        return res?.data;
    });

    
    export const deleteMovie=createAsyncThunk("movie/deleteMovie",
    async (id)=>{
        const res=await axios.delete(`${api_url}/${id}`)
        console.log("Deleted sucessfully: ",res);
        return res?.data;
    });
  

    export const MoviesSlice=createSlice({
        name:"movie",
        initialState:initial_value,
        extraReducers:(builder)=>{

            builder.addCase(postMovie.pending,(state,action)=>{
                state.isLoading=true;
                 console.log("Action pending: ",action);
            })
            builder.addCase(postMovie.fulfilled,(state,action)=>{
                state.isLoading=false;
                console.log("Action: fulfilled",action);
                alert("Movies added successfully")
                window.location.reload(); 
            })
            builder.addCase(postMovie.rejected,(state,action)=>{
                state.isLoading=false
                console.log("Action rejected: ",action);
            })


            builder.addCase(movieData.pending,(state,action)=>{
                console.log("Action pending: ",action);
                state.isLoading=true;
            })
            builder.addCase(movieData.fulfilled,(state,action)=>{
                 console.log("Action fulfilled: ",action);
                    state.isLoading=false;           
            })
            builder.addCase(movieData.rejected,(state,action)=>{
                 console.log("Action rejected: ",action);
                state.isLoading=false;
            })


            builder.addCase(deleteMovie.pending,(state,action)=>{
                 console.log("Action pending: ",action);
                state.isLoading=true;
            })
            builder.addCase(deleteMovie.fulfilled,(state,action)=>{
                 console.log("Action fulfilled: ",action);
                    state.isLoading=false;   
                    alert("Movie deleted")
                    window.location.reload();        
            })
            builder.addCase(deleteMovie.rejected,(state,action)=>{
                 console.log("Action rejected: ",action);
                state.isLoading=false;
            })


        }
    })


export default MoviesSlice.reducer