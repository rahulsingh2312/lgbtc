
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`pacifico-regular antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
