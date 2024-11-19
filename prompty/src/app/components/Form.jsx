import React from 'react'
import Link from 'next/link'
export default function Form({
  type,post,setPost,submittimg,handleSubmit
}) {
  return (
    <div className='w-full max-w-full flex flex-col justify-center items-center ' >
    
      <h1 className='text-center text-8xl font-bold'
      ><span>{type} Post</span> </h1>
      <p className='text-left max-w-md mt-4'>
        {type} and share amazing prompts with the world and 
        let your imagination ruun wild with any A-I powered platform
      </p>

      <form
      onSubmit={handleSubmit}
      className='mt-14 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label htmlFor="">
          <span className='font-semibold text-base text-gray-700'>
            Your AI Prompt
            </span>
            <textarea
              className='w-full h-32 mt-2  border-gray-300 rounded-2xl shadow-lg p-2'
              id='post'
              value={post.prompt}
              onChange={(e) => setPost({
                ...post,
                prompt: e.target.value,
               
              })}
              placeholder='Write your prompt here...'
              />
        </label>

        <label htmlFor="">
        Tag {' '}
          <span className='font-semibold text-base text-gray-700'>
            (#product,#web-development, #idea)
            </span>
            <input
              className=' w-full  border-gray-300 rounded-2xl shadow-lg p-2'
              id='post'
              value={post.target}
              onChange={(e) => setPost({
                ...post,
                tag: e.target.value,
               
              })}
              placeholder='#tag'
              />
        </label>
        <div className='flex justify-end mx-3 mb-5 gap-4 '>
          <Link
          className='text-gray-600 py-2'
          href='/'
                 
                 >
          cancel</Link>
          <button
          type='submit'
          disabled={submittimg}
          className='button'
          >
            {submittimg ? `${type}...` : type}
          </button>
        </div>
      </form>
      </div>
    
  )
}
