import videoReducer from "./video";
import postsReducer from "./posts";
import userReducer from "./user";
import buttonReducer from "./button";
import profileReducer from "./profile";

const rootReducers = {
  video: videoReducer,
  posts: postsReducer,
  user: userReducer,
  button: buttonReducer,
  profile: profileReducer,
};

export default rootReducers;
