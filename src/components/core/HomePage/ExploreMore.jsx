// import React from 'react'
// import  {HomePageExplore} from "../../../data/homepage-explore"
// import HighlightText from './HighlightText';
// import { useState } from 'react';
// import CourseCard from './CourseCard';


// const tabsName = [
//     "Free",
//     "New to coding",
//     "Most popular",
//     "Skills paths",
//     "Career paths",
// ];

// const ExploreMore = () => {

//     const [currentTab, setCurrentTab] = useState(tabsName[0]);
//     const [courses, setCourses] = useState(HomePageExplore[0].courses);
//     const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

//     const setMyCards = (value) => {
//         setCurrentTab(value);
//         const result = HomePageExplore.filter((course) => course.tag === value);
//         setCourses(result[0].courses);
//         setCurrentCard(result[0].courses[0].heading);
//         console.log(result[0].courses);
//     }


//   return (
//     <div className=''>

//       <div className='text-3xl font-semibold text-center lg:text-4xl'>
//         Unlock the 
//         <HighlightText text={"Power of Code"} />
//       </div>

//       <p className='text-center text-richblack-300 text-sm text-[16px] mt-3'>
//         Learn to build anything you can imagine
//       </p>  

//       <div className='mt-5 flex flex-row rounded-full bg-richblack-800 mb-3 border-richblack-100
//       px-1 py-1'>
//       {
//         tabsName.map( (element, index) => {
//             return (
//                 <div
//                 className={` text-[13px] lg:text-[16px] flex flex-row items-center gap-2 
//                 ${currentTab === element 
//                 ? "bg-richblack-900 text-richblack-5 font-medium"
//                 : "text-richblack-200" } rounded-full transition-all duration-200 cursor-pointer
//                 hover:bg-richblack-900 hover:text-richblack-5 text-center px-3 py-1 lg:px-7 lg:py-2`}
//                 key={index}
//                 onClick={() => setMyCards(element)}
//                 >
//                     {element}
//                 </div>
//             )
//         })
//       }

//       </div>

//       <div className='lg:h-[150px]'></div>

//       {/* course card ka group */}

//       <div className=' flex gap-9 w-full justify-center mt-5 flex-wrap lg:absolute right-0 left-0 mr-auto ml-auto '>
//         {
//             courses.map(  (element, index) => {
//                 return (
//                     <CourseCard 
//                     key={index}
//                     cardData = {element}
//                     currentCard = {currentCard}
//                     setCurrentCard = {setCurrentCard}
//                     />
//                 )
//             } )
//         }
//       </div>


//     </div>
//   )
// }

// export default ExploreMore




import React from 'react';
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from './HighlightText';
import { useState } from 'react';
import CourseCard from './CourseCard';

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

    return (
        <div className='container mx-auto px-4 mx-auto flex flex-col items-center'>
            <div className='text-3xl lg:text-4xl font-semibold text-center'>
                Unlock the <HighlightText text="Power of Code" />
            </div>
            <p className='text-center mt-3 text-sm lg:text-base text-richblack-300'>
                Learn to build anything you can imagine
            </p>  
            <div className='mt-10 flex flex-wrap justify-center rounded-full bg-richblack-800 mb-3 border-richblack-100 px-1 py-1 lg:max-w-3xl'>
                {tabsName.map((element, index) => (
                    <div
                        key={index}
                        className={`text-sm lg:text-base flex items-center gap-2 px-3 py-1 lg:px-7 lg:py-2 cursor-pointer
                            ${currentTab === element 
                                ? "bg-richblack-900 text-richblack-5 font-medium"
                                : "text-richblack-200 hover:bg-richblack-900 hover:text-richblack-5"
                            } rounded-full transition-all duration-200`}
                        onClick={() => setMyCards(element)}
                    >
                        {element}
                    </div>
                ))}
            </div>
            <div className='lg:h-10'></div>
            <div className='flex gap-9 justify-center flex-wrap translate-y-20 '>
                {courses.map((element, index) => (
                    <CourseCard 
                        key={index}
                        cardData={element}
                        currentCard={currentCard}
                        setCurrentCard={setCurrentCard}
                    />
                ))}
            </div>
        </div>
    );
}

export default ExploreMore;
