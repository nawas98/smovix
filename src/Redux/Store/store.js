import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice  from "../AllSlice/movie";

const Store = configureStore({
  reducer: {
    movie:MoviesSlice,
    
  }
})

export default Store