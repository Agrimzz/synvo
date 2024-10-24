import { IconSearch } from "@tabler/icons-react"
import React from "react"

const SearchInput = () => {
  return (
    <div className="bg-foreground/10 text-foreground/60 flex justify-between items-center py-2 px-3 rounded-md mt-8">
      <input
        placeholder="Search"
        className="bg-transparent flex-1 outline-none placeholder:text-foreground/60"
      />
      <IconSearch />
    </div>
  )
}

export default SearchInput
