import MessageCards from "@/components/MessageCards"
import SearchInput from "@/components/SearchInput"
import { messageCards } from "@/constants"
import { IconPlus } from "@tabler/icons-react"
import React from "react"

const Inbox = () => {
  return (
    <div className="w-[400px] bg-background py-2 px-4 overflow-y-scroll">
      <h2 className="text-2xl text-foreground font-semibold pb-4 border-gray-200 border-b-2">
        Inbox
      </h2>
      <SearchInput />

      <div className="mt-8 flex justify-between items-center text-foreground/60 ">
        <p className="font-semibold">Latest Chats</p>
        <div className="p-2 bg-accent rounded-md">
          <IconPlus size={16} />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        {messageCards.map((items) => (
          <MessageCards key={items.id} items={items} />
        ))}
      </div>
    </div>
  )
}

export default Inbox
