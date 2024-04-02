import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../api/MoviesService";

export interface favoritesState {
  movies: Movie[];
}

const initialState: favoritesState = {
  movies: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addMovie(state: favoritesState, action: PayloadAction<Movie>): void {
      const movie = state.movies.find((m) => m.id === action.payload.id);
      if (movie) {
        return;
      }
      state.movies.push(action.payload);
    },
    removeMovie(state: favoritesState, action: PayloadAction<Movie>): void {
      const index = state.movies.findIndex((m) => m.id === action.payload.id);
      if (index === -1) {
        return;
      }
      state.movies.splice(index, 1);
    },
  },
});

export const { addMovie, removeMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;
