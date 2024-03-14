import React from 'react'

interface ChildProps {
          readingTimes: number[]
}

export const ReadingTime: React.FC<ChildProps> = ({readingTimes}) => {
  return (
    <div className="reading-time border border-solid border-purple text-center py-6 rounded-lg">
          <h2 className={`text-2xl font-bold text-purple`}>Spent time on read : {
          readingTimes.length > 0 && readingTimes.reduce((accumultor, currentValue) => {
                    return accumultor + currentValue
          }, 0)} {readingTimes.length > 0 && "min"}</h2>
    </div>
  )
}
