import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./citiesAPI.js";
// import itineraryAPI from "./itineraryAPI";
import userAPI from "./usersAPI";
// import { commentsAPI } from "./commentsAPI";
// import { activitiesAPI } from "./activitiesAPI";

export default configureStore({
  reducer: {
    [citiesAPI.reducerPath]: citiesAPI.reducer,
    // [itineraryAPI.reducerPath]: itineraryAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    // [activitiesAPI.reducerPath]: activitiesAPI.reducer,
    // [commentsAPI.reducerPath]: commentsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(citiesAPI.middleware)
    // .concat(itineraryAPI.middleware)
    .concat(userAPI.middleware)
    // .concat(activitiesAPI.middleware)
    // .concat(commentsAPI.middleware),
});