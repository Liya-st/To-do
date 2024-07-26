import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <div className='bottom-0 absolute w-full text-center'>
        © {year}
    </div>
  )
}
