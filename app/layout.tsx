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
        
        <body>{children}</body>
        </html>
    )
}
