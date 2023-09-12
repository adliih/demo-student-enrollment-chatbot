import React from "react"
import { useAppSelector } from "../../app/hooks"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { reset } from "../student-info/studentInfoSlice"

export default function Summary() {
  const { slot, age, name } = useAppSelector((state) => state.studentInfo)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { date, time } = slot

  const handleExit = () => {
    navigate("/")
    dispatch(reset())
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-24 m-24 text-center">
        <p>
          Your name <span className="font-bold">{name}</span> aged{" "}
          <span className="font-bold">{age}</span> has been added to student
          system at{" "}
          <span className="font-bold">
            {date} {time}
          </span>
          .
        </p>
        <p>
          You may now{" "}
          <span
            className="underline hover:text-accent cursor-pointer"
            onClick={() => handleExit()}
          >
            exit
          </span>
          .
        </p>
      </div>
    </div>
  )
}
