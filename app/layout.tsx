import './globals.css';

import {Kodchasan, Nunito} from 'next/font/google';

import Head from './Head';

const kodchasan = Kodchasan({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kodchasan',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nunito',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${kodchasan.variable} ${nunito.variable}`}>
      <Head />
      <body>{children}</body>
    </html>
  );
}
