import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface StudentInfoState {
  name?: string | undefined
  age?: number | undefined
  slot?: string | undefined
}

const initialState: StudentInfoState = {}

const studentInfoSlice = createSlice({
  initialState,
  name: "student-info",
  reducers: {
    slotChoosen(state, payload: PayloadAction<string>) {
      state.slot = payload.payload
    },
    nameSubmitted(state, payload: PayloadAction<string>) {
      state.name = payload.payload
    },
    ageSubmitted(state, payload: PayloadAction<number>) {
      state.age = payload.payload
    },
  },
})

export const { ageSubmitted, nameSubmitted, slotChoosen } =
  studentInfoSlice.actions

export default studentInfoSlice.reducer
