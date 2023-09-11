import React, { useState } from "react"
import { createChatBotMessage } from "react-chatbot-kit"
import { botMessages, userMessages } from "./config"

enum FormStep {
  INIT = "INIT",
  CHOOSE_SLOT = "CHOOSE_SLOT",
  ENTER_NAME = "ENTER_NAME",
  ENTER_AGE = "ENTER_AGE",
  END = "END",
}

type MessageType = ReturnType<typeof createChatBotMessage>

const ActionProvider = ({ setState, children }: any) => {
  const [formStep, setFormStep] = useState(FormStep.INIT)

  const addMessage = (message: MessageType) => {
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }))
  }

  const handleInitResponse = (message: string) => {
    // do nothing if the reply is not expected
    if (message !== userMessages.startSession) {
      return
    }
    addMessage(createChatBotMessage(botMessages.pickSlot, {}))
    setFormStep(FormStep.CHOOSE_SLOT)
  }

  const handleSlotChoosen = (message: string) => {
    addMessage(createChatBotMessage(botMessages.enterName, {}))
    setFormStep(FormStep.ENTER_NAME)
  }
  const handleNameEntered = (message: string) => {
    addMessage(createChatBotMessage(botMessages.enterAge, {}))
    setFormStep(FormStep.ENTER_AGE)
  }

  const handleAgeEntered = (message: string) => {
    addMessage(createChatBotMessage(botMessages.exit, {}))
    setFormStep(FormStep.END)
  }

  const userReplied = (message: string) => {
    switch (formStep) {
      case FormStep.INIT:
        return handleInitResponse(message)
      case FormStep.CHOOSE_SLOT:
        return handleSlotChoosen(message)
      case FormStep.ENTER_NAME:
        return handleNameEntered(message)
      case FormStep.ENTER_AGE:
        return handleAgeEntered(message)
    }
  }
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { userReplied },
        })
      })}
    </div>
  )
}

export default ActionProvider
