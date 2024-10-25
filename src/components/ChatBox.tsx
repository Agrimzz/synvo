import { formatTime } from "@/utils"
import Image from "next/image"
import React from "react"

interface Message {
  message_text: string
  sent_at: string
  sender: {
    username: string
    avatar: string
  }
}

const ChatBox = ({ message }: { message: Message }) => {
  const isSender = message.sender.username === "You"
  return (
    <div
      className={`${isSender ? "self-end" : "self-start"} flex gap-2 items-end`}
    >
      {!isSender && (
        <Image
          src={message?.sender.avatar}
          width={32}
          height={32}
          alt={message.sender.username}
          className="rounded-full"
        />
      )}
      <div className="flex flex-col">
        <div className="flex gap-1 text-foreground font-semibold">
          <p>{message.sender.username}, </p>
          <p>{formatTime(message.sent_at)}</p>
        </div>

        <div
          className={`${
            isSender ? "bg-background-slate" : "bg-background"
          } rounded-md p-4 text-foreground`}
        >
          <p>{message.message_text}</p>
        </div>
      </div>
    </div>
  )
}

export default ChatBox
