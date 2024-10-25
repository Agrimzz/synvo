"use client"

import ChatBox from "@/components/ChatBox"
import { conversation, messageCards } from "@/constants"
import { ChatItem } from "@/types"
import {
  IconPaperclip,
  IconPhone,
  IconSend,
  IconVideo,
} from "@tabler/icons-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"

const Chat = () => {
  const { id } = useParams()

  const [currentChat, setCurrentChat] = useState<ChatItem | null>(null)

  useEffect(() => {
    const chat = messageCards.find((chat) => chat.id === Number(id))
    setCurrentChat(chat ?? null)
  }, [id])

  if (!currentChat) {
    return null
  }
  return (
    <div className="w-full h-full bg-background flex-1 p-4 flex gap-4">
      <div className="bg-background-slate/40 rounded-xl flex-1 p-4 flex flex-col">
        <div className="w-full flex justify-between items-center border-foreground/10 border-b-2 pb-4">
          <div className="flex items-center gap-2 ">
            <Image
              src={currentChat.avatar}
              width={64}
              height={64}
              alt={currentChat.name}
              className="rounded-full"
            />
            <p className="text-foreground font-semibold text-xl">
              {currentChat.name}
            </p>
          </div>

          <div className="flex gap-2 text-primary items-center">
            <IconPhone />
            <IconVideo />
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col justify-end">
          {conversation.messages.map((message, i) => (
            <ChatBox key={i} message={message} />
          ))}
        </div>

        <div className="w-full bg-background rounded-md shadow-md mt-4 p-3 flex items-center gap-2">
          <input
            type="text"
            className="bg-background outline-none flex-1"
            placeholder="Write your message"
          />
          <div className="flex items-center gap-4 text-foreground/40">
            <IconPaperclip />
            <div className="p-2 bg-primary rounded-md text-background">
              <IconSend />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[300px]"></div>
    </div>
  )
}

export default Chat
