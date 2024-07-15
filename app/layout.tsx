import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";



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
      </body>
    </html>
  );
}
