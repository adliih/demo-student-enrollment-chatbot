import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface StudentInfoState {
  name?: string | undefined
  age?: number | undefined
}

const initialState: StudentInfoState = {}

const studentInfoSlice = createSlice({
  initialState,
  name: "student-info",
  reducers: {
    nameSubmitted(state, payload: PayloadAction<string>) {
      state.name = payload.payload
    },
    ageSubmitted(state, payload: PayloadAction<number>) {
      state.age = payload.payload
    },
  },
})

export const { ageSubmitted, nameSubmitted } = studentInfoSlice.actions

export default studentInfoSlice.reducer
