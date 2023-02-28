import { configureStore } from "@reduxjs/toolkit"
import popupReducer from "../features/blur/blurPopupSlice"

export default configureStore({
  reducer: {
    blurPopup: popupReducer,
  },
})
