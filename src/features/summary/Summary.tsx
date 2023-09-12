import React from "react"
import { useAppSelector } from "../../app/hooks"

export default function Summary() {
  const { slot, age, name } = useAppSelector((state) => state.studentInfo)
  const { date, time } = slot
  return (
    <div>
      Your name {name} aged {age} has been added to student system at {date}{" "}
      {time}. You may now exit.
    </div>
  )
}
