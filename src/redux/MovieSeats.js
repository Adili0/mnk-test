import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isloggedin : false,
  orderCount: null,
  movieData:[],
};


export const getmovieData = createAsyncThunk(
  "movie/movieData",
  async () => {
    const res = await axios.get(
     'https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies'
    );
    const result = res?.data ;
    return result;
  }
);



export const movieSliceSlice = createSlice({
  name: "movieSliceSlice",
  initialState,
  reducers: {
    updateMovieTickets: (state, action) => {
        const { index } = action.payload;  
        const movie = state.movieData[index];  
        
        if (movie) {
          
          if (typeof movie.remainingTickets === 'undefined') {
            movie.remainingTickets = 10;
          }
          if (typeof movie.seatsBooked === 'undefined') {
            movie.seatsBooked = 0;
          }
    
          if (movie.remainingTickets >= 1) {
            movie.remainingTickets -= 1;
            movie.seatsBooked += 1;

            state.movieData = [
              ...state.movieData.slice(0, index),  
              { ...movie },  
              ...state.movieData.slice(index + 1)  
            ];
          }else {
         
            alert('No remaining tickets available for this movie.');
          }
        } else {
          alert('Movie not found at the provided index.');
        }
      },
      authentication:(state , action)=>{
        state.isloggedin=action.payload.auth;
      }
  },
  extraReducers: (builder) => {
  
    builder.addCase(getmovieData.pending, (state) => {
      
    });
    builder.addCase(getmovieData.fulfilled, (state, action) => {
      state.movieData = action.payload;
      
    });
    builder.addCase(getmovieData.rejected, (state, action) => {
     
    });
    
  },
});
export const { updateMovieTickets , authentication } = movieSliceSlice.actions;
export const movieSliceSliceReducer = movieSliceSlice.reducer;