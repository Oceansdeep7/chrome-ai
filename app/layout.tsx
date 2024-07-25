import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Metadata} from "next";

export const metadata: Metadata = {
    applicationName: 'BrowserAI',
    manifest: "/manifest.json",
    viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <main className="min-h-screen">
        {children}
      </main>
      <Footer/>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-7HV5DFEDXE`} />
      <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-7HV5DFEDXE');
        `}
      </Script>
      <ToastContainer/>
      </body>
    </html>
  );
}
