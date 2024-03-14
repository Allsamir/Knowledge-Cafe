import React, { useEffect, useState } from 'react'
import { Blog } from './Blog'

interface Blogs {
        id: number,
        cover: string,
        title: string,
        author_img: string,
        author: string,
        posted_date: string,
        reading_time: number,
        hashtags: Array<string>
}

interface ChildProps {
          handleBookmarks: (handleBookmarks: string) => void
          handleReadingTime:(handleReadingTime: number) => void
}

export const Blogs: React.FC<ChildProps> = ({handleBookmarks, handleReadingTime}) => {
          const [blogs, setBlogs] = useState<Blogs[]>([]);
          const [spinner, setSpinner] = useState(true)

          useEffect(() => {
                    const loadBlogsData = async () => {
                              const response = await fetch("./blog.json");
                              const data = await response.json();
                              setBlogs(data)
                              setSpinner(false)
                    }
                    loadBlogsData()
          }, [])

  return (
    <>
    <div className='md:w-2/3 w-full p-4'>
          {spinner && <div className="text-center"><span className="loading loading-dots loading-lg"></span></div>}
          {blogs.map(blog => <Blog key={blog.id} blogs={blog} handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}/>)}
    </div>
    </>
  )
}
