import { useEffect } from "react"
import { useAppSelector } from "../../../app/hooks"
import { Actions } from "../ActionProvider"
import DatePicker from "./DatePicker"
import TimePicker from "./TimePicker"

interface Props {
  actions: Actions
}

export default function SlotPicker({ actions }: Props) {
  const { date, time } = useAppSelector((state) => state.studentInfo.slot)

  useEffect(() => {
    if (!date || !time) {
      return
    }
    actions.sendAsClientReply(`${date} ${time}`)
  }, [date, time])
  return (
    <>
      <DatePicker />
      <TimePicker />
    </>
  )
}
