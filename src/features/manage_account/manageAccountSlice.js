import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  account: {},
}

const manageAccountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
})

export const {} = manageAccountSlice.actions

export default manageAccountSlice.reducer
