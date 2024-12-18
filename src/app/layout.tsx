
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "LGBTC",
  description: "lgbtc most colorful coin",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <head><link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Barrio&family=Sour+Gummy&display=swap" rel="stylesheet" />
        
      </head>
      <body
        className={`barrio-regular antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
