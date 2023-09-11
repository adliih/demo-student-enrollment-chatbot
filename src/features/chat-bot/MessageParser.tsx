import React, { ReactElement } from "react"
import { Actions } from "./ActionProvider"

interface Props {
  children: ReactElement
  actions: Actions
}

const MessageParser = ({ children, actions }: Props) => {
  const parse = (message: string) => {
    actions.handleParsedMessage(message)
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        })
      })}
    </div>
  )
}

export default MessageParser
