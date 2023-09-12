import config from "./config"
import MessageParser from "./MessageParser"
import ActionProvider from "./ActionProvider"
import Chatbot from "react-chatbot-kit"
import "react-chatbot-kit/build/main.css"
import "./ChatScreen.css"

export default function ChatScreen() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  )
}
