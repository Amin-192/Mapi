import React from 'react'
import Feed from './components/Feed'
import  Provider from './components/Provider'
export default function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='header_text text-center'>Discover & Share
           <br className='max-md:hidden'/>
           <span className="gradient_combined">AI-powered Prompts</span>
       </h1>
       <p className='text-center'>Prompty is an open source Ai prompting tool for the modern world to discover,
        create and share prompts
       </p>
       <Feed/>
    </section>
  )
}
