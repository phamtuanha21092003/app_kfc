import { createSlice } from "@reduxjs/toolkit"

const blurPopupSlice = createSlice({
  name: "blurPopup",
  initialState: { show: false },
  reducers: {
    togglePopup: (state) => {
      state.show = !state.show
    },
  },
})

export default blurPopupSlice.reducer
export const { togglePopup } = blurPopupSlice.actions
