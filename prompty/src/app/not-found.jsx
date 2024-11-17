'use client'
import React from 'react'
import Header from '../app/components/Header'
import Link from 'next/link'
export default function NotFound() {
  return (
    <div className='bg-gradient-to-r from-fuchsia-400 to-zinc-900 h-screen overflow-hidden relative flex items-center justify-center'>
      {/* Shooting Stars Animation */}
      <div className="absolute top-0 left-0 w-full h-full text-red-400 ">
        {/* Shooting stars */}
        <div className="star" style={{ top: '10%', left: '80%' }}>ERROR</div>
        <div className="star" style={{ top: '20%', left: '90%' }}>ERROR</div>
        <div className="star" style={{ top: '30%', left: '70%' }}>ERROR</div>
        <div className="star" style={{ top: '40%', left: '60%' }}>ERROR</div>
        <div className="star" style={{ top: '15%', left: '50%' }}>ERROR</div>
        <div className="star" style={{ top: '25%', left: '40%' }}>ERROR</div>
        <div className="star" style={{ top: '35%', left: '30%' }}>ERROR</div>
        <div className="star" style={{ top: '45%', left: '20%' }}>ERROR</div>
        <div className="star" style={{ top: '5%', left: '10%' }}>ERROR</div>
        <div className="star" style={{ top: '2%', left: '95%' }}>ERROR</div>
      </div>

      {/* Not Found Message */}
      <div className='flex flex-col gap-32'>
  <h2 className='text-5xl md:text-9xl font-bold font-cherry'>
    Page Not Found
  </h2>
  <div className="relative z-10">
    <Link href="/" className="text-6xl p-2 rounded-2xl bg-white hover:bg-gray-200 hover:scale-105 transition">
      GO BACK HOME
    </Link>
  </div>
</div>
      <style jsx>{`
        @keyframes shooting-star {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(-100vw); /* Change to move downwards */
            opacity: 0;
          }
        }

        .star {
          position: absolute;
          font-size: 20px; /* Set the font size */
          color: red; /* Set the text color to red */
          opacity: 0.7;
          animation: shooting-star 1.5s linear infinite;
          white-space: nowrap; /* Prevent wrapping of text */
        }

        /* Add animation delay for a more dynamic effect */
        .star:nth-child(1) { animation-delay: 0s; }
        .star:nth-child(2) { animation-delay: 0.3s; }
        .star:nth-child(3) { animation-delay: 0.6s; }
        .star:nth-child(4) { animation-delay: 0.9s; }
        .star:nth-child(5) { animation-delay: 1.2s; }
        .star:nth-child(6) { animation-delay: 1.5s; }
        .star:nth-child(7) { animation-delay: 1.8s; }
        .star:nth-child(8) { animation-delay: 2.1s; }
        .star:nth-child(9) { animation-delay: 2.4s; }
        .star:nth-child(10) { animation-delay: 2.7s; }
      `}</style>
    </div>
  )
}