'use client'
import React, { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const handleSave = () => {
    setList([...list, input]);
    setInput(''); // Optional: Clear input after saving
  };
const [modal,setModal]= useState('')
  const isLoggedin = true;

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
  return (
    <div>
      <input
        type='text'
        className='p-2 border-green-300'
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
      />
      <button
        className='p-5 rounded-2xl bg-white ml-7'
        onClick={handleSave}
      >
        Save
      </button>
      <h1>{input}</h1>
      <ul>
        {isLoggedin ? (
          list.map((item, index) => (
            <li key={index}>{item}</li> 
          ))
        ) : (
          <h1>Login first</h1>
        )}
      </ul>
      <ul>
        {products.map((product) => (
          <li key={product.id}
          style={{ color: product.isFruit ? 'pink' : 'green' }}
          >
            {product.title} {product.isFruit ? '(Fruit)' : '(Vegetable)'}
           
          </li>
        ))}
      </ul>
    </div>
  );
}