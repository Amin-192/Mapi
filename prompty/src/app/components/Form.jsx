import React from 'react'

export default function Form({
  type,post,setPost,submittimg,handleSubmit
}) {
  return (
    <div className='w-full max-w-full flex-start flex-col'>
    
      <h1 className='text-center text-7xl font-bold'
      ><span>{type} Post</span> </h1>
      <p className='text-left max-w-md'>
        {type} and share amazing prompts with the world and 
        let your imagination ruun wild with any A-I powered platform
      </p>

      <form
      onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label htmlFor="">
          <span>Your AI Prompt</span>
        </label>

      </form>
      </div>
    
  )
}
