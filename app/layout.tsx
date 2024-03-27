import {Kodchasan, Nunito, Open_Sans} from 'next/font/google';

import './globals.css';

import {AuthProvider} from '../src/context/AuthContext';
import {LevelChoiceProvider} from '../src/context/LevelChoiceContext';
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

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="fr"
      className={`${kodchasan.variable} ${nunito.variable} ${open_sans.variable}`}
    >
      <Head />
      <body>
        <AuthProvider>
          <LevelChoiceProvider>{children}</LevelChoiceProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
