'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import promptCard from '../components/PromptCard'
export default function Feed() {
  return (
    <section className=''>
      <form className='relative w-full flex-container'
      
      >
        <input
          type='text'
          className=' pl-10 border-2 border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Search for a tag or username.'
        />
        <button className=' top-0 p-2 bg-blue-500 text-white rounded-md shadow-md'>
          Search
        </button>
      </form>
    </section>
  )
}
