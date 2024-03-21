import { combineReducers } from "@reduxjs/toolkit";
import authuserreducer from "./authuser.reducer";
import userprofilereducer from "./userprofile.reducer";

export default combineReducers({
  authuserreducer,
  userprofilereducer,
});
