import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import studentInfo from "../features/student-info/studentInfoSlice"

export const store = configureStore({
  reducer: {
    studentInfo,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
