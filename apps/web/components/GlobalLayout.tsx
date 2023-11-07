import Link from "next/link";
import { Children } from "react"
import { Header } from "./Header";
import { Footer } from "./Footer";



export default function GlobalLayout(
    {children}: {
        children: React.ReactNode;
      }
): JSX.Element {

    return (
        <>
        <Header />
        <main>
        {children}
        </main>
        <Footer />
        </>
    )
}


