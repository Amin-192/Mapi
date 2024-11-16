// app/auth/layout.tsx
import React from 'react';
import "../../app/globals.css"; 

export const metadata = {
  title: "Mapi - Auth",
  description: "Authentication Pages",
};

export default function AuthLayout({ children }) {
  return (
    <div className={`bg-gradient-to-r from-fuchsia-400 to-violet-600 min-h-screen flex items-center justify-center`}>
   
      <img src="/logo.png" alt="Logo" className='h-[633px] rounded-2xl w-[600px]' />
      {children}
    </div>
  );
}