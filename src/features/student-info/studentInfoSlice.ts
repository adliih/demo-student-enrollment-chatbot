import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface StudentInfoState {
  name?: string | undefined
  age?: number | undefined
  slot: {
    date?: string | undefined
    time?: string | undefined
  }
}

const initialState: StudentInfoState = {
  slot: {},
}

const studentInfoSlice = createSlice({
  initialState,
  name: "student-info",
  reducers: {
    dateChoosen(state, payload: PayloadAction<string>) {
      state.slot.date = payload.payload
    },
    timeChoosen(state, payload: PayloadAction<string>) {
      state.slot.time = payload.payload
    },
    nameSubmitted(state, payload: PayloadAction<string>) {
      state.name = payload.payload
    },
    ageSubmitted(state, payload: PayloadAction<number>) {
      state.age = payload.payload
    },
    reset(state) {
      delete state.slot.date
      delete state.slot.time
      delete state.age
      delete state.name
    },
  },
})

export const { ageSubmitted, nameSubmitted, dateChoosen, timeChoosen, reset } =
  studentInfoSlice.actions

export default studentInfoSlice.reducer
