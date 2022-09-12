import reducer from "./reducer";
import { configureStore } from '@reduxjs/toolkit';
// ...

const store = configureStore({
    reducer: reducer,
    // {
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
    // },
})
export default store;
