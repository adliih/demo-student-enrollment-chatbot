import React from "react"
import { parse, subDays, addDays, format } from "date-fns"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { dateChoosen } from "../student-info/studentInfoSlice"

export default function DatePicker() {
  const DATE_FORMAT = "dd MMM, EEE"
  const date = useAppSelector((state) => state.studentInfo.slot.date)
  const dispatch = useAppDispatch()
  const parsedDate = date ? parse(date, DATE_FORMAT, new Date()) : new Date()

  const dateOptions = [
    subDays(parsedDate, 1),
    parsedDate,
    addDays(parsedDate, 1),
  ]

  const formattedDateOptions = dateOptions.map((date) =>
    format(date, DATE_FORMAT),
  )

  const handleClick = (date: string) => {
    dispatch(dateChoosen(date))
  }

  return (
    <div>
      {formattedDateOptions.map((date) => (
        <button key={date} type="button" onClick={() => handleClick(date)}>
          {date}
        </button>
      ))}
    </div>
  )
}
