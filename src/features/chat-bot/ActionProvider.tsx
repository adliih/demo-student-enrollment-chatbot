import React, { useState } from "react"
import { createChatBotMessage, createClientMessage } from "react-chatbot-kit"
import { botMessages, userMessages, WidgetName } from "./config"
import { useAppDispatch } from "../../app/hooks"
import { ageSubmitted, nameSubmitted } from "../student-info/studentInfoSlice"
import { useNavigate } from "react-router-dom"

export interface Actions {
  handleParsedMessage: (message: string) => void
  sendAsClientReply: (message: string) => void
}

enum FormStep {
  INIT = "INIT",
  CHOOSE_SLOT = "CHOOSE_SLOT",
  ENTER_NAME = "ENTER_NAME",
  ENTER_AGE = "ENTER_AGE",
  END = "END",
}

type MessageType =
  | ReturnType<typeof createChatBotMessage>
  | ReturnType<typeof createClientMessage>

const ActionProvider = ({ setState, children }: any) => {
  const [formStep, setFormStep] = useState(FormStep.INIT)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

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
    addMessage(
      createChatBotMessage(botMessages.pickSlot, {
        widget: WidgetName.SlotPicker,
      }),
    )
    setFormStep(FormStep.CHOOSE_SLOT)
  }

  const handleSlotChoosen = () => {
    addMessage(
      createChatBotMessage(botMessages.enterName, {
        widget: WidgetName.InputText,
      }),
    )
    setFormStep(FormStep.ENTER_NAME)
  }
  const handleNameEntered = (message: string) => {
    dispatch(nameSubmitted(message))
    addMessage(
      createChatBotMessage(botMessages.enterAge, {
        widget: WidgetName.InputNumberRange,
        payload: {
          min: 18,
          max: 40,
        },
      }),
    )
    setFormStep(FormStep.ENTER_AGE)
  }

  const handleAgeEntered = (message: string) => {
    dispatch(ageSubmitted(parseInt(message)))
    addMessage(createChatBotMessage(botMessages.exit, {}))
    setFormStep(FormStep.END)

    setTimeout(() => {
      navigate("/summary")
    }, 5000)
  }

  const handleParsedMessage = (message: string) => {
    switch (formStep) {
      case FormStep.INIT:
        return handleInitResponse(message)
      case FormStep.CHOOSE_SLOT:
        return handleSlotChoosen()
      case FormStep.ENTER_NAME:
        return handleNameEntered(message)
      case FormStep.ENTER_AGE:
        return handleAgeEntered(message)
    }
  }

  const sendAsClientReply = (message: string) => {
    addMessage(createClientMessage(message, {}))
    handleParsedMessage(message)
  }

  const actions: Actions = {
    handleParsedMessage,
    sendAsClientReply,
  }

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions,
        })
      })}
    </div>
  )
}

export default ActionProvider
