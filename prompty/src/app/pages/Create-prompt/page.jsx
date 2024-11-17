'use client'
import React, { useState } from 'react'
import Form from '../../components/Form'
export default function createPrompt() {
  const [submitting, setSubmitting]= useState(false);
  const [post, setPost]= useState({
    prompt:'',
    tag:'',

  });
  const createPrompt = async (e)=>{

  }
  return (
    <div>
      <Form 
      type ='Create'
      post={post}
      setPost={post}
      handleSubmit={createPrompt}
      
      />
    </div>
  )
}
