import React from "react"

interface Props {
  message: string
}

export default function BotChatMessage(props: Props) {
  return <div>{props.message}</div>
}
