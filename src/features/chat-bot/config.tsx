import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig"
import { createChatBotMessage } from "react-chatbot-kit"
import SlotPicker from "./widget/SlotPicker"
import QuickReply, { OptionProps } from "./widget/QuickReply"
import InputText from "./widget/InputText"
import InputNumberRange from "./widget/InputNumberRange"

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
  InputText = "InputText",
  InputNumberRange = "InputNumberRange",
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
    {
      widgetName: WidgetName.InputText,
      widgetFunc: (props) => <InputText {...props} />,
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: WidgetName.InputNumberRange,
      widgetFunc: (props) => <InputNumberRange {...props} />,
      props: {},
      mapStateToProps: [],
    },
  ],
}

export default config
