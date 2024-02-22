import { Josefin_Slab } from "next/font/google";
import { Nunito } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { Rubik_Mono_One } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const rubik_mono_one = Rubik_Mono_One({
  weight: ['400'],
  subsets: ['latin']
});

const nunito = Nunito({
  weight: ['1000'],
  subsets: ['latin']
});

const open_sans = Open_Sans({
  weight: ['400', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: "C & B Fantasy Baseball League",
  description: "A Minneapolis Goddamn Institution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Header />
        <Navbar />
        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}
