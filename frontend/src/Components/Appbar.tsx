import React from 'react'
import { Avatar } from './BlogCard'

const Appbar = () => {
  return (
    <div className='border-b flex justify-between px-10 py-4'>
        <div className='flex flex-col justify-center'>
            Medium
        </div>
        <div>

        </div>
        <Avatar  size={'big'} name='Mohit'/>
      
    </div>
  )
}

export default Appbar
