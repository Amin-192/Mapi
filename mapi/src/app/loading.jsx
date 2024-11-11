import React from 'react'

export default function Loading() {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center">
    <div className="w-[500px] mt-14 h-[500px] border-8 text-purple-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-black rounded-full">
     <img className='w-[60px] h-[60px] rounded-2xl ' src="/logo.png" alt="Boba-Logo" />
    </div>
  </div>
  )
}
