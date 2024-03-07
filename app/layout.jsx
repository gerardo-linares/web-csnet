import { Inter } from "next/font/google";
import "./globals.css";

//componentes//
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//provider de themes//
import { ThemeProvider } from "./../components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSNet",
  description: "Internet de gran velocidad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
