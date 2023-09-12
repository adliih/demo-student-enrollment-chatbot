import React from "react"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { timeChoosen } from "../../student-info/studentInfoSlice"

interface TimeOptions {
  type: "Morning" | "Noon"
  value: string
}

const options: TimeOptions[] = [
  {
    type: "Morning",
    value: "10:00 AM",
  },
  {
    type: "Morning",
    value: "11:00 AM",
  },
  {
    type: "Morning",
    value: "12:00 AM",
  },
  {
    type: "Noon",
    value: "02:00 PM",
  },
  {
    type: "Noon",
    value: "03:00 PM",
  },
  {
    type: "Noon",
    value: "04:00 PM",
  },
]

export default function TimePicker() {
  const date = useAppSelector((state) => state.studentInfo.slot.date)
  const dispatch = useAppDispatch()
  if (!date) {
    return <></>
  }

  const groupedOptions = options.reduce(
    (result: Record<string, string[]>, option) => {
      const { type, value } = option
      if (!result[type]) {
        result[type] = []
      }
      result[type].push(value)
      return result
    },
    {},
  )

  const handleClick = (value: string) => {
    dispatch(timeChoosen(value))
  }

  return (
    <div className="flex flex-col gap-2 py-2">
      {Object.entries(groupedOptions).map(([type, values]) => (
        <React.Fragment key={type}>
          <div>{type}</div>
          <div className="flex gap-3 overflow-x-scroll">
            {values.map((value) => (
              <button
                className="btn btn-sm"
                type="button"
                key={value}
                onClick={() => handleClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}
