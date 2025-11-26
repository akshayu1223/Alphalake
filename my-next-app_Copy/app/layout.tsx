import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import HeaderBar from "@/components/header/HeaderBar";

export const metadata = {
  title: "RateMyShift Dashboard",
  description: "Senior Manager Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ⭐ Font Awesome CDN */}
        
     <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  crossOrigin="anonymous"
  referrerPolicy="no-referrer"
/>
   <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/eos-icons/dist/css/eos-icons.css"
        />
      </head>

      <body>
        {/* Global Navbar */}
        <Navbar />
          <Sidebar />
        {/* Push below fixed navbar */}
        <div className="pt-[61px]">{children}</div>
      </body>
    </html>
  );
}
