import React from 'react'
import { useState } from 'react'

interface ChildProps {
     blogs: {
        id: number,
        cover: string,
        title: string,
        author_img: string,
        author: string,
        posted_date: string,
        reading_time: number,
        hashtags: Array<string>
    }
     handleBookmarks: (handleBookmarks: string) => void
     handleReadingTime: (handleReadingTime: number) => void
}

export const Blog: React.FC<ChildProps> = ({blogs, handleBookmarks, handleReadingTime}) => {
          const [fill, setFill] = useState<string>('none')

  return (
          <div className="mb-20 text-black">
                    <img src={blogs.cover} alt="" className={`rounded-lg w-full`}/>

                    <div className="flex justify-between my-4">

                              <div className='flex items-center gap-4'>
                                        <img src={blogs.author_img} alt="" className='w-[3.5rem] h-[3.5rem] rounded-[3.5rem]'/>
                                        <div>
                                                  <h3 className="font-bold text-2xl">{blogs.author}</h3>
                                                  <p className="font-semibold text-base">{blogs.posted_date}</p>
                                        </div>
                              </div>

                              <div>
                                        <div className="flex gap-4">
                                                  <span>{blogs.reading_time} minutes read</span>
                                                  <button type='button' onClick={() => {handleBookmarks(blogs.title); setFill('full')}}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={fill}>
                                                                      <path d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322Z" stroke="#111111" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                  </button>
                                        </div>
                              </div>
                    </div>
                    <h2 className="text-black text-4xl font-bold leading-[160%]">{blogs.title}</h2>
                    <div className="hastags flex gap-4 mb-8">
                              {blogs.hashtags.map((hastag, index) => <span key={index}>#{hastag}</span>)}
                    </div>

                    <button><a className="underline text-purple" onClick={() => handleReadingTime(blogs.reading_time)}>Mark as readed</a></button>
          </div>
  )
}
