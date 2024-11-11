'use client'
import React from 'react'
import { useState } from 'react'

export default function page() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([]);
  const handleSave =()=>{
   setList([...list , input])

  }
  
  return (
    <div>
      
      <input type='text' className='p-2 border-green-300 ' onChange={(ev)=> setInput(ev.target.value)} />
      <button className='p-5 rounded-2xl bg-white ml-7' onClick={handleSave}>Save</button>
      <h1>{input}</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
