"use client"
import { MessageItem } from "@/types"
import { formatTime, truncateText } from "@/utils"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import React from "react"

const MessageCards = ({ items }: { items: MessageItem }) => {
  const router = useRouter()
  const { id } = useParams()
  return (
    <div
      className={`${
        id === String(items.id) ? "bg-foreground/10" : "bg-background"
      }  p-2 flex justify-between items-center hover:bg-foreground/10 rounded-lg cursor-pointer`}
      onClick={() => router.push(`/inbox/${items.id}`)}
    >
      <div className="flex items-center gap-3">
        <Image
          src={items.avatar}
          width={48}
          height={48}
          alt={items.name}
          className="rounded-full"
        />

        <div className="flex flex-col gap-0.5">
          <h4 className="text-foreground font-bold text-xl">{items.name}</h4>
          <p className="text-foreground/60 text-sm">
            {truncateText(items.lastMessage, 20)}
          </p>
        </div>
      </div>

      <div>
        <p className="text-base text-foreground/60">{formatTime(items.time)}</p>
      </div>
    </div>
  )
}

export default MessageCards
