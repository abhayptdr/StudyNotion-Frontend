import React from 'react'
import { BsFillPeopleFill } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";

function CourseCard(props) {
  return (
    <div>
       <div className={`${props.cardData.heading===props.currentCard? "bg-white text-richblack-200 shadow-yellow-50 shadow-[1rem_1rem_0_0]":"bg-richblack-800"} 
       flex flex-col justify-between  p-6 max-w-sm shadow-2xl  h-64 `} onClick={() => props.setCurrentCard(props.cardData.heading)}
       >
            <div className='flex flex-col'> 
                <h2 className="text-2xl font-bold mb-4">{props.cardData.heading}</h2>
                <p className='text-l font-extralight text-richblack-200'>{props.cardData.description}</p>
            </div>
            <div className="flex justify-between font-bold items-end mt-10 text-richblack-200">
                <div className="flex text-sm text-gray-500"><BsFillPeopleFill /><p className='ml-2'>Beginner</p></div>
                <span className="flex text-sm text-gray-500"><GiNotebook /><p className='ml-2'>Lessons</p></span>
            </div>
        </div>
    </div>
  )
}

export default CourseCard
