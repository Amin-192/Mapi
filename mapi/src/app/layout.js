
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Provider from "./components/Provider";


export const metadata = {
  title: "Prompty",
  description: "",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      </head>
      <Provider>
      <body
        className={` bg-gradient-to-r from-fuchsia-400 to-violet-600`}
        
      >
         <Header/>
        {children}
      </body>
      </Provider>
    </html>
  );
}
