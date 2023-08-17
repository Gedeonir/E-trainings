import React from 'react'
import {AiOutlineLoading3Quarters} from "react-icons/ai"

function Loading(props) {
    return (
        <div className='py-2 px-8 flex justify-center text-secondary w-full'>
            <AiOutlineLoading3Quarters size={props.size} className="animate-spin h-5 w-5"/>
        </div>
    )
}

export default Loading