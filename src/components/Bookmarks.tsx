import React from 'react'

interface ChildProps {
  bookmarks: string[]
}

export const Bookmarks: React.FC<ChildProps> = ({bookmarks}) => {

  return (
    <div>
      <div className="bookmark p-7 bg-gray text-black rounded-lg mt-12">
        <h2 className="text-2xl font-bold">Bookmarked {bookmarks.length > 1 ? "Blogs" : "Blog" } : {bookmarks.length}</h2>
        {bookmarks.map((bookmark, index) => <div key={index} className="p-6 bg-white my-4 rounded-lg">{bookmark}</div>)}
      </div>
    </div>
  )
}
