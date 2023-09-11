import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig"
import Loading from "./Loading"
import { createCustomMessage } from "react-chatbot-kit"
import UserChatMessage from "./UserChatMessage"
import BotChatMessage from "./BotChatMessage"

const config: IConfig = {
  initialMessages: [createCustomMessage("", "loading", {})],
  customComponents: {
    userAvatar: (props) => <></>,
    userChatMessage: (props) => <UserChatMessage {...props} />,
    botChatMessage: (props) => <BotChatMessage {...props} />,
  },
  customMessages: {
    loading: (props) => <Loading {...props} />,
  },
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
