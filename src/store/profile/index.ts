import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { TMyProfile } from "../../types";

export interface ProfieState {
  profile: TMyProfile;
  friendName: string;
}

const initialState: ProfieState = {
  profile: null,
  friendName: "",
};
export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    initProfile: (state) => {
      state.profile = null;
    },
    updateBio: (state, action) => {
      state.profile.user.bio = action.payload;
    },
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
    updatelikes: (state, action) => {
      const updateIndex = state.profile.Mypost.findIndex(
        (x) => x._id === action.payload.postId
      );
      state.profile.Mypost[updateIndex].likes = action.payload.likecnt;
    },
    setFriendName: (state, action) => {
      state.friendName = action.payload;
    },
  },
});

export const { updateProfile, initProfile, updateBio, setFriendName } =
  profileSlice.actions;
export const selectProfile = (state: RootState) => state.profile.profile;
export const selectFriendName = (state: RootState) => state.profile.friendName;
export default profileSlice.reducer;
