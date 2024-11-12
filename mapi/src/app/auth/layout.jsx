// app/auth/layout.tsx
import React from 'react';
import "../../app/globals.css"; // Ensure this path is correct

export const metadata = {
  title: "Mapi - Auth",
  description: "Authentication Pages",
};

export default function AuthLayout({ children }) {
  return (
    <div className={`bg-gradient-to-r from-fuchsia-400 to-violet-600 min-h-screen flex items-center justify-center`}>
      <h1 className='relative right-[10%] font-bold text-4xl font-cherry '>AUTHENTICATION</h1>
      {children}
    </div>
  );
}