import { IconSearch } from "@tabler/icons-react"
import React from "react"

const SearchInput = () => {
  return (
    <div className="bg-gray-200 text-gray-600 flex justify-between items-center py-2 px-3 rounded-md mt-8">
      <input
        placeholder="Search"
        className="bg-gray-200 outline-none placeholder:text-gray-600"
      />
      <IconSearch />
    </div>
  )
}

export default SearchInput
