import { configureStore } from "@reduxjs/toolkit";
import slice from "../reduxtoolkit/counterSlice";
export default configureStore({
  reducer: {
    counter: slice,
  },
});
