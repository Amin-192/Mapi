// app/dashboard/layout.js
export const metadata = {
    title: "Dashboard - Mapi",
    description: "Dashboard section of the app",
  };
  
  export default function DashboardLayout({ children }) {
    return (
      <html lang="en">
        <body className="bg-gradient-to-r from-fuchsia-400 to-violet-600">
          {children} {/* No Header included here */}
        </body>
      </html>
    );
  }