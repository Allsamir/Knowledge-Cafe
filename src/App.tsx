import './App.css'
import { Header } from './components/Header'
import { Blogs } from './components/Blogs'
import { Bookmarks } from './components/Bookmarks'
import { useState } from 'react'
import { ReadingTime } from './components/ReadingTime'

function App() {

  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [readingTimes, setReadingTime] = useState<number[]>([]);

  const handleBookmarks = (bookmarkedBlog:string) => {
    setBookmarks(
      [...bookmarks, bookmarkedBlog]
    )
  }

  const handleReadingTime = (readingTime: number) => {
    setReadingTime(
      [...readingTimes, readingTime]
    )
  }

  return (
    <>
        <Header />
        <div className="flex flex-col md:flex-row gap-8">
          <Blogs handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime}/>
          <div className="md:w-1/3 w-full p-4">
          <ReadingTime readingTimes={readingTimes}/>
          <Bookmarks bookmarks={bookmarks}/>
          </div>
        </div>
    </>
  )
}

export default App
