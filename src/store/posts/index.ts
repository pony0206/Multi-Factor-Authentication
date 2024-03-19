import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { TPost } from "../../types";

export interface PostState {
  posts: TPost[];
  followPosts: TPost[];
}

const initialState: PostState = {
  posts: [],
  followPosts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    initPosts: (state) => {
      state.posts = null;
    },
    addPosts: (state, action: PayloadAction<TPost>) => {
      let newList: any = [action.payload].concat(state.posts);
      state.posts = newList;
    },
    updatePosts: (state, action) => {
      state.posts = action.payload;
    },
    updateFollowPosts: (state, action) => {
      state.followPosts = action.payload;
    },
    addFollowPosts: (state, action) => {
      let newList: any = [action.payload].concat(state.followPosts);
      state.followPosts = newList;
    },
    updatelikes: (state, action) => {
      const updateIndex = state.posts.findIndex(
        (x) => x._id === action.payload.postId
      );
      const updateFollowIndex = state.followPosts.findIndex(
        (x) => x._id === action.payload.postId
      );
      state.posts[updateIndex].likes = action.payload.likecnt;
      state.followPosts[updateFollowIndex].likes = action.payload.likecnt;
    },
    addComment: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const {
  initPosts,
  addPosts,
  updatelikes,
  updatePosts,
  addComment,
  updateFollowPosts,
  addFollowPosts,
} = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export const selectFollowPosts = (state: RootState) => state.posts.followPosts;

export default postsSlice.reducer;
