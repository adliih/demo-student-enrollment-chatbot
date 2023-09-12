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
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
