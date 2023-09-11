import config from "./config"
import MessageParser from "./MessageParser"
import ActionProvider from "./ActionProvider"
import Chatbot from "react-chatbot-kit"

export default function ChatScreen() {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}
