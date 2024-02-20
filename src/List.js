import React from 'react'
import checkMark from "./mentorFiles/assets/images/icon-list.svg"

const List = () => {
  const text = [
    "Product discovery and building what matters",
     "Measuring to ensure updates are a success",
     "And much more!"
  ]

  let key = 0;
  return (
    <>
      {text.map(index => {
        return (
            <div className='listBox' key={key++}>
              <img src={checkMark} alt="" />
              <p>{index}</p>
            </div>
        )
        
      })}
    </>
  )
}

export default List