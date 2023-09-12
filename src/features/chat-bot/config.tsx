import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig"
import { createChatBotMessage } from "react-chatbot-kit"
import SlotPicker from "./SlotPicker"
import QuickReply, { OptionProps } from "./QuickReply"

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

export enum WidgetName {
  SlotPicker = "SlotPicker",
  QuickReply = "QuickReply",
}

const config: IConfig = {
  initialMessages: [
    createChatBotMessage(botMessages.welcome, {
      widget: WidgetName.QuickReply,
      payload: {
        options: [
          {
            value: userMessages.startSession,
          },
        ] as OptionProps[],
      },
    }),
  ],
  widgets: [
    {
      widgetName: WidgetName.SlotPicker,
      widgetFunc: (props) => <SlotPicker {...props} />,
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: WidgetName.QuickReply,
      widgetFunc: (props) => <QuickReply {...props} />,
      props: {},
      mapStateToProps: [],
    },
  ],
}

export default config
