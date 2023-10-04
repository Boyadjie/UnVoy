import './globals.css';
import Link from 'next/link';

import Head from './Head';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <Head />
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
  );
}
