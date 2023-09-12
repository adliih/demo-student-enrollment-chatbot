import React, { useState } from "react"
import { Actions } from "../ActionProvider"

interface Props {
  actions: Actions
}

export default function InputText({ actions }: Props) {
  const [value, setValue] = useState("")

  const handleSubmit = () => {
    actions.sendAsClientReply(value)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <input
        className="input input-bordered input-sm w-full max-w-xs"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit"></button>
    </form>
  )
}
