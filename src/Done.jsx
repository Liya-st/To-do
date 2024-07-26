import React from 'react'

export default function Done({done}) {
  return (
    <div className='flex justify-between w-[375px] h-12 rounded-lg p-2 text-[#78CFB0] bg-[#15101C] line-through'>
        {done}
    </div>
  )
}
