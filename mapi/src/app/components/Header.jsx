'use client';
import React, { useState , useEffect} from 'react';
import Link from 'next/link';
import DivGenerator from './DivGenerator';
import {signIn , signOut , useSession, getProviders} from 'next-auth/react'
import Image from 'next/image';
export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [login, setLogin] = useState(true); // Use state for login control

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogin = () => {
    setLogin(!login); // Toggle login state instead of using a separate condition
  };
  const [providers , setProviders] = useState(null);
  useEffect(()=>{
    const setProviders = async () => {
      await getProviders();

    setProviders(response);
    }
    setProviders()
  },[])
  return (
    <div className=' text-white h-[60px]'>
      <DivGenerator/>
      <nav className='flex justify-between rounded-2xl   px-7 items-center relative top-2'>
        {/* Logo */}
        <div className='flex'>
        <button onClick={handleLogin}>{login ? 'Log out' : 'Log in'}</button>
          <Link href="/" className='flex gap-1'>
            <Image src="/logo.png" alt="Logo"
             className=' rounded-2xl shadow-2xl'
             
             width={50}
             height={50}
             
              />
          </Link>
        </div>
        

        {/* Navigation Links for Desktop */}
        <ul className='hidden md:flex gap-8 items-center '>
          <li className='font-serif font-bold'>
            {login ? (
              <Link href="/pages/dashboard">Dashboard</Link>
            ) : (
              <h1>LOG IN</h1>
            )}
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
    {
      login ? (
        <>
          <li>
            <button
              className='button'
              onClick={signOut}
            >
              Sign Out
            </button>
          </li>
          <li>
            <Link href={'/Profile'}>
              <Image
                src={'/user.png'}
                alt="User"
                width={37}
                height={37}
                className='rounded-full'
              />
            </Link>
          </li>
        </>
      ) : (
        providers &&
        Object.values(providers).map((provider) => (
          <li key={provider.name}> {/* Add a key */}
            <button
              type="button" // Corrected type
              onClick={() => signIn(provider.id)}
              className='button'
            >
              Sign In with {provider.name}
            </button>
          </li>
        ))
      )
    }
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
              {login ? (<div> 
                <>
          <li>
            <button
              className='button'
              onClick={signOut}
            >
              Sign Out
            </button>
          </li>
          <li>
            <Link href={'/Profile'}>
              <Image
                src={'/user.png'}
                alt="User"
                width={37}
                height={37}
                className='rounded-full'
              />
            </Link>
          </li>
        </>
              </div>) : 
              (
                providers &&
                Object.values(providers).map((provider) => (
                  <li key={provider.name}> {/* Add a key */}
                    <button
                      type="button" // Corrected type
                      onClick={() => signIn(provider.id)}
                      className='button'
                    >
                      Sign In with {provider.name}
                    </button>
                  </li>
                ))
              )
              
              }
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}