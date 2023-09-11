import React from "react"

interface Props {
  message: string
}

export default function UserChatMessage(props: Props) {
  return <div>{props.message}</div>
}
