import { createSlice } from "@reduxjs/toolkit";
import tuits from "../data/tuits.json";

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuits,
  reducers: {
    toggleLike(state, action) {
      const tuit = state.find((tuit) => tuit._id === action.payload._id);
      // Add/subtract a like
      tuit.likes += tuit.liked ? -1 : 1;
      tuit.liked = !tuit.liked;
    },
  },
});

export const { toggleLike } = tuitsSlice.actions;
export default tuitsSlice.reducer;
