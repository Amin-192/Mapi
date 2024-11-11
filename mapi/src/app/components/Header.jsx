'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='bg-black text-white'>
      <nav className='flex justify-between rounded-2xl shadow-2xl py-4 px-7 items-center'>
        {/* Logo */}
        <div>
          <Link href="/" className='flex gap-1'>
            <img src="/logo.png" alt="Logo" className='h-12 w-12 rounded-2xl shadow-2xl' />
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className='hidden md:flex gap-8 items-center '>
          <li className=' font-serif font-bold'>
            <Link href="/">Home </Link> 
          </li>
          <li className='font-bold font-serif'>
            <Link href="/pages/About">About</Link>
          </li>
          <li className='font-bold'>
            <Link href="/pages/products">Products</Link>
          </li>
          <li className='font-bold'>
            <Link href="/pages/test-loading">test-loading</Link>
          </li>
          </ul>

          <div className='hidden md:flex'>
            <ul className='flex gap-7'>
          <li className='font-bold'>
            <Link href="/auth/login">Login</Link>
          </li>
          <li className='font-bold'>
            <Link href="/auth/register">Sign up</Link>
          </li>
        </ul>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
        </div>

        {/* Modal Menu for Mobile */}
        {isModalOpen && (
          <div className='fixed top-0 right-0 w-[70%] bg-pink-300 p-4 transition-transform duration-300 ease-in-out md:hidden z-50'>
            <button className="text-right mb-4" onClick={toggleModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ul className='flex flex-col gap-4'>
              <li className='font-bold'>
                <Link href="/" onClick={toggleModal}>Home</Link>
              </li>
              <li className='font-bold'>
                <Link href="/pages/About" onClick={toggleModal}>About</Link>
              </li>
              <li className='font-bold'>
                <Link href="/contact" onClick={toggleModal}>Contact</Link>
              </li>
              <li className='font-bold'>
                <Link href="/login" onClick={toggleModal}>Login</Link>
              </li>
              <li className='font-bold'>
                <Link href="/register" onClick={toggleModal}>Sign up</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}