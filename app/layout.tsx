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
        <header>
            <nav>
                <Link href="/">Accueil</Link>--
                <Link href="/login">Connexion</Link>
            </nav>
        </header>
        <body>{children}</body>
        </html>
    )
}
