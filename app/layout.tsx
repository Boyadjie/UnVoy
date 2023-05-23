import './globals.css'
import Head from './Head'
import Link from "next/link";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Head/>
        <body>
        <header>
            <nav>
                <Link href="/">Accueil</Link>--
                <Link href="/login">Connexion</Link>--
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
        {children}
        </body>
        </html>
    )
}
