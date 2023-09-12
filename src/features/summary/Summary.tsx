import React from "react"
import { useAppSelector } from "../../app/hooks"

export default function Summary() {
  const studentInfo = useAppSelector((state) => state.studentInfo)
  return (
    <div>
      Your name {studentInfo.name} aged {studentInfo.age} has been added to
      student system at {studentInfo.slot}. You may now exit.
    </div>
  )
}
