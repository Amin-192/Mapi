'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Image from 'next/image';

export default function Header() {
  const { data: session } = useSession(); // Session data for user authentication state
  const [providers, setProviders] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // For mobile menu handling

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders(); // Fetch available auth providers
      setProviders(response);
    };
    fetchProviders();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle mobile menu visibility
  };

  return (
    <div className='text-white h-[60px]'>
      <nav className='flex justify-between rounded-2xl px-7 items-center relative top-2'>
        {/* Logo */}
        <div className='flex'>
          <Link href="/" className='flex gap-1'>
            <Image
              src="/logo.png"
              alt="Logo"
              className='rounded-2xl shadow-2xl'
              width={50}
              height={50}
            />
          </Link>
        </div>

        {/* Navigation Links for Desktop */}
        

        {/* Authentication Buttons */}
        <div className='hidden md:flex'>
          <ul className='flex gap-7'>
            {session ? (
              <>
                <li>
                  < Link
                  className='button mr-8'
                  href='/pages/Create-prompt'
                   
                  >Create Post</Link>

                  <button
                    className='button'
                    onClick={() => signOut()}
                  >
                    Sign Out
                  </button>
                </li>
                <li>
                  <Link href='/Profile'>
                    <Image
                      src={session.user?.image || '/user.png'}
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
                <li key={provider.name}>
                  <button
                    type="button"
                    onClick={() => signIn(provider.id)}
                    className='button'
                  >
                    Sign In with {provider.name}
                  </button>
                </li>
              ))
            )}
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
             
              {session ? (
                <>
                  <li>
                    <button
                      className='button'
                      onClick={() => { signOut(); toggleModal(); }}
                    >
                      Sign Out
                    </button>
                  </li>
                  <li>
                    <Link href='/Profile'>
                      <Image
                        src={session.user?.image || '/user.png'}
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
                  <li key={provider.name}>
                    <button
                      type="button"
                      onClick={() => { signIn(provider.id); toggleModal(); }}
                      className='button'
                    >
                      Sign In with {provider.name}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}