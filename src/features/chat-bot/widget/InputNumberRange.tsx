import React, { useState } from "react"
import { Actions } from "../ActionProvider"

interface Props {
  actions: Actions
  payload: {
    min: number
    max: number
  }
}

export default function InputNumberRange({ payload, actions }: Props) {
  const { min, max } = payload
  const [value, setValue] = useState(min)

  const handleChange = (value: string) => {
    const inputValue = parseInt(value, 10)

    if (!isNaN(inputValue) && inputValue >= min && inputValue <= max) {
      setValue(inputValue)
    }
  }

  const handleSubmit = () => {
    actions.sendAsClientReply(`${value}`)
  }

  return (
    <form
      className="form-control"
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <div>
        <input
          className="input input-bordered input-sm w-full max-w-xs"
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit"></button>
      </div>
    </form>
  )
}
