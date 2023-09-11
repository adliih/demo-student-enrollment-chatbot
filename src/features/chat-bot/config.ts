import { createChatBotMessage } from "react-chatbot-kit"
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig"

const config: IConfig = {
  initialMessages: [createChatBotMessage(`Hello world`, {})],
}

export default config

export const botMessages = {
  welcome: "Hello, Welcome to student info system!",
  pickSlot: "Pick a slot!",
  enterName: "Enter your Name",
  enterAge: "Enter your Age",
  exit: "Thank you. In 5 seconds, bot will exit",
}

export const userMessages = {
  startSession: "Got It!",
}
