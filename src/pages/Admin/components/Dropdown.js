import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Dropdown(props) {
  const navigate=useNavigate();
  return (
    <div id="dropdown" className="z-40 absolute my-12 text-text_secondary bg-secondary divide-y  divide-gray-100 rounded-b-lg rounded-l-lg  shadow drop-shadow right-8">
        <ul className="py-2 text-sm text-gray-900 dark:text-gray-300" aria-labelledby="dropdownDefaultButton">
            {props.options.map((option)=>{
                return <button className="px-3 py-2 w-full text-left flex gap-4 justify-between hover:bg-text_secondary hover:bg-opacity-10" onClick={()=>navigate(option.path)}>{option.option} {option.icon}</button>
            })}
        </ul>
    </div>
  )
}
