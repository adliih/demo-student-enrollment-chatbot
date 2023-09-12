import React from "react"
import { Actions } from "./ActionProvider"

export interface OptionProps {
  value: string
}

interface Props {
  payload: {
    options: OptionProps[]
  }
  actions: Actions
}

export default function QuickReply({ payload, actions }: Props) {
  const { options } = payload
  const renderedOptions = options.map((option) => (
    <Option key={option.value} actions={actions} option={option} />
  ))

  return <div>{renderedOptions}</div>
}

function Option({
  option,
  actions,
}: {
  option: OptionProps
  actions: Actions
}) {
  const { sendAsClientReply } = actions
  return (
    <button type="button" onClick={() => sendAsClientReply(option.value)}>
      {option.value}
    </button>
  )
}
