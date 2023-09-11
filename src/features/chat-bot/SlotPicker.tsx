import React from "react"
import { Actions } from "./ActionProvider"

interface Props {
  actions: Actions
}

export default function SlotPicker({ actions }: Props) {
  return (
    <div>
      Slot Picker{" "}
      <button
        type="button"
        onClick={(e) => actions.sendAsClientReply("a")}
      ></button>
    </div>
  )
}
