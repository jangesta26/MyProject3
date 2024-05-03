import { useState } from "react";
import { IoIosArrowDown  } from "react-icons/io";

export const Accordion = (props:any) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <>
   <div className='flex flex-col '>
        <div className='faq__item flex flex-col px-[30px] pt-7 border-b cursor-pointer select-none'>
        {/* title and icon */}
        <button 
        className='flex items-center justify-between mb-[10px] xl:mr-[5px]'
        onClick={()=> setAccordionOpen(!accordionOpen)}
        >
        <h4 className='h4'>{props.question}</h4>
        <div className='faq__btn text-accent'>
            <IoIosArrowDown  className={`text-2xl transform origin-center transition duration-200 
            ${accordionOpen && '!rotate-180'}`}/> 
            
        </div>
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 
            ${accordionOpen ?
                "grid-rows-[1fr] opacity-100"
                :
                "grid-rows-[0fr] opacity-0"
            }`}>
            <p className='overflow-hidden font-light text-[20px]'>
                {props.answer}
            </p>
        </div>
        </div>
    </div>
    </>
  )
}
