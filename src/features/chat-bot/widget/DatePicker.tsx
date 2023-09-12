import React, { useEffect, useState } from "react"
import { parse, subDays, addDays, format } from "date-fns"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { dateChoosen } from "../../student-info/studentInfoSlice"

export default function DatePicker() {
  const DATE_FORMAT = "dd MMM, EEE"
  const selectedDate = useAppSelector((state) => state.studentInfo.slot.date)
  const dispatch = useAppDispatch()

  const currentDate = new Date()

  const [dateOptions, setDateOptions] = useState([
    subDays(currentDate, 1),
    currentDate,
    addDays(currentDate, 1),
  ])

  const formattedDateOptions = dateOptions
    .map((date) => format(date, DATE_FORMAT))
    .map((date) => ({
      date,
      isSelected: selectedDate === date,
    }))

  const handleClick = (date: string) => {
    dispatch(dateChoosen(date))
  }

  return (
    <div className="flex gap-3 overflow-x-scroll">
      {formattedDateOptions.map(({ date, isSelected }) => (
        <button
          className={`btn btn-sm ` + (isSelected ? "text-secondary-focus" : "")}
          key={date}
          type="button"
          onClick={() => handleClick(date)}
        >
          {date}
        </button>
      ))}
    </div>
  )
}
